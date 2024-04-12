import { Conversation } from "../models/conversation.model.mjs";
import { Message } from "../models/message.model.mjs";
import { User } from "../models/user.model.mjs";

export const getConversation = async (req, res) => {
  const {
    params: { id: receiverId },
    user: { userId: senderId },
  } = req;
  console.log(req.originalUrl, req.method);
  if (!senderId)
    return res.status(401).send({ error: "User in not logged in!" });
  const receiver = await User.findById(receiverId);
  if (!receiver) return res.status(401).send({ error: "Invalid Receiver!" });

  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });
  return res.status(200).send(conversation);
};

// send message controller
export const sendMessageToConversation = async (req, res) => {
  const {
    params: { id: receiverId },
    user: { userId: senderId },
    body: { message },
  } = req;

  console.log(req.originalUrl, req.method);
  try {
    if (!senderId)
      return res.status(401).send({ error: "User is not logged in !" });

    const receiver = await User.findById(receiverId);
    if (!receiver) return res.status(401).send({ error: "Invalid Receiver!" });

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      message,
      sender: senderId,
      receiver: receiverId,
    });

    conversation.messages.push(newMessage._id);
    await Promise.all([conversation.save(), newMessage.save()]);

    const wholeConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    return res.status(201).send(wholeConversation);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
