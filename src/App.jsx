import { Grid, GridItem, HStack, Box, Show } from "@chakra-ui/react";
import NavBar from "./assets/components/NavBar";
import GameGrid from "./assets/components/GameGrid";
import GenreList from "./assets/components/GenreList";
import { useState } from "react";
import PlatformSelector from "../src/assets/components/PlatformSelector";
import SortSelector from "./assets/components/SortSelector";
import GameHeading from "./assets/components/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState({});
  return (
    <Grid
      templateAreas={`"nav nav" "aside main"`}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr ",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="17px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={4}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} marginBottom={1}>
            <PlatformSelector
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
              selectedPlatform={gameQuery.platform}
            ></PlatformSelector>
            <SortSelector
              onSelectSortOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
