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
    <div className="flex gap-4">
      {timer ? (
        <button
          onClick={pauseTimer}
          className="rounded-md bg-yellow-500 px-4 py-2 text-white"
        >
          Pause
        </button>
      ) : (
        <button
          onClick={startTimer}
          className="rounded-md bg-green-500 px-4 py-2 text-white"
        >
          Start
        </button>
      )}
      <button
        onClick={resetTimer}
        className="rounded-md bg-red-500 px-4 py-2 text-white"
      >
        Reset
      </button>
      <button
        onClick={nextSession}
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Next
      </button>
      <p>
        {currentSession + 1}/{sessions}
      </p>
    </div>
  );
};

export default Controls;
