"use client";

import ErrorSuccessNotifier from "@/components/ErrorSuccessNotifier";
import LoginMessage from "@/components/LoginMessage";
import GameShowCaseSkeleton from "@/components/ShowCases/GameShowCase/GameShowCaseSkeleton";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

const page = () => {
  const { data, update, status } = useSession();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentForm, setCurrentForm] = useState(0);

  const currentEmail = useRef<string | null>(null);
  const [newEmail, setNewEmail] = useState<string>("");

  const currentName = useRef<string | null>(null);
  const [newName, setNewName] = useState("");

  const currentAvator = useRef<number | null>(null);
  const [newAvator, setNewAvator] = useState(-1);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const enableShowSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 4000);
  };

  const enableShowError = () => {
    setShowErrorMessage(true);
    setTimeout(() => {
      setShowErrorMessage(false);
    }, 4000);
  };

  const extractErrorMessage = (errorResponse: any) => {
    if (
      errorResponse &&
      errorResponse.response &&
      errorResponse.response.data &&
      errorResponse.response.data.message
    ) {
      return errorResponse.response.data.message;
    } else {
      return "An unexpected error occurred. Please try again later.";
    }
  };

  const handleProflieSubmit = () => {
    axios
      .patch("/api/user", {
        userEmail: currentEmail.current,
        name: newName,
        avator: newAvator,
      })
      .then((res) => {
        return update({ ...res.data });
      })
      .then(() => {
        enableShowSuccess();
      })
      .catch((e) => {
        setError(extractErrorMessage(e));
        enableShowError();
      });
  };

  const handlePasswordSubmit = () => {
    if (newPassword === confirmPassword) {
      axios
        .patch("/api/user", {
          userEmail: currentEmail.current,
          newPassword: newPassword,
          oldPassword: oldPassword,
        })
        .then((res) => {
          return update(res.data);
        })
        .then(() => {
          enableShowSuccess();
        })
        .catch((e) => {
          setError(extractErrorMessage(e));
          enableShowError();
        });
    } else {
      setError("Confirm Password and New Password don't match");
    }
  };

  const handleEmailSubmit = () => {
    axios
      .patch("/api/user", {
        userEmail: currentEmail.current,
        email: newEmail,
      })
      .then((res) => {
        return update(res.data);
      })
      .then(() => {
        enableShowSuccess();
      })
      .catch((e) => {
        setError(extractErrorMessage(e));
        enableShowError();
      });
  };

  useEffect(() => {
    if (data?.user && data.user.email && data.user.name && data.user.image) {
      // Setting Email
      currentEmail.current = data.user.email;
      setNewEmail(data.user.email);

      // Setting name
      currentName.current = data.user.name;
      setNewName(data.user.name);

      //Setting Avator
      currentAvator.current = +data.user.image;
      setNewAvator(+data.user.image);
    }
  }, [data]);

  if (status === "authenticated")
    return (
      <main className="mainStylesDefault p-4 relative text-white">
        <ErrorSuccessNotifier
          color="red"
          message={error}
          showMessage={showErrorMessage}
        />

        <ErrorSuccessNotifier
          color="green"
          message={"Profile Updated Successfully"}
          showMessage={showSuccessMessage}
        />
        <h1 className="font-heading text-4xl mb-10">Settings</h1>

        <ul className="flex gap-4  font-heading">
          <li className="">
            <button
              className={"" + (currentForm === 0 && " border-b-2")}
              onClick={() => setCurrentForm(0)}
            >
              Profile
            </button>
          </li>
          <li className="">
            <button
              className={"" + (currentForm === 1 && " border-b-2")}
              onClick={() => setCurrentForm(1)}
            >
              Password
            </button>
          </li>
          <li className={"" + (currentForm === 2 && " border-b-2")}>
            <button className="" onClick={() => setCurrentForm(2)}>
              Email
            </button>
          </li>
        </ul>

        <div className="formContainer mt-10 pt-10 pb-10 md:p-10 p-4 rounded-xl bg-slate-800   md:w-3/3 lg:w-4/5 md:min-h-1/2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleProflieSubmit();
            }}
            className={" md:w-max " + (currentForm === 0 ? "" : " hidden ")}
          >
            <div className="mb-4">
              <label htmlFor="" className="font-heading text-slate-300">
                Avator <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-2 removeScroll overflow-x-scroll overflow-y-hidden  items-center">
                <img
                  onClick={() => setNewAvator(1)}
                  src="/avator1.png"
                  className={
                    "w-32 cursor-pointer rounded-md h-auto shrink-0 " +
                    (newAvator === 1 ? " border-[3px] border-main-color " : " ")
                  }
                  alt="avator1"
                />
                <img
                  onClick={() => setNewAvator(2)}
                  src="/avator2.png"
                  alt="avator2"
                  className={
                    "w-32 h-auto shrink-0 cursor-pointer rounded-md " +
                    (newAvator === 2 ? " border-[3px] border-main-color " : " ")
                  }
                />
                <img
                  onClick={() => setNewAvator(3)}
                  className={
                    "w-32 h-auto shrink-0 cursor-pointer rounded-md " +
                    (newAvator === 3 ? " border-[3px] border-main-color " : " ")
                  }
                  src="/avator3.png"
                  alt="avator3"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="userName" className="font-heading text-slate-300">
                UserName <span className="text-red-600">*</span>
              </label>

              <input
                id="userName"
                className={
                  "p-2 rounded-md  mt-2 focus:border-main-color border-b-4 w-full md:w-auto outline-none bg-gray-700 " +
                  (currentName.current == newName &&
                    " border-red-500 focus:border-red-500")
                }
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="p-2 pl-4 pr-4 rounded-lg mt-4 bg-main-color hover:bg-yellow-500 transition-all font-retro duration-200"
            >
              Submit
            </button>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePasswordSubmit();
            }}
            className={"md:w-[50%] " + (currentForm === 1 ? "" : "hidden")}
          >
            <div className="flex w-full md:w-auto flex-col mb-4">
              <label htmlFor="" className="font-heading text-slate-300">
                New Password <span className="text-red-600">*</span>
              </label>
              <input
                className={
                  "p-2 rounded-md  mt-2 focus:border-main-color border-b-4 w-full md:w-auto outline-none bg-gray-700"
                }
                required={true}
                min={8}
                type="password"
                id="password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
            </div>

            <div className="flex w-full md:w-auto flex-col mb-4">
              <label
                htmlFor="confirmPassword"
                className="font-heading text-slate-300"
              >
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                className={
                  "p-2 rounded-md  mt-2 focus:border-main-color border-b-4 w-full md:w-auto outline-none bg-gray-700"
                }
                required={true}
                min={8}
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>

            <div className="flex w-full md:w-auto flex-col">
              <label
                htmlFor="oldPassword"
                className="font-heading text-slate-300"
              >
                Old Password <span className="text-red-600">*</span>
              </label>
              <input
                className={
                  "p-2 rounded-md  mt-2 focus:border-main-color border-b-4 w-full md:w-auto outline-none bg-gray-700"
                }
                required={true}
                min={8}
                type="password"
                id="oldPassword"
                onChange={(e) => setOldPassword(e.target.value)}
                value={oldPassword}
              />
            </div>
            <button
              type="submit"
              className="p-2 pl-4 pr-4 rounded-lg mt-4 bg-main-color hover:bg-yellow-500 font-retro transition-all duration-200"
            >
              Submit
            </button>
          </form>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEmailSubmit();
            }}
            className={"md:w-[50%] " + (currentForm === 2 ? "" : " hidden ")}
          >
            <div className="flex md:w-auto w-full flex-col">
              <label htmlFor="email" className="font-heading text-slate-300">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                className={
                  "p-2 rounded-md  mt-2 focus:border-main-color border-b-4 w-full md:w-auto outline-none bg-gray-700 " +
                  (currentEmail.current == newEmail &&
                    " border-red-500 focus:border-red-500")
                }
                required={true}
                type="email"
                id="email"
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
              />
            </div>
            <button
              type="submit"
              className="p-2 pl-4 pr-4 rounded-lg mt-4 font-retro bg-main-color hover:bg-yellow-500 transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    );
  else if (status === "unauthenticated")
    return (
      <main className="mainStylesDefault  text-white">
        <LoginMessage />
      </main>
    );
  else
    return (
      <main className="mainStylesDefault gap-5 flex flex-col p-4">
        <GameShowCaseSkeleton />
      </main>
    );
};

export default page;
