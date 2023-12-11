import React from "react";

interface Props {
  isNextNull: boolean;
  error: string;
  retry: () => void;
}
const ApiErrorHandler = ({ isNextNull, error, retry }: Props) => {
  return (
    <div
      className={
        "text-center " + (error === "" || isNextNull == false ? "hidden" : "")
      }
    >
      <p className="text-white">{error}</p>
      <button
        onClick={() => retry()}
        className="bg-red-500 p-4 pt-2 pb-2 rounded-md hover:bg-red-700 transition-all duration-300 font-retro"
      >
        Retry
      </button>
    </div>
  );
};

export default ApiErrorHandler;
