import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const token = req.token!;
  res.json({ private: "route", token });
});

export default router;
