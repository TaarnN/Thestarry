"use client";
import React, { useState, useEffect } from "react";
import Particles from "@/components/eldora/particles";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";
import Link from "next/link";

const Home = () => {
  const transP = {
    duration: 0.5,
    type: "spring",
    stiffness: 150,
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
      <Navbar curr="home" theme={themec} />

      {/* HERO */}
      <div className="herobackground h-screen w-screen flex flex-col justify-center items-center">
        {/* Particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          className="h-full w-full fixed"
        >
          <Particles
            className="h-screen w-screen fixed top-0 left-0 bottom-0 right-0"
            quantity={70}
            ease={75}
          />
        </motion.div>

        {/* Hero body */}
        <CardContainer className="fixed mt-4">
          <CardBody className="w-max h-fit py-[32.5px] px-[-100px] flex flex-row">
            <CardItem as={"div"}>
              <CardItem
                as={"h1"}
                className="scroll-m-20 text-6xl font-bold lg:text-6xl text-white tracking-wider mb-10"
              >
                <motion.div
                  initial={{ opacity: 0, translateY: 100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ ...transP }}
                >
                  The Starry Night <br />
                  <span className="font-extrabold lg:text-7xl">
                    โคมไฟจากขวดแก้ว
                  </span>
                </motion.div>
              </CardItem>
              <CardItem
                as={"h2"}
                className="scroll-m-20 text-3xl font-medium lg:text-4xl text-white tracking-wider"
              >
                <motion.div
                  initial={{ opacity: 0, translateY: 100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    ...transP,
                    delay: 0.35,
                  }}
                >
                  Cr. Vincent Willem van Gogh
                </motion.div>
              </CardItem>
              <CardItem
                as={"div"}
                className="text-3xl font-medium lg:text-4xl text-white tracking-wider"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.4,
                    },
                  }}
                >
                  <Link href={"/product"}>
                    <Button className="bg-blue-400 hover:bg-blue-300 active:bg-blue-500 text-black font-bold mt-14 text-xl p-6 rounded-lg">
                      เพิ่มเติมเกี่ยวกับผลิตภัณฑ์
                    </Button>
                  </Link>
                  <Link href="#mainupc">
                    <Button
                      className=" text-white font-bold mt-14 ml-4 text-xl p-6 rounded-lg bg-transparent hover:bg-transparent active:bg-transparent border-2 border-blue-500 hover:text-white"
                      variant={"outline"}
                    >
                      การ Upcycle
                    </Button>
                  </Link>
                </motion.div>
              </CardItem>
            </CardItem>
            <CardItem as={"div"}>
              <motion.div
                initial={{ translateX: 200, opacity: 0 }}
                animate={{
                  translateX: 0,
                  opacity: 1,
                  transition: {
                    ...transP,
                    delay: 0.2,
                  },
                }}
              >
                <Separator
                  orientation="vertical"
                  className="border-white h-[40vh] mx-7 mt-[50%]"
                />
              </motion.div>
            </CardItem>
            <CardItem as={"div"}>
              <motion.div
                initial={{ translateX: 200, opacity: 0 }}
                animate={{
                  translateX: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    ...transP,
                  },
                }}
              >
                <Image
                  src={"https://placehold.co/300x400/png"}
                  alt="lanternimage"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
              </motion.div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      {/* Upcycling */}
      <div
        className="h-screen w-screen inset-y-0 inset-x-0 flex flex-col justify-center items-center"
        id="mainupc"
      >
        <div className="w-1/2 text-center flex flex-col items-center">
          <motion.h1
            className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl flex"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                ...transP,
              },
            }}
          >
            &ldquo;Upcycle&ldquo; คืออะไร
            <span className="ml-6">
              <Image
                alt="upcycleicon"
                src={"https://cdn-icons-png.flaticon.com/512/8087/8087104.png"}
                width={60}
                height={60}
              />
            </span>
          </motion.h1>
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
            Upcycle
            คือการแปรรูปวัสดุหรือผลิตภัณฑ์ที่ใช้แล้วให้กลายเป็นสิ่งใหม่ที่มีมูลค่าสูงขึ้น
            ซึ่งแตกต่างจากการ Recycle ทั่วไปที่มักจะลดคุณค่าของวัสดุ
            แนวคิดนี้เน้นการใช้ความคิดสร้างสรรค์ในการสร้างสรรค์ผลิตภัณฑ์จากขยะหรือของเก่าที่ไม่ใช้แล้ว
            อีกทั้งการ Upcycle
            ยังช่วยลดปริมาณขยะและส่งเสริมความยั่งยืนในสิ่งแวดล้อม
            โดยผลิตภัณฑ์ของเราก็ได้มีการ Upcycle ขยะอยู่ 2 ประเภท
            คือขวดแก้วและฝาขวด{" "}
            <Link href={"/product#compose"}>
              <div className="p-4 text-blue-500">อุปกรณ์เพิ่มเติม</div>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
