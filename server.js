import 'dotenv/config';
import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 8080;
var corsOptions = {
  origin: `http://localhost:${PORT}`
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});