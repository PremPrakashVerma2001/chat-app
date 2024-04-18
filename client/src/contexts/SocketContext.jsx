import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useCurrentUserContext } from "./CurrentUserContext";
import io from "socket.io-client";

const SocketContext = createContext();
const server_url = import.meta.env.VITE_SERVER_BASE_URL;

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  // const [socket, setSocket] = useState(null);
  const [receiverMessage, setReceiverMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { currentUser } = useCurrentUserContext();
  //   const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const socket = io(server_url, {
        query: {
          userId: currentUser._id,
        },
      });
      // setSocket(socket);
      socket.emit("getOnlineUsers", currentUser._id);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      socket.on("newMessageFromReciever", (newMessage) => {
        setReceiverMessage(newMessage);
      });
      return () => {
        socket.disconnect();
      };
    }
  }, [currentUser]);
  return (
    <SocketContext.Provider
      value={{ onlineUsers, receiverMessage, setReceiverMessage }}
    >
      {children}
    </SocketContext.Provider>
  );
};
