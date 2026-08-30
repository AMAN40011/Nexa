import express from 'express';
import { getMe, login, logout, register } from '../controllers/user.js';
import { protectRoute } from '../middleware/authentication.js';
const router =express.Router();

router.post("/signup",register);
router.post("/login",login);
router.get("/logout",logout);
router.get('/me',protectRoute,getMe);

export default router;