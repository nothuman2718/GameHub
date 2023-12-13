import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import CrticScore from "./CrticScore";
import PlatformIconList from "./PlatformIconList";
const GameCard = (props) => {
  const { game } = props;
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList game={game}></PlatformIconList>
          <CrticScore game={game}> </CrticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;