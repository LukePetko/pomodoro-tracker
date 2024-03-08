import { ChevronRight, Pause, Play, Redo, RotateCcw } from "lucide-react";
import React from "react";

type ControlsProps = {
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  nextSession: () => void;
  timer: NodeJS.Timeout | null;
  currentSession: number;
  sessions: number;
};

const Controls = ({
  startTimer,
  pauseTimer,
  resetTimer,
  nextSession,
  timer,
  currentSession,
  sessions,
}: ControlsProps) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="flex gap-4">
        <button
          onClick={resetTimer}
          className="rounded-md bg-red-500 px-4 py-2 text-white"
        >
          <RotateCcw size={24} />
        </button>
        {timer ? (
          <button
            onClick={pauseTimer}
            className="rounded-md bg-yellow-500 px-4 py-2 text-white"
          >
            <Pause size={24} />
          </button>
        ) : (
          <button
            onClick={startTimer}
            className="rounded-md bg-green-500 px-4 py-2 text-white"
          >
            <Play size={24} />
          </button>
        )}
        <button
          onClick={nextSession}
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <p>
        {currentSession + 1}/{sessions}
      </p>
    </div>
  );
};

export default Controls;
