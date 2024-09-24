"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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
        whileInView={{
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

  const [themec, setThemec] = useState<string>("light");

  const handleScroll = () => {
    const currentSection = Math.floor(window.scrollY / window.innerHeight);
    if (currentSection % 2 === 0) {
      setThemec("light");
    } else {
      setThemec("dark");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Title = ({ text, className }: { text: string; className?: string }) => {
    return (
      <motion.h1
        className={`scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl pt-10 ${className}`}
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
        {text}
      </motion.h1>
    );
  };

  return (
    <>
      <Navbar curr="product" theme={themec} />

      {/* Concept */}
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-white">
        <div className="w-1/2 text-center flex flex-col items-center">
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/427/427735.png"}
            alt="ideaicon"
            width={60}
            height={60}
            className="mb-[-2rem]"
          />
          <Title text="แนวคิด" className="text-black" />

          <Separator className="w-1/3 bg-zinc-800 my-6" />

          <motion.div
            className="text-lg"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ...transP,
                delay: 0.3,
              },
            }}
          >
            ได้รับแรงบันดาลใจจากผลงานที่มีชื่อเสียงของศิลปินชื่อดัง คือ <br />
            The Starry Night จาก Vincent Willem van Gogh
          </motion.div>
        </div>
      </div>

      {/* Components */}
      <div
        className="h-screen w-screen flex flex-col justify-center items-center naturebackground"
        id="compose"
      >
        <div className="w-1/2 text-center flex flex-col items-center">
          <Title text="อุปกรณ์" className="text-white" />

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

      {/* Using */}
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-white">
        <div className="w-1/2 text-center flex flex-col items-center">
          <div className="bg-yellow-200 blur-md rounded-full w-12 h-12 top-8 relative"></div>
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/3301/3301046.png"}
            alt="usingicon"
            width={60}
            height={60}
            className="z-30"
          />

          <Title text="การใช้งาน" />
          <Separator className="w-1/3 bg-zinc-800 my-6" />

          <div>
            <motion.div
              className="text-lg"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  ...transP,
                  delay: 0.4,
                },
              }}
            >
              <div className="font-bold mb-4">จะมีไฟอยู่ 3 mode คือ</div>
              <ul>
                <li className="blink">1. mode กระพิบเร็ว</li>
                <li className="slowblink">2. mode กระพิบช้า</li>
                <li>3. mode ไม่กระพิบ</li>
              </ul>
              <div className="font-bold mt-4">
                สามารถเปลี่ยน mode ได้ โดยกดปุ่ม switch สีแดง
              </div>
              สามารถใช้เป็นโคมไฟสำหรับประดับตกแต่งได้ <br />
              และยังสามารถใช้ส่องแสงได้ โดยจะสวยงามในที่มืด
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
