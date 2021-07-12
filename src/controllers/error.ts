import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  console.log("in error handler");
  res.status(500).json({ success: false, message: "server broken" });
};

export default errorHandler;
