import React from "react";
import useGenres from "../../hooks/useGenres";
import {
  ListItem,
  Text,
  HStack,
  Image,
  Heading,
  List,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageURL from "../services/imageurl";

const GenreList = (props) => {
  const { onSelectGenre, selectedGenre } = props;
  const { data, isLoading, error } = useGenres();
  const genres = data;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading paddingY={2} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="6px">
            <HStack>
              <Image
                src={getCroppedImageURL(genre.image_background)}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              ></Image>
              <Button
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
