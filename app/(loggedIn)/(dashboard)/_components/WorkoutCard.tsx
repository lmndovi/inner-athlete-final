import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SpeedWorkoutVideo, StrengthWorkoutVideo } from "./WorkoutVideo";

export const SpeedWorkoutCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <SpeedWorkoutVideo />
        </CardContent>
        <CardHeader>
          <CardTitle className="text-2xl font-normal">Workout #1</CardTitle>
        </CardHeader>
        <CardFooter>
          <CardDescription className="text-black">
            Card description
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export const StrengthWorkoutCard = () => {
  return (
    <div>
      <Card className="">
        <CardContent>
          <StrengthWorkoutVideo />
        </CardContent>
        <CardHeader>
          <CardTitle className="text-2xl font-normal">Workout #1</CardTitle>
        </CardHeader>
        <CardFooter>
          <CardDescription className="text-black">
            Card description
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};
