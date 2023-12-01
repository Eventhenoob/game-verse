import CategoryCard from "@/components/CategoryCard/CategoryCard";
import CategoryCardTray from "@/components/CategoryCardTray";
import MainSidebar from "@/components/MainSidebar";

const page = () => {
  return (
    <>
      <MainSidebar className=" fixed hidden md:flex w-1/5 text-white" />
      <main className="md:col-start-2  min-h-[90vh] md:col-end-6 md:pr-4   pt-10 col-span-5">
        <p className="text-white text-5xl font-heading">CATEGORIES TAGS</p>
        <div className="mt-4">
          <p className="text-white text-3xl mb-2 font-heading border-b-2 w-min cursor-pointer hover:text-main-color hover:border-main-color transition-all duration-200">
            Platform
          </p>
          <CategoryCardTray categoryType={"platforms"} />
        </div>
      </main>
    </>
  );
};

export default page;
