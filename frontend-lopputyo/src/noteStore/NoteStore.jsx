import { create, useStore } from "zustand";

const noteStore = create((set) => ({
    notes: [],
    newNotes: "",
    courses: [],
    hasFetched: false,
    hasFetchedNote: false,
    fetchCourse: async () => {
        if (!noteStore.getState().hasFetched) { // This is mostly a replica of the one made in class.
            try {
                const response = await fetch(
                    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
                );
                const result = await response.json();
                set({ courses: result, hasFetched: true});
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    },

    fetchNote: async () => {
        if (!noteStore.getState().hasFetchedNote) {
            try {
                const response = await fetch(
                    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
                );
                const result = await response.json();
                set({ notes: result, hasFetchedNote: true});
            } catch (error) {
                console.error("Error fetching note data:", error);
            }
        }
    },

    addNote: (courseId, noteText) => set((state) => {
        const course = state.courses.find(course => course.id === parseInt(courseId)); // Find the course based on the selected courseId

        const newNote = {
            id: state.notes.length + 1, 
            text: noteText,
            timestamp: new Date().toISOString(), // There must be a better way to display time, but this works so I left it here.
            course: course,
        };

        return { notes: [...state.notes, newNote] }; 
}),

    addCourse: (name) =>
        set((state) => {
            const newCourse = { 
                id: state.courses.length ? state.courses[state.courses.length - 1].id + 1 : 1,  // Use the last course's id + 1 for new courses
                name,
            };
            return { courses: [...state.courses, newCourse] };
        }),

    setNewNote: (note) => set({ newNote: note}),
}));

export default noteStore;