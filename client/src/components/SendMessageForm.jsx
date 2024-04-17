import React from "react";
import { GrSend } from "react-icons/gr";

const SendMessageForm = ({
  handleSend,
  messageInputValue,
  setMessageInputValue,
}) => {
  return (
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
          <GrSend size={20} className="cursor-pointer hover:text-emerald-300" />
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;
