import parse from "html-react-parser";
import useGenra from "@/hooks/useGenra";
import ApiErrorHandler from "../ApiErrorHandler";
import GenraShowCaseSkeleton from "./GenraShowCase/Skeleton";

interface Props {
  genraId: number;
}

export interface GenraType {
  name: string;
  description: string;
}

const GenraShowCase = ({ genraId }: Props) => {
  const { error, genraData, retry } = useGenra(genraId);
  return (
    <>
      <ApiErrorHandler error={error} retry={retry} />
      <div
        className={
          " m-auto mb-8 md:w-auto w-3/4 gap-10 items-center justify-center md:justify-evenly text-white " +
          (genraData !== null || error !== "" ? "hidden" : "")
        }
      >
        <GenraShowCaseSkeleton />
      </div>
      {genraData && (
        <div className={"m-5 md:m-0 flex flex-col gap-5 !mb-10"}>
          <h1 className=" font-heading text-4xl md:text-6xl ">
            {genraData.name} Games
          </h1>
          {parse(genraData.description)}
        </div>
      )}
    </>
  );
};

export default GenraShowCase;
