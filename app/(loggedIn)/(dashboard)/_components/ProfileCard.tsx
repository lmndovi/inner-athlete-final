"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

const ProfileCard = () => {
  // const { user } = useUser();

  // if (!user) {
  //   return null; // Or render a loading indicator, sign-in button, etc.
  // }

  return (
    <div className="mt-10">
      <Card className="w-96 h-[35rem] text-center flex flex-col items-center space-y-3 rounded-2xl pt-5 border-2">
        <CardHeader>
          <CardTitle>
            {/* {user?.fullName} */}
            Name
          </CardTitle>
          <CardDescription>
            <p>
              {/* {user?.primaryEmailAddress?.emailAddress} */}
              Email Address
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <Image
            src={user?.imageUrl}
            alt="Avatar"
            height={10}
            width={150} // Set the same width as you set in params
            className="rounded-full"
          /> */}
        </CardContent>
        <CardFooter className="p-5 text-left flex flex-col space-y-2">
          <h1 className="text-lg">Statistics</h1>
          <ul className="text-sm">
            <li>Max Speed:</li>
            <li>Workouts Logged:</li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfileCard;
