import React from "react";
import { useSelectedUserContext } from "../contexts/SelectedUserContext";
import { useSocketContext } from "../contexts/SocketContext";

const Avatar = ({ user }) => {
  const { onlineUsers } = useSocketContext();
  const { setSelectedUser } = useSelectedUserContext();
  const found = onlineUsers.find((userId) => userId == user._id);
  const handleClick = () => {
    localStorage.setItem("chat-selected-user", JSON.stringify(user));
    setSelectedUser(user);
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-4 border-b-2  border-gray-300/50 p-2 mb-2 cursor-pointer hover:bg-black/40 hover:rounded-md hover:rounded-b-none hover:border-b-emerald-400 duration-200"
    >
      <div className="relative w-max ">
        <img
          src={user.profilePic}
          alt="profile"
          className="rounded-full h-10 w-10 aspect-square"
        />
        <div className={`h-[10px] ${found ? "bg-green-500" : "bg-red-600"}  ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute `} />
        {/* <div className='h-[10px] bg-red-600 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute' /> */}
      </div>
      <div className="text-white">
        <h2>{user.displayName}</h2>
      </div>
    </div>
  );
};

export default Avatar;
