import useData from "./useData";

const useGames = (gameQuery) =>
    useData("/games",
        {
            params:
            {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }
        , [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder, gameQuery.searchText]);

export default useGames;









