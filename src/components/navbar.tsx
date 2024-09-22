/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "@/components/ui/navbar-menu";
import Link from "next/link";

const Navbar = ({
  className,
  curr,
  theme,
}: {
  className?: string;
  curr?: string;
  theme?: string;
}): React.ReactElement => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-14 inset-x-0 max-w-[32rem] mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive} theme={theme}>
        <Link href={"/home"}>
          <div
            className={`cursor-pointer ${
              theme !== "light" ? "text-white" : "text-black"
            } hover:opacity-[0.9] ${curr === "home" ? "font-bold" : ""}`}
          >
            หน้าหลัก
          </div>
        </Link>
        <Link href={"/product"}>
          <div
            className={`cursor-pointer ${
              theme !== "light" ? "text-white" : "text-black"
            } hover:opacity-[0.9] ${curr === "product" ? "font-bold" : ""}`}
          >
            ผลิตภัณฑ์
          </div>
        </Link>
        <Link href={"/aboutus"}>
          <div
            className={`cursor-pointer ${
              theme !== "light" ? "text-white" : "text-black"
            } hover:opacity-[0.9] ${curr === "aboutus" ? "font-bold" : ""}`}
          >
            เกี่ยวกับเรา
          </div>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
