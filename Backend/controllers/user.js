import { generateJwtToken } from "../jwt/token.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { createActivity } from "../utils/activity.js";
import Activity from "../models/activity.js";
import Message from "../models/message.js";
import cloudinary from "../config/cloudinary.js";

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

    const Newuser = await User.create({
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
      return res.status(400).json({
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

    await createActivity(user._id, "Login", "User logged into the account");

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

    await createActivity(
      req.user._id,
      "Logout",
      "User logged out of the account",
    );

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

export const security = async (req, res) => {
  try {
    const { currentPass, newPass } = req.body;

    const { _id } = req.user;

    const user = await User.findById(_id).select("+password");

    if (!user) {
      return res.json({
        success: false,
        message: "User is not exist Please Signup!",
      });
    }

    const isMattched = await bcrypt.compare(currentPass, user.password);

    if (!isMattched) {
      return res.json({
        success: false,
        message: "Password is Incorrect, Please try again!",
      });
    }

    const setPass = await bcrypt.hash(newPass, 10);

    user.password = setPass;

    await user.save();

    await createActivity(
      user._id,
      "Password Changed",
      "User Change there Password",
    );

    res.json({ success: true, message: "Password Changed Successfully!" });
  } catch (error) {
    console.log("SECURITY ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error while changing password",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { username, email } = req.body;
    const image = req.file;

    if (!username || !email) {
      return res.json({ success: false, message: "All feilds are Required!" });
    }

    const { _id } = req.user;

    const user = await User.findById(_id);

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }
    if (image) {
  const result = await cloudinary.uploader.upload(
    `data:${image.mimetype};base64,${image.buffer.toString("base64")}`,
    {
      folder: "nexatech/profile-images",
    }
  );

  user.profileImage = result.secure_url;
}

    const existingUser = await User.findOne({
      email,
      _id: {
        $ne: _id,
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already in use!" });
    }

    user.username = username;
    user.email = email;

    await user.save();

    await createActivity(
      user._id,
      "Profile Change",
      "User changed their account Details",
    );

    return res.status(200).json({
      success: true,
      message: "Profile Updated Successfully!",
      user: {
  _id: user._id,
  username: user.username,
  email: user.email,
  profileImage: user.profileImage,
},
    });
  } catch (error) {
    console.log("SECURITY ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error while Updating profile",
    });
  }
};

export const getActivity = async (req, res) => {
  try {
    const activities = await Activity.find({
      user: req.user._id,
    })
      .sort({ createdAt: -1 })
      .limit(20);
    return res.status(200).json({
      success: true,
      activities,
    });
  } catch (error) {
    console.log("ACTIVITY ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error while getting activities",
    });
  }
};

export const message = async (req, res) => {
  try {
    const { _id } = req.user;
    const { message } = req.body;

    const user = await User.findById(_id);

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    if (!message) {
      return res.json({
        success: false,
        message: "Message feild cannot be empty",
      });
    }

    const msg = await Message.create({
      user: _id,
      message,
    });

    return res.json({
      success: true,
      message: "Message has been Successfully sended!",
    });
  } catch (error) {
    console.log("Message Storing ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error while storing message",
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { _id } = req.user;
    
    const messages = await Message.find({ user: _id })
      .sort({ createdAt: -1 })
      .limit(20);

    return res.json({
      success: true,
      message: "Message has been Succesfully feteched ! ",
      user:req.user,
      messages
    });
  } catch (error) {
    console.log("Message Fecthing ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error while getting message",
    });
  }
};
