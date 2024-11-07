import { Router } from "express";
import { loginController, registerController } from "../controllers/index.js";
export const authRoutes = new Router();
authRoutes.post("/register", registerController);
authRoutes.psot("/login", loginController);
