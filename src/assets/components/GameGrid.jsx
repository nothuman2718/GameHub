import React, { useEffect, useState } from "react";
import { list, Text } from "@chakra-ui/react";
import apiClient from "../services/apiClient";

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(" ");
  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err);
      });
  });
  return (
    <>
      <Text>Hello</Text>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name} </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
