"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Home from "./home/page";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default page;
