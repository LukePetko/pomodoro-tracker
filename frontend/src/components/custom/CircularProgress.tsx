import React from "react";

type CircularProgressProps = {
  percentage: number;
  text: string;
};

const CircularProgress = ({ percentage, text }: CircularProgressProps) => {
  const radius = 135;
  const strokeWidth = 30;
  const svgSize = 390;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - percentage) / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg className="transform -rotate-90" width={svgSize} height={svgSize}>
        <circle
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={195}
          cy={195}
          stroke="currentColor"
          className="text-gray-300"
        />
        <circle
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={195}
          cy={195}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          className="text-red-700"
        />
      </svg>
      <div className="absolute">
        <span className="text-5xl font-semibold">{text}</span>
      </div>
    </div>
  );
};

export default CircularProgress;
