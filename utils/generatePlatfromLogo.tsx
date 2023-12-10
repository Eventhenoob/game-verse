import { SiPlaystation } from "react-icons/si";
import { IoLogoWindows } from "react-icons/io5";
import { LiaLinux } from "react-icons/lia";
import { SiNintendoswitch } from "react-icons/si";
import { LiaXbox } from "react-icons/lia";
import { IoLogoApple } from "react-icons/io5";

const mapIcons = (platfrom: string) => {
  if (platfrom.toLowerCase() === "linux") return <LiaLinux />;
  if (platfrom.toLowerCase() === "windows") return <IoLogoWindows />;
  if (platfrom.toLowerCase() === "xbox") return <LiaXbox />;
  if (platfrom.toLowerCase() === "nintendo") return <SiNintendoswitch />;
  if (platfrom.toLowerCase() === "playstation") return <SiPlaystation />;
  if (platfrom.toLowerCase() === "macos") return <IoLogoApple />;
};

export default (platformNames: string[]) => {
  const platfromIconArray: React.ReactNode[] = platformNames.map((platfrom) =>
    mapIcons(platfrom)
  );

  return platfromIconArray;
};
