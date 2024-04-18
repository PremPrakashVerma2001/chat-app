import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import "dotenv/config";

const app = express();
const server = new createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  },
});

export const getReceiverSocketId = (userId) => {
  return onlineUsers[userId];
};

const onlineUsers = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  socket.on("getOnlineUsers", (userId) => {
    onlineUsers[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(onlineUsers));
  });

  socket.on("disconnect", () => {
    console.log("User disconnected with ID:", socket.id);
    delete onlineUsers[userId];
    io.emit("getOnlineUsers", Object.keys(onlineUsers));
  });
});

export { app, server, io };
