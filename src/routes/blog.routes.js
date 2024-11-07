import { Router } from "express";
import { blogController } from "../controllers/index.js";
export const blogRoutes = new Router();
blogRoutes.get("/", blogController);
