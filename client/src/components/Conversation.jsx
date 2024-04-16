import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { GrSend } from "react-icons/gr";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

const Conversation = () => {
  const [isConversationSelected, setIsConversationSeleted] = useState(true);
  const {currentUser} = useCurrentUserContext();

  return (
    <>
      {isConversationSelected ? (
        <div className="w-[20rem] flex flex-col">
          <div className="flex items-center gap-4 border-gray-300/50 bg-black/50 p-1">
            <div className="relative w-max">
              <RxAvatar size={30} />
              <div className="h-[10px] bg-green-500 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute" />
              {/* <div className='h-[10px] bg-red-600 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute' /> */}
            </div>
            <div className="text-white">
              <h2>Aman Kumar</h2>
            </div>
          </div>
          <div className="h-full overflow-auto">
            <SentMessage />
            <ReceivedMessage />
          </div>
          <div className="bg-black/50 text-emerald-500 flex items-center pr-2">
            <input
              type="text"
              placeholder="message..."
              name="message"
              id="message"
              className="bg-transparent focus:outline-none text-white p-2 w-full"
            />
            <GrSend
              size={20}
              className="cursor-pointer hover:text-emerald-300"
            />
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
