import { fetchAllUserUrls } from "../dao/user.dao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const getAllUserUrls = wrapAsync(async (req, res) => {
  const { _id } = req.user;
  const urls = await fetchAllUserUrls(_id);
  res.status(200).json({ message: "User URLs fetched successfully", urls });
});
