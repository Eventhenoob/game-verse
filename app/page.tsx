import GameCardSekeleton from "@/components/GameCard/GameCardSkeleton";
import Navigation from "@/components/Navigation";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <>
      <header className="w-full col-span-5 mb-20">
        <Navigation />
      </header>
      <aside className="sm:col-span-1 hidden sm:block text-white ">
        sidebar
      </aside>
      <main className="sm:col-span-4 pr-4 pt-10 col-span-5">
        <h1 className="mb-6 text-center  sm:text-justify font-heading text-3xl sm:text-4xl text-white capitalize">
          New And Treanding Games
        </h1>
        <div className=" flex flex-wrap  gap-10 items-center justify-evenly  text-white ">
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
          <GameCardSekeleton />
        </div>
      </main>
    </>
  );
}
