import { create, useStore } from "zustand";

const noteStore = create((set) => ({
    notes: [],
    newNotes: "",
    courses: [],
    hasFetched: false,
    hasFetchedNote: false,
    fetchCourse: async () => {
        if (!noteStore.getState().hasFetched) {
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

    addNote: (courseId, note) => {
        set((state) => ({
            notes: [...state.notes, { courseId, note }],
        }));
    },

    addCourse: (name) =>
        set((state) => {
            const newCourse = {
                id: String(state.courses.length + 1),
                name,
            };
            return { courses: [...state.courses, newCourse] };
        }),

    setNewNote: (note) => set({ newNote: note}),
}));

export default noteStore;