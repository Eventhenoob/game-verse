import useTag from "@/hooks/useTag";
import React from "react";
import ApiErrorHandler from "@/components/ApiErrorHandler";
import TagShowCaseSkeleton from "./TagShowCaseSkeleton";

export interface TagData {
  name: string;
}

const TagShowCase = ({ tagId }: { tagId: string }) => {
  const { error, retry, tagData } = useTag(tagId);
  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />
      <div
        className={
          " m-auto mb-8 md:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly  " +
          (tagData !== null || error !== "" ? "hidden" : "")
        }
      >
        <TagShowCaseSkeleton />
      </div>
      {tagData && (
        <div
          className={
            "m-5 md:m-0 flex font-heading flex-col gap-5 text-white !mb-10"
          }
        >
          <h1 className=" font-heading text-4xl md:text-6xl ">
            {tagData.name} Games
          </h1>
        </div>
      )}
    </>
  );
};

export default TagShowCase;
