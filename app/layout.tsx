import { COLOR } from "@/const/color";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main",
  description: "Power by Roger Almeyda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#353C59] ${inter.className}`}>{children}</body>
    </html>
  );
}
