
import { Badge } from "@chakra-ui/react";
import React from "react";
interface CrticScore{
  game:Game;
}
interface Game{
  metacritic:number;
}

const CrticScore = (props:CrticScore) => {
  const { game } = props;
  let color =
    game.metacritic > 90 ? "green" : game.metacritic > 60 ? "yellow" : " ";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={1}>
      {game.metacritic}
    </Badge>
  );
};

export default CrticScore;
