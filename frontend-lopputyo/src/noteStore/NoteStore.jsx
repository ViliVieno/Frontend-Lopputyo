import { create } from "zustand";

const noteStore = create((set) => ({
    notes: [],
    hasFetched: false,
    addNote: (ps) => set((state) => ({ notes: ps })),
    fetchNote: async () => {
        if (!noteStore.getState().hasFetched) {
            try {
                const response = await fetch(
                    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
                );
                const result = await response.json();
                set({ notes: result, hasFetched: true});
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }
}))

export default noteStore;