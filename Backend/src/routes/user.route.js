import e from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getAllUserUrls } from "../controller/user.controller.js";

const router = e.Router();

router.post("/urls", authMiddleware, getAllUserUrls);

export default router;
