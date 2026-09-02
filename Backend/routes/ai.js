import express from 'express';
import {askAI} from "../controllers/ai.js";


const router=express.Router();

router.post("/chat",askAI);

export default router;