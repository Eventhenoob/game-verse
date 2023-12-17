"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import Lottie from "lottie-react";
import signinAnimation from "@/assets/signinAnimation.json";

const schema = z
  .object({
    username: z.string({ required_error: "Username is required" }).min(3),
    email: z.string({ required_error: "Email is required" }).email(),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password should be alteast 8 characters long." }),
    confirmPassword: z
      .string({ required_error: "Please Confirm the password" })
      .min(8, { message: "Password should be alteast 8 characters long." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

type FormData = z.infer<typeof schema>;

const page = () => {
  const [selectedAvator, setSelectedAvator] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [showError, setShowError] = useState("");

  const handleFormSubmit = async (data: FormData) => {
    try {
      const result = await axios.post("/api/user", {
        username: data.username,
        email: data.email,
        password: data.password,
        avator: selectedAvator,
      });

      if (result.status === 201) {
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: true,
          callbackUrl: "/",
        });
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400 || error.response.status === 409) {
          setShowError(
            `${error.response.data.error}: ${error.response.data.message}`
          );
        } else {
          setShowError("An error occurred. Please try again later.");
        }
      } else {
        setShowError("Network error. Please check your connection.");
      }
    }
  };
  return (
    <main className="mainStylesDefault relative flex md:flex-row justify-center items-center flex-col mb-20">
      <div className="w-[90%] flex relative bg-gray-900 justify-center items-center rounded-3xl overflow-hidden lg:items-stretch lg:flex-row flex-col">
        {showError && (
          <p className="text-red-600  text-4xl absolute top-0">{showError}</p>
        )}
        <div className="lg:w-3/6 text-white flex items-center justify-center">
          <Lottie animationData={signinAnimation} />
        </div>
        <form
          onSubmit={handleSubmit(async (data) => handleFormSubmit(data))}
          className="lg:w-3/6 lg:h-[40rem] overflow-y-scroll customScroll p-5 text-white bg-gray-950 pb-10 flex flex-col  items-center mt-8 lg:mt-0"
        >
          <h1 className="text-white mt-4 text-4xl font-heading  text-center">
            Sign up
          </h1>
          <div className="flex md:flex-row flex-col w-full justify-center items-center"></div>
          <div className="w-full mt-10">
            <label
              htmlFor="username"
              className="text-white font-bold text-xs mb-2 block"
            >
              Username<span className="text-red-600">*</span>
            </label>
            <input
              {...register("username")}
              type="text"
              className={
                "bg-gray-800 w-full p-3 pl-4 text-sm outline-2 text-slate-300 outline-none rounded-xl" +
                (errors.username ? "  outline-red-800 " : " ")
              }
              id="username"
            />
            {errors.username && <p className="">{errors.username.message}</p>}{" "}
          </div>

          <div className="w-full mt-10">
            <label
              htmlFor="email"
              className="text-white font-bold text-xs mb-2 block"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className={
                "bg-gray-800 w-full outline-2 p-3 pl-4 text-sm text-slate-300 outline-none rounded-xl" +
                (errors.email ? "  outline-red-800 " : " ")
              }
            />
            {errors.email && <p className="">{errors.email.message}</p>}
          </div>

          <div className="w-full mt-10">
            <label
              htmlFor="password"
              className="text-white font-bold text-xs mb-2 block"
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className={
                "bg-gray-800 w-full outline-2 p-3 pl-4 text-sm text-slate-300 outline-none rounded-xl " +
                (errors.password ? "  outline-red-800 " : " ")
              }
            />
            {errors.password && <p className="">{errors.password.message}</p>}
          </div>

          <div className="w-full mt-10">
            <label
              htmlFor="confirmPassword"
              className={"text-white font-bold text-xs mb-2 block "}
            >
              Confirm Password<span className="text-red-600">*</span>
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              id="confirmPassword"
              className={
                "bg-gray-800 w-full outline-2 p-3 pl-4 text-sm text-slate-300 outline-none rounded-xl" +
                (errors.confirmPassword ? "  outline-red-800 " : " ")
              }
            />
            {errors.confirmPassword && (
              <p className="">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="w-full mt-10">
            <label
              htmlFor="avator"
              className={"text-white font-bold text-xs mb-2 block "}
            >
              Select Avator<span className="text-red-600">*</span>
            </label>

            <select
              id="avator"
              value={selectedAvator}
              onChange={(e) => setSelectedAvator(+e.target.value)}
              className="hidden"
            >
              <option value="1" className="">
                1
              </option>
              <option value="2" className="">
                2
              </option>
              <option value="3" className="">
                3
              </option>
            </select>

            <div className="flex gap-2 removeScroll overflow-x-scroll overflow-y-hidden  items-center">
              <img
                onClick={() => setSelectedAvator(1)}
                src="/avator1.png"
                className={
                  "w-32 cursor-pointer rounded-md h-auto shrink-0 " +
                  (selectedAvator === 1
                    ? " border-[3px] border-main-color "
                    : " ")
                }
                alt="avator1"
              />
              <img
                onClick={() => setSelectedAvator(2)}
                src="/avator2.png"
                alt="avator2"
                className={
                  "w-32 h-auto shrink-0 cursor-pointer rounded-md " +
                  (selectedAvator === 2
                    ? " border-[3px] border-main-color "
                    : " ")
                }
              />
              <img
                onClick={() => setSelectedAvator(3)}
                className={
                  "w-32 h-auto shrink-0 cursor-pointer rounded-md " +
                  (selectedAvator === 3
                    ? " border-[3px] border-main-color "
                    : " ")
                }
                src="/avator3.png"
                alt="avator3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-center bg-blue-600 p-4 mt-10 text-xs rounded-xl hover:bg-blue-800 hover:text-slate-200 transition-all duration-300"
          >
            Sign up
          </button>
          <div className=" flex gap-4">
            <button
              type="button"
              onClick={() => signIn()}
              className="text-blue-700 hover:text-slate-300 transition-color duration-200  mt-2 text-sm"
            >
              Already have an account?
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;