"use client";
import "./globals.css";
import Navigation from "@/components/Navigation";
import MainSidebar from "@/components/MainSidebar";
import AuthProvider from "@/components/AuthProvider";

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
        <AuthProvider>
          <header className="w-full  col-span-full mb-20">
            <Navigation />
          </header>
          <MainSidebar className=" fixed hidden lg:flex w-1/5 text-white" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
