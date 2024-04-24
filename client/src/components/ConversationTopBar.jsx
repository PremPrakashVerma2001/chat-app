import React from "react";
import { useSelectedUserContext } from "../contexts/SelectedUserContext";
import { useSocketContext } from "../contexts/SocketContext";

const ConversationTopBar = () => {
  const { onlineUsers } = useSocketContext();
  const { selectedUser } = useSelectedUserContext();
  const found = onlineUsers.find((userId) => userId == selectedUser._id);

  return (
    <div className="flex items-center gap-4 border-gray-300/50 bg-black/50 p-3">
      <div className="relative w-max">
        <img
          src={selectedUser?.profilePic}
          alt={`${selectedUser?.displayName} profile pic`}
          className="h-7 aspect-square"
        />
        <div className={`h-[10px] ${found ? "bg-green-500" : "bg-red-600"} bg-green-500 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute`} />
        {/* <div className='h-[10px] bg-red-600 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute' /> */}
      </div>
      <div className="text-white">
        <h2 className={`${found?"text-teal-200":"text-red-300"}`}>{selectedUser?.displayName.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default ConversationTopBar;
