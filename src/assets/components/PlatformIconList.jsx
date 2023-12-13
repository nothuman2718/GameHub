import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPadding, MdPhoneIphone } from "react-icons/md";
import { Text, Image, Icon, HStack } from "@chakra-ui/react";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const PlatformIconList = (props) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  const { game } = props;
  return (
    <HStack marginY={1}>
      {game.parent_platforms.map(({ platform }) => (
        <Icon
          as={iconMap[platform.slug]}
          color="gray.500"
          key={platform.id}
        ></Icon>
      ))}{" "}
    </HStack>
  );
};

export default PlatformIconList;
