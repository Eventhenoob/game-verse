import { SiPlaystation } from "react-icons/si";
import { IoLogoWindows } from "react-icons/io5";
import { LiaLinux } from "react-icons/lia";
import { SiNintendoswitch } from "react-icons/si";
import { LiaXbox } from "react-icons/lia";
import { IoLogoApple } from "react-icons/io5";

const mapIcons = (platfrom: string) => {
  if (platfrom.toLowerCase() === "linux") return <LiaLinux key={"linux"} />;
  if (platfrom.toLowerCase() === "pc") return <IoLogoWindows key={"pc"} />;
  if (platfrom.toLowerCase() === "xbox") return <LiaXbox key={"xbox"} />;
  if (platfrom.toLowerCase() === "nintendo")
    return <SiNintendoswitch key={"nintendo"} />;
  if (platfrom.toLowerCase() === "playstation")
    return <SiPlaystation key={"playstation"} />;
  if (platfrom.toLowerCase() === "macos") return <IoLogoApple key={"macos"} />;
};

export default (platformNames: string[]) => {
  const platfromIconArray: React.ReactNode[] = platformNames.map((platfrom) =>
    mapIcons(platfrom)
  );

  return platfromIconArray;
};
