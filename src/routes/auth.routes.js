import { Router } from "express";
// import {} from "../middleware/index.js";
import { loginController, registerController } from "../controllers/index.js";
export const authRoutes = new Router();
authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
