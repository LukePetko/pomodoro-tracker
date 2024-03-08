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
              value={workInterval}
              setValue={(workInterval) => setTimings({ workInterval })}
            />
          </div>
          <div className="flex w-full gap-8">
            <div className="flex flex-col gap-2">
              <Label htmlFor="short-break">Short break</Label>
              <TimeField
                value={shortBreak}
                setValue={(shortBreak) => setTimings({ shortBreak })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="long-break">Long break</Label>
              <TimeField
                value={longBreak}
                setValue={(longBreak) => setTimings({ longBreak })}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-2 pr-4">
            <Label htmlFor="sessions">Number of sessions</Label>
            <TimeField
              value={sessions}
              setValue={(sessions) => setTimings({ sessions })}
            />
          </div>
        </div>
        <DrawerFooter className="flex-col items-start gap-4">
          <Button onClick={resetTimings} className="w-full" variant="ghost">
            Reset to default
          </Button>
          <DrawerClose className="w-full" asChild>
            <Button className="w-full">Back</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Settings;
