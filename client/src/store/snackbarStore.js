/* eslint-disable no-unused-vars */
import { create } from "zustand";

export const useSnackbarStore = create((set) => ({
  open: false,
  message: "",
  severity: "",

  openSnackbar: (message, severity) =>
    set((state) => ({ open: true, message, severity })),
  closeSnackbar: () =>
    set((state) => ({ open: false, message: "", severity: "" })),
}));
