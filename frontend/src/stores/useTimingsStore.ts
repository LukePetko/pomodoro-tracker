import { create } from "zustand";
import { persist } from "zustand/middleware";

type TimingsState = {
  workInterval: number;
  shortBreak: number;
  longBreak: number;
  sessions: number;
};

type TimingsActions = {
  setTimings: (timings: Partial<TimingsState>) => void;
  resetTimings: () => void;
};

export type TimingsStore = TimingsState & TimingsActions;

const useTimingsStore = create<TimingsStore>()(
  persist(
    (set) => ({
      workInterval: 25,
      shortBreak: 5,
      longBreak: 15,
      sessions: 4,
      setTimings: (timings) => set((state) => ({ ...state, ...timings })),
      resetTimings: () =>
        set({
          workInterval: 25,
          shortBreak: 5,
          longBreak: 15,
          sessions: 4,
        }),
    }),
    { name: "timingsStore" },
  ),
);

export default useTimingsStore;
