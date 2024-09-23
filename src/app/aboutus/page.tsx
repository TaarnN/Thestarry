"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

const transP = {
  duration: 0.5,
  type: "spring",
  stiffness: 120,
};

const AboutUs = () => {
  const Title = ({ text, className }: { text: string; className?: string }) => {
    return (
      <motion.h1
        className={`scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl pt-10 ${className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ...transP,
            delay: 0.2,
          },
        }}
      >
        {text}
      </motion.h1>
    );
  };

  return (
    <>
      <Navbar curr="aboutus" theme="light" />
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-white">
        <div className="w-1/2 text-center flex flex-col items-center">
          <Title text="About us ยังไม่ได้ทำ" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
