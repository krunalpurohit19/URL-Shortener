import { cookieOptions } from "../config/config.js";
import {
  registerUserService,
  loginUserService,
} from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const registerUser = wrapAsync(async (req, res) => {
  // Registration logic
  const { name, email, password } = req.body;
  const { token, user } = await registerUserService(name, email, password);

  req.user = user;
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ message: "User registered successfully" });
});

export const loginUser = wrapAsync(async (req, res) => {
  // Login logic
  const { email, password } = req.body;
  const { token, user } = await loginUserService(email, password);

  req.user = user;
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ user: user, message: "User logged in successfully" });
});

export const logoutUser = wrapAsync(async (req, res) => {
  // Logout logic
  res.clearCookie("accessToken", cookieOptions);
  res.status(200).json({ message: "User logged out successfully" });
});

export const getCurrentUser = wrapAsync(async (req, res) => {
  res.status(200).json({ user: req.user });
});
