"use client";
import GameCardGrid from "@/components/GameCardGrid";
const page = ({
  params: { searchValue },
}: {
  params: { searchValue: string };
}) => {
  return (
    <main className="mainStylesDefault">
      <div className="headingText mb-6">
        <h1 className=" text-center  md:text-justify font-heading text-3xl md:text-6xl text-white capitalize md:mb-2 ">
          Search Results
        </h1>
      </div>
      <GameCardGrid
        Shorting={false}
        params={{
          search: searchValue,
          search_precise: true,
        }}
      />
    </main>
  );
};

export default page;
