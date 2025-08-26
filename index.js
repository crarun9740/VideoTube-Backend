import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Welcome to VideoTUbe");
  res.status(200).send("Welcome to Youtube, Arun");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
