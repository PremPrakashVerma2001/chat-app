import React, { useEffect, useState } from "react";
import { GrSend } from "react-icons/gr";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import { useSelectedUserContext } from "../contexts/SelectedUserContext";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";
import axios from "axios";

const Conversation = () => {
  const { selectedUser } = useSelectedUserContext();
  const { setIsAuthenticated } = useAuthContext();
  const { currentUser } = useCurrentUserContext();
  const [conversation, setConversation] = useState([]);
  const [messageInputValue, setMessageInputValue] = useState("");
  // console.log("current selected user : ", selectedUser);

  const handleSend = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    try {
      console.log("hoooooooo", `/api/conversation/${selectedUser._id}`);
      // console.log({message});
      const response = await axios.post(
        `/api/conversation/${selectedUser._id}`,
        { message: message }
      );
      if (response.status === 201) {
        console.log(response.data);
        setConversation([...conversation, response.data]);
        setMessageInputValue("");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      localStorage.removeItem("chat-auth");
      setIsAuthenticated(false);
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
        localStorage.removeItem("chat-auth");
        localStorage.removeItem("chat-user");
        setIsAuthenticated(false);
      }
    };
    if (selectedUser) getConversation();
  }, [selectedUser]);

  return (
    <>
      {selectedUser ? (
        <div className="w-[20rem] flex flex-col">
          <div className="flex items-center gap-4 border-gray-300/50 bg-black/50 p-1">
            <div className="relative w-max">
              <img
                src={selectedUser?.profilePic}
                alt={`${selectedUser?.displayName} profile pic`}
                className="h-7 aspect-square"
              />
              <div className="h-[10px] bg-green-500 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute" />
              {/* <div className='h-[10px] bg-red-600 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute' /> */}
            </div>
            <div className="text-white">
              <h2>{selectedUser?.displayName}</h2>
            </div>
          </div>
          <div className="h-full overflow-auto">
            {conversation.map((message) =>
              currentUser._id === message.sender ? (
                <SentMessage message={message} key={message._id} />
              ) : (
                // <>
                //   {console.log("mmmmmmmmmmm", currentUser._id, message.sender)}
                //   sender
                // </>
                <ReceivedMessage message={message} key={message._id} />
                // <>
                //   {console.log("mmmmmmmmmmm", currentUser._id, message.sender)}
                //   receiver
                // </>
              )
            )}
          </div>
          <div className="bg-black/50 text-emerald-500 ">
            <form onSubmit={handleSend} className="pr-2 flex items-center">
              <input
                type="text"
                placeholder="message..."
                name="message"
                id="message"
                value={messageInputValue}
                onChange={(e) => setMessageInputValue(e.target.value)}
                className="bg-transparent focus:outline-none text-white p-2 w-full"
              />
              <button type="submit" className="inline">
                <GrSend
                  size={20}
                  className="cursor-pointer hover:text-emerald-300"
                />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-[20rem] flex flex-col gap-3 justify-center items-center text-white bg-black/30">
          <h1 className="uppercase text-[22px] whitespace-nowrap hover:text-gray-300">
            🎉welcome {currentUser?.displayName}🎉
          </h1>
          <p className="text-emerald-300 hover:text-emerald-400">
            Get Unlimited Chats
          </p>
        </div>
      )}
    </>
  );
};

export default Conversation;
