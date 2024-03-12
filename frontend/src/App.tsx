import { useEffect, useRef } from "react";
import Settings from "./components/settings/Settings";
import Timer from "./components/timer/Timer";
import { Button } from "./components/ui/button";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <>
      <div className="draggable fixed top-0 flex h-10 w-screen justify-end p-3">
        <Settings />
      </div>
      <div className="pt-10">
        <Timer />
      </div>
      <audio
        id="audio"
        src="https://github.com/LukePetko/pomodoro-tracker/blob/main/frontend/src/assets/notify.mp3?raw=true"
        preload="auto"
        ref={audioRef}
      />
      <Button
        onClick={() => {
          audioRef.current?.play();
        }}
      >
        play
      </Button>
    </>
  );
}

export default App;
