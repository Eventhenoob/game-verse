"use client";
import CreatorShowCase from "@/components/ShowCases/CreatorShowCase";
import GameCardGrid from "@/components/GameCardGrid";

const page = ({ params: { creatorid } }: { params: { creatorid: string } }) => {
  return (
    <main className="mainStylesDefault text-white">
      <header className="mb-10 bg-gray-700 pt-10 pb-10 bg-opacity-50 rounded-3xl">
        <CreatorShowCase creatorid={creatorid} />
      </header>
      <GameCardGrid params={{ creators: creatorid }} />
    </main>
  );
};

export default page;
