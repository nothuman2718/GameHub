import {
  Button,
  MenuList,
  Menu,
  MenuItem,
  MenuButton,
  list,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
const PlatformSelector = () => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <li key={platform.id}>{platform.name}</li>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
