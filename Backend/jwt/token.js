import jwt from "jsonwebtoken";

export const generateJwtToken =  (id, res) => {
  try {
    const token = jwt.sign({ id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("jwt", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
    
  } catch (error) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Error While jwt token generation",
        error: error.message,
      });
  }
};
