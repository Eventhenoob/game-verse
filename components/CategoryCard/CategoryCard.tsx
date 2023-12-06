"use client";
import numberFromater from "@/utils/numberFromater";
import Link from "next/link";
export interface CategoryData {
  games_count: number;
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  CategoryInfo: CategoryData;
  href: string;
}

const CategoryCard = ({ CategoryInfo, href }: Props) => {
  return (
    <Link
      href={href}
      className="group w-44 h-60  md:w-56 md:h-72 shrink-0 text-white font-heading rounded-tl-3xl cursor-pointer flex flex-col rounded-lg justify-center items-center opacity-100  relative bg-black  overflow-hidden"
    >
      <img
        src={CategoryInfo.image_background}
        className="group-[:hover]:scale-110 group-[:active]:scale-100 group-[:hover]:opacity-10 opacity-50 absolute top-0 left-0 transition-all duration-200 w-full h-full object-cover"
        alt="bg image"
      />
      <p className="plaformName  text-center mb-6 border-b-[1px]  uppercase text-2xl">
        {CategoryInfo.name}
      </p>

      <p className="uppercase text-center w-3/4 translate-y-4 opacity-0 group-[:hover]:translate-y-0 group-[:hover]:opacity-100 transition-all duration-200">
        No of Games:{" "}
        <span className="font-retro text-xl text-main-color">
          {numberFromater(CategoryInfo.games_count)}
        </span>
      </p>
    </Link>
  );
};

export default CategoryCard;
