import { Router } from "express";
import authRoutes from "./auth.mjs";
import conversationRoutes from "./conversation.mjs";
import userRoutes from "./users.mjs";

const routes = Router();
routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);
routes.use("/conversation", conversationRoutes);

export default routes;
