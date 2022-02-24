require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const moviesRoutes = require('./routes/movies');

const PORT = process.env.PORT || 8080;
var corsOptions = {
  origin: `http://localhost:${PORT}`
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/movies', moviesRoutes);

app.get("/", (req, res) => {
  res.send('Page d\'accueil');
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});