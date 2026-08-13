import { create } from "zustand";

const useUIStore = create((set) => ({
  selectedAmenidad: null,

  setSelectedAmenidad: (amenidad) => set({ selectedAmenidad: amenidad }),
}));

export default useUIStore;
