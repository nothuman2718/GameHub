import React from "react";
import useGenres from "../../hooks/useGenres";
import { ListItem, Text, HStack, Image, List } from "@chakra-ui/react";
import getCroppedImageURL from "../services/imageurl";

const GenreList = () => {
  const { data } = useGenres();
  const genres = data;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="6px">
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
