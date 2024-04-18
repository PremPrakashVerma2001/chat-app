import React, { useEffect, useState } from "react";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

const SentMessage = ({ message }) => {
  const { currentUser } = useCurrentUserContext();
  const [date, setDate] = useState(new Date(message.createdAt));
  return (
    <div className="flex justify-end p-2 mb-4">
      <div className="bg-teal-900 text-white rounded-lg rounded-tr-none py-1 px-2 w-3/4 relative top-3 ">
        <p className=" font-thin text-sm leading-tight pr-2 text-left">
          {message.message}
        </p>
        <div className="text-[10px] text-emerald-500 text-right w-full">
          {date.toLocaleTimeString() +
            "  " +
            date.getDate() +
            "/" +
            date.getMonth() +
            "/" +
            date.getFullYear()}
        </div>
      </div>
      <div className="">
        <img
          src={currentUser?.profilePic}
          alt=""
          className="h-6 aspect-square"
        />
      </div>
    </div>
  );
};

export default SentMessage;
