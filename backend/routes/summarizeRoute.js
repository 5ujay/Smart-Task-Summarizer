import express from "express";
import { summarizeTasks } from "../controllers/summarizeController.js";

const router = express.Router();

router.post("/", summarizeTasks);

export default router;
