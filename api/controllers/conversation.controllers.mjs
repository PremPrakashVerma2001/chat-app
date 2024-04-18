import { Conversation } from "../models/conversation.model.mjs";
import { Message } from "../models/message.model.mjs";
import { User } from "../models/user.model.mjs";
import { getReceiverSocketId, io } from "../socket/socket.io.mjs";

export const getConversation = async (req, res) => {
  console.log(req.originalUrl, req.method);
  if (!req.user)
    return res.status(401).send({ error: "User in not logged in!" });

  try {
    const {
      params: { id: receiverId },
      user: { userId: senderId },
    } = req;

    const receiver = await User.findById(receiverId);
    if (!receiver) return res.status(401).send({ error: "Invalid Receiver!" });

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    return res.status(200).send(conversation);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
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

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId)
      io.to(receiverSocketId).emit("newMessageFromReciever", newMessage);
    // const socketId = onlineUsers.find((ids)=>(ids == receiverId))
    // io.

    // const wholeConversation = await Conversation.findOne({
    //   participants: { $all: [senderId, receiverId] },
    // }).populate("messages");

    return res.status(201).send(newMessage);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
