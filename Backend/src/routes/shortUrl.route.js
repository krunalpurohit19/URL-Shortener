import e from "express";
import { createShortUrl } from "../controller/shortUrl.controller.js";
const router = e.Router();

router.post("/", createShortUrl);

export default router;
