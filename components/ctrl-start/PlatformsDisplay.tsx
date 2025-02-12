import {
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaWindows,
  FaLinux,
  FaAppStoreIos,
  FaGlobe,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "@/types/rawg-types";

import React from "react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  ios: FaAppStoreIos,
  nintendo: BsNintendoSwitch,
  web: FaGlobe,
};

const PlatformsDisplay = ({ platforms }: Props) => {
  return (
    <div className="bg-ctrl-start-green-800/80 text-ctrl-start-white w-fit h-fit text-xl p-2 rounded-lg flex flex-wrap justify-center gap-2">
      {platforms.map(({ platform }) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent ? <IconComponent key={platform.slug} /> : null;
      })}
    </div>
  );
};

export default PlatformsDisplay;
