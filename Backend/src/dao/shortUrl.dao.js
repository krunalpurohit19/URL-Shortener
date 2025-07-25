//DAO(Data Access Object) for short URL operations
import urlSchema from "../models/shortUrl.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      full_url: longUrl,
      short_url: shortUrl,
    });
    if (userId) {
      newUrl.user = userId;
    }
    await newUrl.save();
  } catch (error) {
    if (error.code == 11000) {
      // Duplicate key error
      throw new ConflictError("Short URL already exists");
    }
    throw new Error(error.message);
  }
};

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
};

export const getCustomUrl = async (slug) => {
  return await urlSchema.findOne({ short_url: slug });
};
