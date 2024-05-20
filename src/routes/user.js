import { Router } from "express";
import { UserController } from "../controllers/user.js";

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router();

  const userController = new UserController({ userModel });

  userRouter.post("/pdf", userController.getPdf);
  userRouter.post("/validation", userController.validateUser);

  userRouter.get("/", userController.getAll);
  userRouter.get("/:id", userController.getById);

  userRouter.get("/:id/qr", userController.getQr);

  return userRouter;
};
