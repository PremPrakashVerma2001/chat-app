import React, { useState } from "react";
import { useSelectedUserContext } from "../contexts/SelectedUserContext";

const ReceivedMessage = ({ message }) => {
  const { selectedUser } = useSelectedUserContext();
  const [date, setDate] = useState(new Date(message.createdAt));

  return (
    <div className="flex p-2 mb-4">
      <div className="">
        <img
          src={selectedUser?.profilePic}
          alt=""
          className="h-6 aspect-square"
        />
      </div>
      <div className="bg-slate-800 text-white rounded-lg rounded-tl-none py-1 px-2 w-2/4 relative top-3 ">
        <p className="font-thin text-sm leading-tight pr-2 text-left">
          {message?.message}
        </p>
        <div className="text-[10px] text-emerald-500 text-right w-full">
          {
            date.getDate() +
            "/" +
            date.getMonth() +
            "/" +
            date.getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
