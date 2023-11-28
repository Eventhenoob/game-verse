import Link from "next/link";
import Image from "next/image";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <>
      <header className="h-20 bg-black flex items-center p-4 pt-2 pb-2 w-full">
        <Link href={"/"} className="">
          <Image
            src={"/logosmall.png"}
            alt="Logo"
            className="text-black h-auto w-[100px]"
            height={128}
            width={347}
          />
        </Link>
        <SearchBox />
      </header>
      <aside className=""></aside>
      <main className=""></main>
    </>
  );
}
