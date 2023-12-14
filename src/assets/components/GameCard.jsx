import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import CrticScore from "./CrticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageURL from "../services/imageurl";
const GameCard = (props) => {
  const { game } = props;
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList game={game}></PlatformIconList>
          <CrticScore game={game}> </CrticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
