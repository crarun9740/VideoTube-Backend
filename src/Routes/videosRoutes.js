import express from "express";
import { uploadvideo } from "../Controller/videosController";
import { videoUploadmiddleware } from "../Middleware/videoUploadmiddleware";
const videoRouter = express.Router();

videoRouter.post("/upload", videoUploadmiddleware, uploadvideo);

export default videoRouter;
