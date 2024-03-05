import CircularProgress from "@/components/custom/CircularProgress";
import secondsToTime from "@/lib/convertSeconds";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [currentTotalSeconds, setCurrentTotalSeconds] = useState(1);

  const [currentSession, setCurrentSession] = useState(0);
  const [sessions, setSessions] = useState(8);
  const [timePerSession, setTimePerSession] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  useEffect(() => {
    const timePerSession = localStorage.getItem("timePerSession");
    const timePerShortBreak = localStorage.getItem("timePerShortBreak");
    const timePerLongBreak = localStorage.getItem("timePerLongBreak");

    if (timePerSession) {
      setTimePerSession(parseInt(timePerSession));
    }
    if (timePerShortBreak) {
      setShortBreak(parseInt(timePerShortBreak));
    }
    if (timePerLongBreak) {
      setLongBreak(parseInt(timePerLongBreak));
    }
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      if (currentSession === sessions - 1) setCurrentSession(0);
      else setCurrentSession(currentSession + 1);

      if (currentSession === sessions - 1) {
        setSeconds(longBreak);
        setCurrentTotalSeconds(longBreak);
      } else if (currentSession % 2 === 0) {
        setSeconds(timePerSession);
        setCurrentTotalSeconds(timePerSession);
      } else if (currentSession % 2 === 1) {
        setSeconds(shortBreak);
        setCurrentTotalSeconds(shortBreak);
      }
    }

    const timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, currentSession]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between py-5">
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
      <button onClick={() => setSeconds(0)}>Next currentSession</button>
      <button
        onClick={() => {
          setCurrentSession(-1);
          setSeconds(0);
        }}
      >
        Reset currentSession
      </button>
      <div />
    </div>
  );
};

export default Timer;
