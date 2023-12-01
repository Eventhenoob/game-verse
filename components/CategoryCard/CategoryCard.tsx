export interface CategoryData {
  games_count: number;
  id: number;
  name: string;
  image_background: string;
}

const CategoryCard = ({
  games_count,
  name,
  image_background,
}: CategoryData) => {
  return (
    <div className="group w-56 shrink-0 text-white font-heading rounded-tl-3xl cursor-pointer hover:drop-shadow-white active:drop-shadow-whiteMin flex flex-col rounded-lg justify-center items-center opacity-100 h-72 relative bg-black  overflow-hidden">
      <img
        src={image_background}
        className="group-[:hover]:scale-110 group-[:active]:scale-100 group-[:hover]:opacity-10 opacity-30 absolute top-0 left-0 transition-all duration-200 w-full h-full object-cover"
        alt="bg image"
      />
      <p className="plaformName  text-center mb-6 border-b-[1px]  uppercase text-2xl">
        {name}
      </p>

      <p className="uppercase translate-y-4 opacity-0 group-[:hover]:translate-y-0 group-[:hover]:opacity-100 transition-all duration-200">
        No of Games:{" "}
        <span className="font-retro text-xl text-main-color">
          {games_count}
        </span>
      </p>
    </div>
  );
};

export default CategoryCard;
