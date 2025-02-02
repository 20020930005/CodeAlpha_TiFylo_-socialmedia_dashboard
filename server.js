const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); // Load API keys from .env file

const app = express();
app.use(cors()); // Allow requests from frontend

const PORT = 5000;
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

app.get("/fetch-twitter", async (req, res) => {
  try {
      const response = await axios.get("https://api.twitter.com/2/tweets/search/recent?query=tech", {
          headers: { "Authorization": `Bearer ${TWITTER_BEARER_TOKEN}` }
      });
      res.json(response.data);
  } catch (error) {
      console.error("Twitter API Error:", error.response ? error.response.data : error.message);
      res.status(500).json({ error: "Twitter API Error", details: error.response ? error.response.data : error.message });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
