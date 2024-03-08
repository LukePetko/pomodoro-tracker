import { ChevronRight, Pause, Play, Redo, RotateCcw } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

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
        <Button
          onClick={resetTimer}
          variant="outline"
          className="border-red-700 text-red-700 hover:border-black"
        >
          <RotateCcw size={24} />
        </Button>
        {timer ? (
          <Button
            onClick={pauseTimer}
            variant="outline"
            className="border-red-700 text-red-700 hover:border-black"
          >
            <Pause size={24} />
          </Button>
        ) : (
          <Button
            onClick={startTimer}
            variant="outline"
            className="border-red-700 text-red-700 hover:border-black"
          >
            <Play size={24} />
          </Button>
        )}
        <Button
          onClick={nextSession}
          variant="outline"
          className="border-red-700 text-red-700 hover:border-black"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
      <p>
        {currentSession + 1}/{sessions}
      </p>
    </div>
  );
};

export default Controls;
