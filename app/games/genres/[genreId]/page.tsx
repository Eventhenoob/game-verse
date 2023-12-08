"use client";
import GameCardGrid from "@/components/GameCardGrid";
import GenraShowCase from "@/components/GenraShowCase";

const page = ({ params: { genreId } }: { params: { genreId: string } }) => {
  return (
    <main className="md:col-start-2 min-h-[90vh] md:col-end-6 md:pr-4   pt-10 col-span-5 text-white">
      <GenraShowCase genraId={+genreId} />
      <GameCardGrid params={{ genres: genreId }} />
    </main>
  );
};

export default page;
