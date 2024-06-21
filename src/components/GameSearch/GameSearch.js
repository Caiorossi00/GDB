import React, { useState, useEffect } from "react";
import axios from "axios";

function GameSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      if (!searchTerm) {
        setSearchResults([]);
        setSelectedGame(null);
        return;
      }
      try {
        const response = await axios.post("http://localhost:5000/api/games", {
          searchTerm,
        });
        setSearchResults(response.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("Ocorreu um erro ao buscar os jogos.");
      }
    };

    fetchGames();
  }, [searchTerm]);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar jogos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {searchResults.map((game) => (
          <li key={game.id} onClick={() => handleGameClick(game)}>
            <img
              src={
                game.cover
                  ? `https://images.igdb.com/igdb/image/upload/t_cover_small/${game.cover.image_id}.jpg`
                  : "placeholder_image.jpg"
              }
              alt={game.name}
            />
            {game.name}
          </li>
        ))}
      </ul>

      {selectedGame && (
        <div>
          <h2>{selectedGame.name}</h2>
          <img
            src={
              selectedGame.cover
                ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${selectedGame.cover.image_id}.jpg`
                : "placeholder_image.jpg"
            }
            alt={selectedGame.name}
          />
          <p>{selectedGame.summary}</p>
        </div>
      )}
    </div>
  );
}

export default GameSearch;
