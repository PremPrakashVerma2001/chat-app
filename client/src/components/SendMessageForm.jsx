import React, { useState } from "react";
import { GrSend } from "react-icons/gr";

const SendMessageForm = ({ handleSend }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(e);
    setCurrentMessage("");
  };
  return (
    <div className="bg-black/50 text-emerald-500 ">
      <form onSubmit={handleSubmit} className="pr-2 flex items-center">
        <input
          type="text"
          placeholder="Write your message here..."
          name="message"
          id="message"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          autoComplete="off"
          autoFocus
          className="bg-transparent focus:outline-none text-white p-2 w-full"
        />
        <button type="submit" className="inline">
          <GrSend size={20} className="cursor-pointer hover:text-emerald-300" />
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;
