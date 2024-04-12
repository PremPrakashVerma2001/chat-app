import { Router } from "express";
import { Conversation } from "../models/conversation.model.mjs";
import { getConversation, sendMessageToConversation } from "../controllers/conversation.controllers.mjs";

const router = Router();

router.get("/:id", getConversation);
router.post("/:id", sendMessageToConversation);

export default router;
