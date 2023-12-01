import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

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
      <body className="dark:bg-dark-color min-h-screen grid grid-cols-5 grid-rows-layout">
        <header className="w-full  col-span-full mb-20">
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
