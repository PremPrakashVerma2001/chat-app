import React from "react";
import { useSelectedUserContext } from "../contexts/SelectedUserContext";

const ConversationTopBar = () => {
  const { selectedUser } = useSelectedUserContext();
  return (
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
  );
};

export default ConversationTopBar;
