import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import { useSelectedUserContext } from "../contexts/SelectedUserContext";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import ConversationTopBar from "./ConversationTopBar";
import SendMessageForm from "./SendMessageForm";
import WelcomeUser from "./WelcomeUser";

const Conversation = () => {
  const { selectedUser, setSelectedUser } = useSelectedUserContext();
  const { currentUser, setCurrentUser } = useCurrentUserContext();
  const [conversation, setConversation] = useState([]);
  const [messageInputValue, setMessageInputValue] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    try {
      const response = await axios.post(
        `/api/conversation/${selectedUser._id}`,
        { message: message }
      );
      if (response.status === 201) {
        setConversation([...conversation, response.data]);
        setMessageInputValue("");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      localStorage.removeItem("chat-selected-user");
      localStorage.removeItem("chat-user");
      setCurrentUser(null);
      setSelectedUser(null);
    }
  };
  useEffect(() => {
    const getConversation = async () => {
      try {
        const response = await axios.get(
          `/api/conversation/${selectedUser._id}`
        );
        if (response.status === 200) {
          setConversation(response.data.messages);
          console.log("convo : ", response.data.messages);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
        localStorage.removeItem("chat-selected-user");
        localStorage.removeItem("chat-user");
        setCurrentUser(null);
        setSelectedUser(null);
      }
    };
    if (selectedUser) getConversation();
  }, [selectedUser]);

  return (
    <>
      {selectedUser ? (
        <div className="w-[20rem] flex flex-col">
          <ConversationTopBar />
          <div className="h-full overflow-auto">
            {conversation.map((message) =>
              currentUser._id === message.sender ? (
                <SentMessage message={message} key={message._id} />
              ) : (
                <ReceivedMessage message={message} key={message._id} />
              )
            )}
          </div>
          <SendMessageForm
            handleSend={handleSend}
            messageInputValue={messageInputValue}
            setMessageInputValue={setMessageInputValue}
          />
        </div>
      ) : (
        <WelcomeUser />
      )}
    </>
  );
};

export default Conversation;
