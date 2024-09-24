"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Separator } from "@/components/ui/separator";

const transP = {
  duration: 0.5,
  type: "spring",
  stiffness: 120,
};

const AboutUs = () => {
  const people = [
    {
      id: 1,
      name: "ธันยพิพัธน์ อรุณธารี (13)",
      designation: "ผู้แสดงความคิดเห็นขั้นสุดยอด",
      image: "https://placehold.co/60x60/png",
    },
    {
      id: 2,
      name: "ธารณ์ หงุ่ยตระกูล (14)",
      designation: "ผู้สร้าง website",
      image: "https://placehold.co/60x60/png",
    },
    {
      id: 3,
      name: "ศนิษา ศรีประไพ (32)",
      designation: "ผู้ช่วยทั่วไป",
      image: "https://placehold.co/60x60/png",
    },
    {
      id: 4,
      name: "ศิริญญา นัฏสุภัคพงศ์ (33)",
      designation: "ผู้ช่วยทั่วไป",
      image: "https://placehold.co/60x60/png",
    },
    {
      id: 5,
      name: "เอริสา ธาราศักดิ์ (40)",
      designation: "ผู้เริ่มแนวคิด และออกแบบผลิตภัณฑ์",
      image: "https://placehold.co/60x60/png",
    },
  ];

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
      <Navbar curr="aboutus" theme="dark" />
      <div className="h-screen w-screen flex flex-col justify-center items-center craftbackground">
        <div className="w-1/2 text-center flex flex-col items-center text-white">
          <Title text="สมาชิกกลุ่ม" />
          <Separator className="w-1/3 bg-white my-6" />
          <div className="flex flex-row items-center justify-center mb-10 w-full mt-8">
            <AnimatedTooltip items={people} />
          </div>
          <div className="font-extrabold">ป.6/6 กลุ่ม 4</div>

          <Title text="ติดต่อ" />
          <Separator className="w-1/3 bg-white my-6" />
          <div className="font-extrabold">unnamedperson713@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
