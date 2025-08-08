import { getShortUrl } from "../dao/shortUrl.dao.js";
import {
  createShortUrlWithUser,
  createShortUrlWithoutUser,
} from "../services/shortUrl.service.js";
import { NotFoundError } from "../utils/errorHandler.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const data = req.body;
  let shortUrl;
  if (req.user) {
    shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug);
  } else {
    shortUrl = await createShortUrlWithoutUser(data.url);
  }
  res.status(200).json({ shortUrl: process.env.FRONTEND_URL + "/" + shortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const url = await getShortUrl(id);
  if (!url) throw new NotFoundError("Short URL not found");
  res.redirect(url.full_url);
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;
  const shortUrl = await createShortUrlWithUser(url, req.user._id, slug);
  res.status(200).json({ shortUrl: process.env.FRONTEND_URL + "/" + shortUrl });
});
