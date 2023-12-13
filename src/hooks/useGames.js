import React, { useEffect, useState } from "react";
import apiClient from "../../src/assets/services/apiClient";
import { CanceledError } from "axios";

const GameGrid = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(" ");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false)
            });
        return () => controller.abort();
    }, []);
    return { games, error, isLoading }
};

export default GameGrid;






