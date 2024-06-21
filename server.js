const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post("/api/games", async (req, res) => {
  const { searchTerm } = req.body;
  try {
    const response = await axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID,
        Authorization: `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
      },
      data: `fields name,cover.url,summary,cover.image_id; search "${searchTerm}";`,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching games from IGDB:", error.message);
    res.status(500).json({ error: "Ocorreu um erro ao buscar os jogos." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
