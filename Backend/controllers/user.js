import { generateJwtToken } from "../jwt/token.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";


export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.json({ success: false, message: "Required All Feilds" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.json({
        success: false,
        message: "User Already Exist with this email",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const Newuser=await User.create({
      username,
      email,
      password: hashPassword,
    });

    generateJwtToken(Newuser._id, res);

    return res.status(201).json({
      success: true,
      message: "User successfully registered",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error While Regsitering User",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All feilds are required" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User doesn't exist with this email",
        });
    }

    const passcheck = await bcrypt.compare(password, user.password);

    if (!passcheck) {
      return res
        .status(400)
        .json({ success: false, message: "Password is Incorrect" });
    }

    generateJwtToken(user._id, res);

    return res
      .status(200)
      .json({ success: true, message: "LoggedIn Successfully" });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error While Logging In",
      error: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");

    return res
      .status(200)
      .json({ success: true, message: "Logout Successfull" });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error While Logout",
      error: error.message,
    });
  }
};

export const getMe = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while getting user",
      error: error.message,
    });
  }
};