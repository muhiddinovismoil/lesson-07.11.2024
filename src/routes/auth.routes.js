import { Router } from "express";
import { authGuard, roleGuard } from "../middleware/index.js";
import { loginController, registerController } from "../controllers/index.js";
export const authRoutes = new Router();
authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
authRoutes.get("/me", authGuard, roleGuard([""]), (req, res) => {
    res.send("ok");
});
