import express from "express";
import { getUser, updateProfile } from "../controllers/userController";

export const userRouter = express.Router();

userRouter.get("/get", getUser);
userRouter.post("/update", updateProfile);
