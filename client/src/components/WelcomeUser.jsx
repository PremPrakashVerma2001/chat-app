import React from "react";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

const WelcomeUser = () => {
  const { currentUser } = useCurrentUserContext();
  return (
    <div className="w-[20rem] flex flex-col gap-3 justify-center items-center text-white bg-black/30">
      <h1 className="uppercase text-[22px] whitespace-nowrap hover:text-gray-300">
        🎉welcome {currentUser?.displayName}🎉
      </h1>
      <p className="text-emerald-300 hover:text-emerald-400">
        Get Unlimited Chats
      </p>
    </div>
  );
};

export default WelcomeUser;
