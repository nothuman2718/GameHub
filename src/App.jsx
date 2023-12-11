import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./assets/components/NavBar";
function App() {
  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="pink">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
