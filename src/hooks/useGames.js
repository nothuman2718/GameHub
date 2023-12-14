import useData from "./useData";

const useGames = (gameQuery) =>
    useData("/games",
        {
            params:
            {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder
            }
        }
        , [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder]);

export default useGames;









