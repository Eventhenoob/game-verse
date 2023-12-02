import CategoryCardTray from "@/components/CategoryCardTray";
import MainSidebar from "@/components/MainSidebar";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main className="md:col-start-2 ml-4 md:ml-0  flex flex-col gap-4 min-h-[90vh] md:col-end-6 md:pr-4   pt-10 col-span-5">
        <p className="text-white text-5xl font-heading">CATEGORIES TAGS</p>
        <div className="mt-4">
          <Link
            href={"browse/platforms"}
            className="text-white text-3xl mb-4 block font-heading border-b-2 w-min cursor-pointer hover:text-main-color hover:border-main-color transition-all duration-200"
          >
            Platforms
          </Link>
          <CategoryCardTray categoryType={"platforms"} scroll={true} />
        </div>
        <div className="mt-4">
          <Link
            href={"browse/genres"}
            className="text-white text-3xl mb-4 block font-heading border-b-2 w-min cursor-pointer hover:text-main-color hover:border-main-color transition-all duration-200"
          >
            Genras
          </Link>

          <CategoryCardTray categoryType={"genres"} />
        </div>
        <div className="mt-4">
          <Link
            href={"browse/publishers"}
            className="text-white text-3xl mb-4 block font-heading border-b-2 w-min cursor-pointer hover:text-main-color hover:border-main-color transition-all duration-200"
          >
            Publishers
          </Link>

          <CategoryCardTray categoryType={"publishers"} />
        </div>
        <div className="mt-4">
          <Link
            href={"browse/stores"}
            className="text-white text-3xl mb-4 block font-heading border-b-2 w-min cursor-pointer hover:text-main-color hover:border-main-color transition-all duration-200"
          >
            Stores
          </Link>

          <CategoryCardTray categoryType={"stores"} />
        </div>

        <div className="mt-4">
          <Link
            href={"browse/creators"}
            className="text-white text-3xl mb-4 block font-heading border-b-2 w-min cursor-pointer hover:text-main-color hover:border-main-color transition-all duration-200"
          >
            Creators
          </Link>

          <CategoryCardTray categoryType={"creators"} />
        </div>
        <div className="mt-4">
          <Link
            href={"browse/tags"}
            className="text-white text-3xl mb-4 block font-heading border-b-2 w-min cursor-pointer hover:text-main-color hover:border-main-color transition-all duration-200"
          >
            Tags
          </Link>

          <CategoryCardTray categoryType={"tags"} />
        </div>
      </main>
    </>
  );
};

export default page;
