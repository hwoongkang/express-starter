import express from "express";
import userRouter from "./user";
import assetsRouter from "./assets";
import auth from "../middlewares/auth";
const router = express.Router();

router.use("/users", userRouter);

router.use("/assets", auth, assetsRouter);

router.get("/hello", (req, res) => {
  res.json({ hello: "world" });
});

export default router;
