"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
interface userData {
  name: string;
  email: string;
  image: string;
}

const ProfileBox = () => {
  const { data, update } = useSession();
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

    console.log(data);
  }, [data]);

  return (
    <>
      {userData != null ? (
        <div
          onClick={() => {
            signOut();
          }}
          className="cursor-pointer bg-green-500 overflow-hidden w-8 h-8 ml-3 sm:ml-0 sm:w-10 sm:h-10 shrink-0 rounded-full"
        >
          {<img src={`avator${data?.user?.image}.png`} alt="user image" />}
        </div>
      ) : (
        <button
          className="shrink-0 bg-main-color hover:bg-yellow-300 transition-all lg:block hidden duration-200 font-retro  p-[2px] pl-[8px] pr-[8px]"
          onClick={() => signIn()}
        >
          Log in
        </button>
      )}
    </>
  );
};

export default ProfileBox;
