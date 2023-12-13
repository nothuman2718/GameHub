import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./assets/components/NavBar";
import GameGrid from "./assets/components/GameGrid";
import GenreList from "./assets/components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={`"nav nav" "aside main"`}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr ",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="17px">
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
