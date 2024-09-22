/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Stary Night Lantern",
  description: "KUS STEM3 P.6/6 group 4 - The Stary Night Lantern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
