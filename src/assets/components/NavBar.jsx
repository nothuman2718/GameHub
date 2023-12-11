import { HStack, Text, Image } from "@chakra-ui/react";
import logo from "../logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
