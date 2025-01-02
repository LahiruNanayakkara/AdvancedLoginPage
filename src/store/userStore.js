/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      login: (userDetails) => set((state) => ({ user: userDetails })),
      logout: () => set((state) => ({ user: null })),
    }),
    {
      name: "user-storage",
    }
  )
);
