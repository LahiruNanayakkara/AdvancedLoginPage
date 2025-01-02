/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      themeMode: null,
      setThemeMode: (mode) =>
        set((state) => ({
          themeMode: mode,
        })),
    }),
    {
      name: "theme-storage",
    }
  )
);
