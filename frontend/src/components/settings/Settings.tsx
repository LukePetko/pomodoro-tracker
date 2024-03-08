import React, { useState } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import TimeField from "../time-field/TimeField";
import useTimingsStore from "@/stores/useTimingsStore";

const Settings = () => {
  const {
    workInterval,
    shortBreak,
    longBreak,
    sessions,
    setTimings,
    resetTimings,
  } = useTimingsStore();

  const [workIntervalLocal, setWorkIntervalLocal] = useState(workInterval / 60);
  const [shortBreakLocal, setShortBreakLocal] = useState(shortBreak / 60);
  const [longBreakLocal, setLongBreakLocal] = useState(longBreak / 60);
  const [sessionsLocal, setSessionsLocal] = useState(sessions);

  const handleSave = () => {
    setTimings({
      workInterval: workIntervalLocal * 60,
      shortBreak: shortBreakLocal * 60,
      longBreak: longBreakLocal * 60,
      sessions: sessionsLocal,
    });
  };

  const handleReset = () => {
    setWorkIntervalLocal(25);
    setShortBreakLocal(5);
    setLongBreakLocal(15);
    setSessionsLocal(4);
    resetTimings();
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <SettingsIcon size={32} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-3xl">Timer Settings</DrawerTitle>
          <DrawerDescription>Set your own timer intevals.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-8 p-4">
          <div className="flex w-1/2 flex-col gap-2 pr-4">
            <Label htmlFor="work-interval">Work Interval</Label>
            <TimeField
              value={workIntervalLocal}
              setValue={setWorkIntervalLocal}
            />
          </div>
          <div className="flex w-full gap-8">
            <div className="flex flex-col gap-2">
              <Label htmlFor="short-break">Short break</Label>
              <TimeField
                value={shortBreakLocal}
                setValue={setShortBreakLocal}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="long-break">Long break</Label>
              <TimeField value={longBreakLocal} setValue={setLongBreakLocal} />
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-2 pr-4">
            <Label htmlFor="sessions">Number of sessions</Label>
            <TimeField value={sessionsLocal} setValue={setSessionsLocal} />
          </div>
        </div>
        <DrawerClose className="w-full">
          <Button onClick={handleReset} className="mx-4" variant="secondary">
            Reset to default
          </Button>
        </DrawerClose>
        <DrawerFooter className="flex-row items-start gap-2">
          <DrawerClose className="w-full">
            <Button className="w-full" onClick={handleSave}>
              Save
            </Button>
          </DrawerClose>
          <DrawerClose className="w-full">
            <Button variant="outline" className="w-full">
              Back
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Settings;
