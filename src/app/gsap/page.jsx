"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const TestGsap = () => {
  useGSAP(() => {
    gsap.to("#red-box", {
      x: 500,
      duration: 2,
      borderTop: "10px solid yellow",
      backgroundColor: "green",
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      repeatRefresh: true,
      onComplete: () => {
        gsap.to("#orange-box", {
          x: 500,
          duration: 2,
          backgroundColor: "green",
          ease: "power2.inOut",
          yoyo: true,
        });
      },
    });
  });
  return (
    <div>
      <div
        id="red-box"
        className="m-5 bg-red-600 rounded-md"
        style={{ border: "2px solid red", width: "80px", height: "80px" }}
      ></div>
      <div
        id="orange-box"
        className="m-5 bg-orange-600 rounded-md"
        style={{ border: "2px solid red", width: "80px", height: "80px" }}
      ></div>
    </div>
  );
};

export default TestGsap;
