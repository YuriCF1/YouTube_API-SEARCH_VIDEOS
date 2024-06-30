import express from "express";

import { searchVideos } from "../controllers/searcController.js";

const router = express.Router();

router.get("/search", searchVideos);

export default router;
