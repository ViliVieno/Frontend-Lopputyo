import { create, useStore } from "zustand";

const noteStore = create((set) => ({
    notes: [],
    newNotes: "",
    courses: [],
    hasFetched: false,
    fetchNote: async () => {
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

    addNote: (courseId, note) => {
        set((state) => ({
            notes: [...state.notes, { courseId, note }],
        }));
    },

    setNewNote: (note) => set({ newNote: note}),
}));

export default noteStore;