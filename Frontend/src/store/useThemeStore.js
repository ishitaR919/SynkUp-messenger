import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("synkup-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("synkup-theme", theme);
    set({ theme });
  },
}));