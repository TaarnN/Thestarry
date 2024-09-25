/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Harvest Lantern",
  description: "KUS STEM3 P.6/6 group 4 - The Harvest Lantern",
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
