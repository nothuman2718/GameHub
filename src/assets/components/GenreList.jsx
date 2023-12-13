import React from "react";
import useGenres from "../../hooks/useGenres";
const GenreList = () => {
  const { data } = useGenres();
  const genres = data;
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}> {genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
