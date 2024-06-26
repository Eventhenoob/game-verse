"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface userData {
  name: string;
  email: string;
  image: string;
}

const ProfileBox = () => {
  const { data, status } = useSession();
  const [userData, setUserData] = useState<userData | null>(null);

  useEffect(() => {
    if (
      data &&
      data.user &&
      data.user.name &&
      data.user.email &&
      data.user.image
    ) {
      setUserData({
        name: data.user?.name,
        email: data.user?.email,
        image: data.user?.image,
      });
    } else setUserData(null);
  }, [data]);

  return (
    <>
      {status === "authenticated" && (
        <Link
          href={"/profile"}
          className="cursor-pointer overflow-hidden w-8 h-8 ml-3 sm:ml-0 sm:w-10 sm:h-10 shrink-0 rounded-full border-[2px] border-transparent hover:border-main-color active:border-main-color focus:border-main-color"
        >
          {
            <img
              src={`/avator-small${data?.user?.image}.png`}
              alt="user image"
            />
          }
        </Link>
      )}
      {status === "unauthenticated" && (
        <button
          className="shrink-0 bg-main-color rounded-md hover:bg-yellow-300 transition-all lg:block hidden duration-200 font-heading uppercase  p-[4px] pl-[8px] pr-[8px]"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </>
  );
};

export default ProfileBox;
