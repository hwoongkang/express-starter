import "./config/env";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import router from "./routes/root";
import errorHandler from "./controllers/error";
import cors from "cors";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", router);

app.use(errorHandler);

export default app;
