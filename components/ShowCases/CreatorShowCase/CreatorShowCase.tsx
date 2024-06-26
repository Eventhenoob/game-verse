"use client";
import useCreator from "@/hooks/useCreator";
import parse from "html-react-parser";
import ApiErrorHandler from "@/components/ApiErrorHandler";
import CreatorShowCaseSkeleton from "./CreatorShowCaseSkeleton";

export interface creatorData {
  name: string;
  image_background: string;
  image: string;
  description: string;
  games_count: number;
}

interface Props {
  creatorid: string;
}

// { description, image, name }: creatorData

const CreatorShowCase = ({ creatorid }: Props) => {
  const { creatorData, error, retry } = useCreator(creatorid);

  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />;
      <div
        className={
          "flex flex-col w-10/12 m-auto gap-4 " +
          (creatorData !== null || error !== "" ? " hidden " : "")
        }
      >
        <CreatorShowCaseSkeleton />
      </div>
      <div className="flex  flex-col w-10/12 m-auto gap-4 text-white ">
        {creatorData && (
          <>
            <div className="flex md:flex-row flex-col items-center gap-5">
              <img
                src={creatorData.image}
                alt={creatorData.name}
                className="w-20 h-20 overflow-hidden rounded-full object-center"
              />
              <h3 className="font-heading text-3xl">{creatorData.name}</h3>
            </div>
            <div className="font-retro leading-7 tracking-wider">
              {parse(creatorData.description)}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CreatorShowCase;
