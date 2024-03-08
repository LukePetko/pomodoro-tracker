import CircularProgress from "@/components/custom/CircularProgress";
import secondsToTime from "@/lib/convertSeconds";
import useTimingsStore from "@/stores/useTimingsStore";
import React, { useEffect, useState } from "react";
import Controls from "../controls/Controls";

const Timer = () => {
  const { workInterval, shortBreak, longBreak, sessions } = useTimingsStore();

  const [seconds, setSeconds] = useState(0);
  const [currentTotalSeconds, setCurrentTotalSeconds] = useState(1);
  const [isBreak, setIsBreak] = useState(false);

  const [currentSession, setCurrentSession] = useState(0);

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timer) return;
    setTimer(
      setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000),
    );
  };

  const pauseTimer = () => {
    if (!timer) return;
    clearInterval(timer);
    setTimer(null);
  };

  const resetTimer = () => {
    if (timer) clearInterval(timer);
    setTimer(null);
    setSeconds(currentTotalSeconds);
  };

  const nextSession = () => {
    if (isBreak) {
      setIsBreak(false);
      console.log(currentSession, isBreak);
      if (currentSession === sessions - 1) setCurrentSession(0);
      else setCurrentSession(currentSession + 1);
    } else {
      setIsBreak(true);
      console.log(currentSession, isBreak);
    }

    if (isBreak) {
      setCurrentTotalSeconds(
        (currentSession === sessions - 1 ? longBreak : shortBreak) * 60,
      );
      setSeconds(
        (currentSession === sessions - 1 ? longBreak : shortBreak) * 60,
      );
    } else {
      setCurrentTotalSeconds(workInterval * 60);
      setSeconds(workInterval * 60);
    }
    // console.log(
    //   "nextSession",
    //   isBreak,
    //   currentSession,
    //   sessions,
    //   currentTotalSeconds,
    //   seconds,
    //   workInterval,
    //   shortBreak,
    //   longBreak,
    // );
  };

  useEffect(() => {
    console.log(currentSession, isBreak);
  }, [currentSession]);

  useEffect(() => {
    if (seconds <= 0) {
      nextSession();
    }
  }, [seconds]);

  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 py-5">
      <h1 className="flex justify-center gap-2 text-5xl font-bold">
        <span className="font-japanese underline decoration-red-700 underline-offset-8">
          トマト
        </span>
        <span className="font-heading"> Timer</span>
      </h1>
      <div className="flex flex-col items-center gap-6">
        <CircularProgress
          percentage={(seconds / currentTotalSeconds) * 100}
          text={secondsToTime(seconds)}
        />
      </div>
      <Controls
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
        nextSession={nextSession}
        timer={timer}
        currentSession={currentSession}
        sessions={sessions}
      />
    </div>
  );
};

export default Timer;
