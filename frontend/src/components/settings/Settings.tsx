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
          <div className="flex flex-col gap-2">
            <Label htmlFor="work-interval">Work Interval</Label>
            <div className="flex items-center gap-2">
              <Input id="work-interval" className="w-20" />
              <span>minutes</span>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <Label htmlFor="short-break">Short break</Label>
              <div className="flex items-center gap-2">
                <Input id="short-break" className="w-20" />
                <span>minutes</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="long-break">Long break</Label>
              <div className="flex items-center gap-2">
                <Input id="long-break" className="w-20" />
                <span>minutes</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="sessions">Number of sessions</Label>
            <div className="flex items-center gap-2">
              <Input id="sessions" className="w-20" />
              <span>minutes</span>
            </div>
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
