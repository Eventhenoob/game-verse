import React from "react";

interface Params {
  message: string | null;
  showMessage: boolean;
  color: "green" | "red";
}

const ErrorSuccessNotifier = ({ message, showMessage, color }: Params) => {
  return (
    <div
      className={
        "w-screen font-heading p-4 absolute top-0 left-0 transition-all duration-200 " +
        (color === "red" ? " bg-red-600 text-black " : " bg-green-400 ") +
        (showMessage ? " opacity-100 visible " : " opacity-0 invisible ")
      }
    >
      {message}
    </div>
  );
};

export default ErrorSuccessNotifier;
