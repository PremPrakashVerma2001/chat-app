import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import Avatar from "./Avatar";
import { useAuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelectedUserContext } from "../contexts/SelectedUserContext";

const Chats = () => {
  const { setIsAuthenticated } = useAuthContext();
  const { setSelectedUser } = useSelectedUserContext();
  const [users, setUsers] = useState([]);

  // const getAllUsers = async ()=>{
  //   try {
  //     const response = await axios.get('/api/users');

  //     if(response.status === 200){
  //       console.log(response.data);
  //       setUsers(response.data);
  //     }
  //   } catch (error) {
  //     setIsAuthenticated(false);
  //     localStorage.removeItem('chat-auth');
  //     console.error(error);
  //     toast.error(error.message);
  //   }
  // }

  // getAllUsers();

  const handleExit = async () => {
    try {
      const response = await axios.post("/api/auth/logout");
      if (response.status == 200) {
        localStorage.removeItem("chat-auth");
        localStorage.removeItem("chat-user");
        localStorage.removeItem("chat-selected-user");
        toast.success("User is successfully logged out");
        setSelectedUser(null);
        setIsAuthenticated(null);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("/api/users");

        if (response.status === 200) {
          // console.log(response.data);
          setUsers(response.data);
        }
      } catch (error) {
        setIsAuthenticated(false);
        localStorage.removeItem("chat-auth");
        console.error(error);
        toast.error(error.message);
      }
    };

    getAllUsers();
  }, []);
  return (
    <div className=" w-[15rem] border-r-2 p-5 border-gray-300/50 relative">
      <div className="flex items-center justify-around mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-[22vh] text-xs p-[3px] bg-transparent border-b-2 border-b-black/50  focus:outline-none focus:border-b-2 focus:border-b-emerald-400 "
        />
        <FaSearch size={13} className="hover:text-emerald-400 cursor-pointer" />
      </div>
      {/* <hr className='border-black/50 my-2'/> */}
      <div className=" h-4/5 overflow-auto">
        {/* <Avatar size={40} />
        <Avatar size={40} />
        <Avatar size={40} /> */}
        {users.map((user) => (
          <Avatar key={user._id} user={user} />
        ))}
      </div>
      <div className="text-red-700 font-bold absolute bottom-3 left-3 hover:text-red-500 duration-200 p-2 bg-white/50 hover:bg-white rounded-full">
        <IoExitOutline
          onClick={handleExit}
          className="h-7 w-7 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Chats;
