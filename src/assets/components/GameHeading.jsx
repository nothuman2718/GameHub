import { Heading } from "@chakra-ui/react";
import React from "react";

const GameHeading = (props) => {
  const { gameQuery } = props;
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }   Game`;
  return (
    <Heading as="h1" marginY={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
