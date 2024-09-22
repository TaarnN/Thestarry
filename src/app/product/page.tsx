"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const Product = () => {
  let compoicount = 0;

  const Compoi = ({
    imagename,
    title,
    description,
  }: {
    imagename: string;
    title: string;
    description: string;
  }) => {
    compoicount++;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 120,
            delay: compoicount * 0.1,
          },
        }}
        className="flex flex-row items-center justify-center"
      >
        <div
          className={`bg-cover m-4 mt-0 rounded-lg ${imagename} w-40 h-40`}
        />
        <div className="w-[15vw]">
          <h1 className="text-left scroll-m-20 font-bold tracking-tight text-3xl text-white">
            {title}
          </h1>
          <Separator orientation="horizontal" className="bg-white my-2 w-1/2" />
          <p className="text-left scroll-m-20 font-medium text-lg text-white">
            {description}
          </p>
        </div>
      </motion.div>
    );
  };

  const transP = {
    duration: 0.5,
    type: "spring",
    stiffness: 120,
  };

  const [themec, setThemec] = useState<string>("dark");

  const handleScroll = () => {
    const currentSection = Math.floor(window.scrollY / window.innerHeight);
    if (currentSection % 2 === 0) {
      setThemec("dark");
    } else {
      setThemec("light");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar curr="product" theme={themec} />

      {/* Components */}
      <div className="h-screen w-screen inset-y-0 inset-x-0 flex flex-col justify-center items-center naturebackground">
        <div className="w-1/2 text-center flex flex-col items-center">
          <motion.h1
            className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-white pt-10"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ...transP,
                delay: 0.2,
              },
            }}
          >
            อุปกรณ์
          </motion.h1>

          <Separator className="w-1/3 my-6" />

          {/* First c row */}
          <div className="flex flex-row items-center justify-center mt-9">
            <Compoi
              imagename="glassbi"
              title="ขวดแก้ว (ขยะ)"
              description="ใช้เป็นตัวโคมไฟ"
            />
            <Compoi
              imagename="capbi"
              title="ฝาขวด (ขยะ)"
              description="ตัดเป็น mobile"
            />
            <Compoi
              imagename="enni"
              title="เส้นเอ็นใส"
              description="ใช้ห้อย mobile"
            />
          </div>

          {/* Second c row */}
          <div className="flex flex-row items-center justify-center mt-6">
            <Compoi
              imagename="cbi"
              title="ไฟคริสต์มาส"
              description="ให้ส่องแสงได้"
            />
            <Compoi
              imagename="bi"
              title="สีอะคริลิค"
              description="ระบายตัว mobile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
