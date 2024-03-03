import CircularProgress from "@/components/custom/CircularProgress";
import secondsToTime from "@/lib/convertSeconds";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [totalSeconds, setTotalSeconds] = useState(10 * 60);
  const [seconds, setSeconds] = useState(totalSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      setSeconds(totalSeconds === 0.5 * 60 ? 0.25 * 60 : 0.5 * 60);
      setTotalSeconds(totalSeconds === 0.5 * 60 ? 0.25 * 60 : 0.5 * 60);
    }

    const timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, totalSeconds]);

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen py-5">
      <h1 className="text-5xl font-bold flex justify-center gap-2">
        <span className="font-japanese underline underline-offset-8 decoration-red-700">
          トマト
        </span>
        <span className="font-heading"> Timer</span>
      </h1>
      <div className="flex gap-6 flex-col items-center">
        <CircularProgress
          percentage={(seconds / totalSeconds) * 100}
          text={secondsToTime(seconds)}
        />
      </div>
      <div />
    </div>
  );
};

export default Timer;
