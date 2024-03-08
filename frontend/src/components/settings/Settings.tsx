import React from "react";
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
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import TimeField from "../time-field/TimeField";

const Settings = () => {
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
            <TimeField value={25} setValue={() => {}} />
          </div>
          <div className="flex w-full gap-8">
            <div className="flex flex-col gap-2">
              <Label htmlFor="short-break">Short break</Label>
              <TimeField value={5} setValue={() => {}} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="long-break">Long break</Label>
              <TimeField value={15} setValue={() => {}} />
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-2 pr-4">
            <Label htmlFor="sessions">Number of sessions</Label>
            <TimeField value={4} setValue={() => {}} />
          </div>
        </div>
        <DrawerFooter className="flex-row items-start gap-2">
          <DrawerClose className="w-full">
            <Button className="w-full">Save</Button>
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
