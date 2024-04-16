import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import Avatar from "./Avatar";
import { useAuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const Chats = () => {
  const { setIsAuthenticated } = useAuthContext();
  const handleExit = async() => {
    try {
        const response = await axios.post("/api/auth/logout");
        if(response.status == 200){
            localStorage.removeItem("chat-auth");
            setIsAuthenticated(null);
            toast.success("User is successfully logged out");
        }
    } catch (error) {
        console.error(error)
        toast.error(error.message);
    }
  };
  return (
    <div className=" w-[25vh] border-r-2 p-5 border-gray-300/50 relative">
      <div className="flex items-center justify-around mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-[22vh] text-xs p-[3px] bg-transparent border-b-2 border-b-black/50  focus:outline-none focus:border-b-2 focus:border-b-emerald-400 "
        />
        <FaSearch size={13} className="hover:text-emerald-400 cursor-pointer" />
      </div>
      {/* <hr className='border-black/50 my-2'/> */}
      <div className="">
        <Avatar size={40} />
        <Avatar size={40} />
        <Avatar size={40} />
      </div>
      <div className="text-red-700 font-bold absolute bottom-3 left-3 hover:text-red-500 duration-200">
        <IoExitOutline
          onClick={handleExit}
          className="h-7 w-7 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Chats;
