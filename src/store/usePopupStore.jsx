import { create } from "zustand";

export const usePopupStore = create((set) => ({
  activePopup: "register",
  openPopup: (id) => set({ activePopup: id }),
  closePopup: () => set({ activePopup: null }),
}));
