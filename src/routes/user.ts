import express from "express";
import { getUsers, register } from "../controllers/user";

const router = express.Router();

router.get("/", getUsers);
router.post("/", register);

export default router;
