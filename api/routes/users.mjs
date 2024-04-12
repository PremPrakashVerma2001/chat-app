import { Router } from "express";
import { deleteUser, getAllUsers } from "../controllers/user.controllers.mjs";

const router = Router();

// router.post("/", createUser);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);

export default router;
