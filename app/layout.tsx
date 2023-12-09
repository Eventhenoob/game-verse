import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import MainSidebar from "@/components/MainSidebar";

export const metadata: Metadata = {
  title: "Game Verse",
  description: "Unite and Showcase Your Gaming Universe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className="overflow-x-hidden dark:bg-dark-color min-h-screen grid grid-cols-5 grid-rows-layout">
        <header className="w-full  col-span-full mb-20">
          <Navigation />
        </header>
        <MainSidebar className=" fixed hidden md:flex w-1/5 text-white" />
        {children}
      </body>
    </html>
  );
}
