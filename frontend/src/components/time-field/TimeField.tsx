import { cn } from "@/lib/utils";
import React from "react";
import { Input } from "../ui/input";

type TimeFieldProps = {
  value: number;
  setValue: (value: number) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const TimeField = ({ value, setValue, className, ...rest }: TimeFieldProps) => {
  return (
    <div className={cn(`flex items-center gap-5`, className)} {...rest}>
      <button
        onClick={() => setValue(value - 1)}
        disabled={value <= 0}
        className="h-12 w-12"
      >
        -
      </button>
      <Input
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        type="number"
        min={0}
      />
      <button onClick={() => setValue(value + 1)} className="h-12 w-12">
        +
      </button>
    </div>
  );
};

export default TimeField;
