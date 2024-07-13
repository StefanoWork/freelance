"use client";

import { useEffect } from "react";
import { animatePageIn } from "./utils/animation";
import Image from "next/image";
import Bolla from "../Images/Bollina.webp";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <Image
        id="banner-1"
        className="left-0 w-1/4 fixed z-40 top-0"
        src={Bolla}
        style={{ scale: 0.7 }}
        alt=""
      ></Image>
      <Image
        id="banner-2"
        className="left-1/4 w-1/4 fixed z-40 top-0"
        src={Bolla}
        style={{ scale: 0.9 }}
        alt=""
      ></Image>
      <Image
        id="banner-3"
        className="left-2/4 w-1/4 fixed z-40 top-0"
        src={Bolla}
        style={{ scale: 0.5 }}
        alt=""
      ></Image>
      <Image
        id="banner-4"
        className="left-3/4 w-1/4 fixed z-40 top-0"
        src={Bolla}
        style={{ scale: 1.1 }}
        alt=""
      ></Image>

      {children}
    </div>
  );
}
