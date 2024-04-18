import React from "react";
import Navbar from "../_components/Navbar";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logoIcon.svg",
      href: "/logoIcon.svg",
    },
  ],
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="flex flex-col h-screen items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default ProfileLayout;
