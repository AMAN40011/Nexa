import express from "express";
import upload from "../middleware/upload.js";
import {
  getMe,
  login,
  logout,
  register,
  security,
  updateProfile, getActivity,
  message,
  getMessage
} from "../controllers/user.js";
import { protectRoute } from "../middleware/authentication.js";
const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/logout",protectRoute, logout);
router.get("/me", protectRoute, getMe);
router.post("/security", protectRoute, security);
router.put("/update", protectRoute, upload.single("profileImage"), updateProfile);
router.get("/activity", protectRoute, getActivity);
router.post("/message",protectRoute,message);
router.get("/message",protectRoute,getMessage);
export default router;
