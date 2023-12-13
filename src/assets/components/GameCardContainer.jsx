import { Box } from "@chakra-ui/react";

const GameCardContainer = (props) => {
  const { children } = props;
  return (
    <Box width="350px" borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
