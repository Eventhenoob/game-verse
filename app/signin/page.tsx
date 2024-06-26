"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import LoginAnimation from "@/assets/LoginAnimation.json";
import GameShowCaseSkeleton from "@/components/ShowCases/GameShowCase/GameShowCaseSkeleton";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" && (
        <main className="mainStylesDefault relative flex md:flex-row justify-center items-center flex-col mb-20">
          <div className="w-[90%] flex md:flex-row flex-col bg-slate-800 justify-center items-center lg:pt-10 lg:pb-10 rounded-3xl ">
            <div className=" lg:w-2/5 w-44 text-white flex items-center justify-center md:pl-10 md:pt-10 ">
              <Lottie animationData={LoginAnimation} />
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const result = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                  });
                  if (result?.error) {
                    setError("invalid Credientials");
                    return;
                  }
                  setLoginSuccess(true);
                  router.replace("/");
                } catch (error) {
                  setError("an unexpected error occured");
                }
              }}
              className="lg:w-3/5 md:w-3/4 w-full p-5 pt-0  md:p-20 text-white lg:pt-10 lg:pb-10 flex flex-col justify-center items-center mt-2 lg:mt-0"
              action=""
            >
              {loginSuccess && (
                <p className="bg-green-600 p-4 w-screen fixed top-20 left-1 z-30 text-white font-heading ">
                  Login successfully
                </p>
              )}
              {error && !loginSuccess && (
                <p className="bg-red-600 p-4 fixed w-screen top-20 left-1 z-30 text-black font-heading ">
                  {error}
                </p>
              )}
              <h1 className="text-white text-4xl font-heading  text-center">
                Sign in
              </h1>
              <div className="flex md:flex-row flex-col w-full justify-center items-center"></div>
              <div className="w-full mt-10">
                <label
                  htmlFor="email"
                  className="text-white font-bold text-xs mb-2 block"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="bg-gray-700 w-full p-3 pl-4 text-sm text-slate-300 outline-none rounded-sm border-b-4 focus:border-main-color"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="w-full mt-10">
                <label
                  htmlFor="password"
                  className="text-white font-bold text-xs mb-2 block"
                >
                  password<span className="text-red-600">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="bg-gray-700 w-full p-3 pl-4 text-sm text-slate-300 outline-none rounded-sm border-b-4 focus:border-main-color"
                  name="password"
                  id="password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-center bg-main-color p-4 mt-10 rounded-xl hover:bg-yellow-500 font-heading text-sm hover:text-slate-200 transition-all duration-300"
              >
                Signin
              </button>
              <div className="font-retro flex gap-4">
                <a
                  href="/forgotpassword"
                  className="hover:text-slate-300 transition-color duration-200  text-gray-400 mt-2 text-sm"
                >
                  Forgot Password?
                </a>
                <a
                  href="/signup"
                  className="text-gray-400 hover:text-slate-300 transition-color duration-200  mt-2 text-sm"
                >
                  Create new account
                </a>
              </div>
            </form>
          </div>
        </main>
      )}

      {status == "authenticated" && (
        <main className="mainStylesDefault">
          <p className="text-2xl font-heading">
            Invalid Access of page. you are already logged in.
          </p>
        </main>
      )}

      {status === "loading" && (
        <main className="mainStylesDefault gap-5 flex flex-col p-4">
          <GameShowCaseSkeleton />
        </main>
      )}
    </>
  );
};

export default page;
