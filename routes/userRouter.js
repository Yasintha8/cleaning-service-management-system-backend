import express from "express";
import { getAllUsers, getCurrentUser, loginUser, registerUser,  } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", getAllUsers );
userRouter.get("/current", getCurrentUser);

export default userRouter;