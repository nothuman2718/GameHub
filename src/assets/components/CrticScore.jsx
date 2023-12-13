import { Badge } from "@chakra-ui/react";

const CrticScore = (props) => {
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
