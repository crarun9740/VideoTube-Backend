import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/Db/db.js";
import videoRouter from "./src/Routes/videosRoutes.js";

// dotenv.config();
dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use("/api/video/auth/", videoRouter);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
