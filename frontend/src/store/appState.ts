import { create } from "zustand";

type AppState = {
  hasRecords: boolean | null;
  setHasRecords: (v: boolean) => void;
};

export const useAppState = create<AppState>((set) => ({
  hasRecords: null,
  setHasRecords: (v) => set({ hasRecords: v }),
}));
