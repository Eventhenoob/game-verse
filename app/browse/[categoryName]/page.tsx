import CategoryCardTray from "@/components/CategoryCardTray";

const page = ({
  params: { categoryName },
}: {
  params: { categoryName: string };
}) => {
  return (
    <main className="md:col-start-2 min-h-[90vh] md:col-end-6 md:pr-4   pt-10 col-span-5">
      <h1 className="text-white text-5xl font-heading m-auto md:m-0 border-b-2 w-min hover:text-main-color hover:border-main-color capitalize transition-all duration-200 !mb-8  sm:mb-8">
        {categoryName}
      </h1>

      <CategoryCardTray
        categoryType={categoryName}
        page_size={20}
        scroll={false}
      />
    </main>
  );
};

export default page;
