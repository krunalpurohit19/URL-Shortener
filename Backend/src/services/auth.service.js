import {
  findUserByEmail,
  createUser,
  findUserByEmailAndPassword,
} from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";

export const registerUserService = async (name, email, password) => {
  try {
    const user = await findUserByEmail(email);
    if (user) throw new ConflictError("User already exists");

    const newUser = await createUser(name, email, password);
    const token = signToken({ id: newUser._id });
    return { token, user };
  } catch (error) {
    throw new Error(error.message || "Error registering user");
  }
};

export const loginUserService = async (email, password) => {
  try {
    const user = await findUserByEmailAndPassword(email);
    if (!user) throw new Error("Invalid email or password");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid email or password");

    const token = signToken({ id: user._id });
    return { token, user };
  } catch (error) {
    throw new Error(error.message || "Error logging in user");
  }
};
