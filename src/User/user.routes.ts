import { Router } from "express";
import UserController from "./UserController";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/api/users", userController.saveUser);
userRouter.get("/api/users/:id", userController.getUserById);
userRouter.get("/api/account/:id", userController.getAccountInfo);
userRouter.post("/api/login", userController.login);

export default userRouter;
