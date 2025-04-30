import express from "express";
import { getAllUsers, loginUser, registerUser,  } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);

// ✅ New route to get all users
userRouter.get("/", getAllUsers );

export default userRouter;