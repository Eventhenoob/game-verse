"use client";
import React from "react";
import Lottie from "lottie-react";
import LoginMessageAnimation from "@/assets/loginMessageAnimation.json";
import { signIn } from "next-auth/react";
const LoginMessage = () => {
  return (
    <div className="w-full flex items-center flex-col gap-10">
      <Lottie className="w-1/2" animationData={LoginMessageAnimation} />

      <p className="text-white font-heading text-xl">
        Oops Looks like you are not logged in
      </p>
      <button
        onClick={() => signIn()}
        className="text-slate-50 bg-green-600 hover:bg-green-800 transition-all duration-200 rounded-md p-4 pl-6 pr-6 font-retro"
      >
        Log in
      </button>
    </div>
  );
};

export default LoginMessage;
