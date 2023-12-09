"use client";

import usePublishers from "@/hooks/usePublishers";
import ApiErrorHandler from "@/components/ApiErrorHandler";
import PublisherShowCaseSkeleton from "./PublisherShowCaseSkeleton";
import parse from "html-react-parser";

export interface PublisherData {
  name: string;
  description: string;
}

const PublishersShowCase = ({ publisherId }: { publisherId: number }) => {
  const { error, publishersData, retry } = usePublishers(publisherId);

  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />
      <div
        className={
          " m-auto mb-8 md:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly  " +
          (publishersData !== null || error !== "" ? "hidden" : "")
        }
      >
        <PublisherShowCaseSkeleton />
      </div>
      {publishersData && (
        <div
          className={
            "m-5 md:m-0 flex font-heading flex-col gap-5 text-white !mb-10"
          }
        >
          <h1 className=" font-heading text-4xl md:text-6xl ">
            {publishersData.name} Games
          </h1>
          {parse(publishersData.description)}
        </div>
      )}
    </>
  );
};

export default PublishersShowCase;
