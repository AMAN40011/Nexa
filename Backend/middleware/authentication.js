export const protectRoute = async (req, res, next) => {
  try {
    console.log("PROTECT ROUTE RUNNING");
    console.log("COOKIES:", req.cookies);

    const token = req.cookies?.jwt;

    if (!token) {
      console.log("NO JWT COOKIE");

      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    console.log("DECODED:", decoded);

    const user = await User.findById(decoded.id);

    console.log("USER:", user?._id);

    if (!user) {
      console.log("USER NOT FOUND");

      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next();

  } catch (error) {
    console.log("AUTH ERROR:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};