"use client";

import usePlatform from "@/hooks/usePlatform";
import parse from "html-react-parser";
import ApiErrorHandler from "../ApiErrorHandler";
import PlatformShowCaseSkeleton from "./PlatformShowCaseSkeleton";

export interface PlatformData {
  name: string;
  description: string;
}

const PlatfromShowCase = ({ platformId }: { platformId: number }) => {
  const { error, platfromData, retry } = usePlatform(platformId);
  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />
      <div
        className={
          " m-auto mb-8 md:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly text-white " +
          (platfromData !== null || error !== "" ? "hidden" : "")
        }
      >
        <PlatformShowCaseSkeleton />
      </div>

      {platfromData && (
        <div className={"m-5 md:m-0 flex flex-col gap-5 !mb-10"}>
          <h1 className=" font-heading text-4xl md:text-6xl ">
            Games On {platfromData.name}
          </h1>
          {parse(platfromData.description)}
        </div>
      )}
    </>
  );
};

export default PlatfromShowCase;
