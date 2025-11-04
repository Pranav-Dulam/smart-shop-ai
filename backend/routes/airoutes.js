import express from 'express';
import { summarizeReview } from "../controllers/aiController.js";

const router = express.Router();
router.post("/summarize", summarizeReview);
export default router;