import { getCustomUrl, saveShortUrl } from "../dao/shortUrl.dao.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = generateNanoId(7);
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId, slug = null) => {
  const shortUrl = slug || generateNanoId(7);
  const exists = await getCustomUrl(slug);
  if (exists) {
    throw new Error("This Custom URL already exists");
  }
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
