import React from "react";
import useGenres from "../../hooks/useGenres";
import { ListItem, Text, HStack, Image, List, Spinner } from "@chakra-ui/react";
import getCroppedImageURL from "../services/imageurl";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genres = data;
  if (error) return null;
  if (isLoading) return <Spinner />;
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
