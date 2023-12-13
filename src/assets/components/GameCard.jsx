import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";
const GameCard = (props) => {
  const { game } = props;
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList game={game}></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
