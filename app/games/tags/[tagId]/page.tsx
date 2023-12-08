"use client";
import GameCardGrid from "@/components/GameCardGrid";
import TagShowCase from "@/components/TagShowCase";

const page = ({ params: { tagId } }: { params: { tagId: string } }) => {
  return (
    <main className="mainStylesDefault text-white">
      <TagShowCase tagId={tagId} />
      <GameCardGrid params={{ tags: tagId }} />
    </main>
  );
};

export default page;
