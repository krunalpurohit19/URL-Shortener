import express from "express";
import connectDB from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import authRoute from "./src/routes/auth.route.js";
import userRoute from "./src/routes/user.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import dotenv from "dotenv";
dotenv.config("./.env");
import cors from "cors";
import cookieParser from "cookie-parser";
import { attachUser } from "./src/utils/attachUser.js";

const app = express();

app.use(
  cors({
    origin: "https://url-shortener-mw8b.vercel.app/",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(attachUser);
app.use("/api/user", userRoute);
app.use("/api/create", shortUrl);
app.use("/api/auth", authRoute);
app.get("/:id", redirectFromShortUrl);
app.get("/", (req, res) => {
  res.send("Welcome to the URL Shortener API");
});

app.use(errorHandler);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on http://localhost:3000");
});
