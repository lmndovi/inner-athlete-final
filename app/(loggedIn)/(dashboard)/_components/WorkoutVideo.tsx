import SpeedVideoComponent from "@/components/ui/speed-video-component";
import StrengthVideoComponent from "@/components/ui/strength-video-component";

import React from "react";

import { Suspense } from "react";

export const SpeedWorkoutVideo = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading video...</p>}>
        <SpeedVideoComponent />
      </Suspense>
    </div>
  );
};

export const StrengthWorkoutVideo = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading video...</p>}>
        <StrengthVideoComponent />
      </Suspense>
    </div>
  );
};
