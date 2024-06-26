import express from "express";
import cors from "cors";
import { createUserRouter } from "./routes/user.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { ErrorHandler } from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 3000;

export const createApp = ({ userModel }) => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.disable("x-powered-by");
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static("public"));

  app.use("/api/user", createUserRouter({ userModel }));

  app.use(ErrorHandler);

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
};
