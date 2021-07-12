import { RequestHandler } from "express";

const auth: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(400).json({
      success: false,
      message: "cannot access private route without token",
    });
  }
  req.token = authHeader.split(" ")[1];
  next();
};
export default auth;
