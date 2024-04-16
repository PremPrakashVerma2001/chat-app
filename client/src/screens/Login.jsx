import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { setIsAuthenticated } = useAuthContext();
  const { setCurrentUser } = useCurrentUserContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData)
      const response = await axios.post("/api/auth/login", formData);
      console.log(response.data);
      if (response.status == 200) {
        console.log(response.data);
        localStorage.setItem("chat-auth", "true");
        localStorage.setItem("chat-user", JSON.stringify(response.data));
        // console.log("current user : ", response.data);
        setCurrentUser(response.data);
        toast.success("User is Logging In...");
        setIsAuthenticated(true);
      } else {
        toast.error("Somthing Went wrong!");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="text-white text-md p-7 ">
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label htmlFor="username">Email</label>
          <br />
          <input
            type="email"
            name="username"
            id="username"
            placeholder="xyz@gmail.com"
            minLength={5}
            maxLength={20}
            required
            onChange={handleChange}
            className="w-full text-black p-2 bg-transparent border-b-2 border-b-black/50  focus:outline-none focus:border-b-2 focus:border-b-emerald-400"
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*****"
            minLength={5}
            maxLength={20}
            required
            onChange={handleChange}
            className="w-full text-black p-2 bg-transparent border-b-2 border-b-black/50  focus:outline-none focus:border-b-2 focus:border-b-emerald-400 "
          />
        </div>
        <div className="text-center space-y-2">
          <button
            className="rounded-lg bg-blue-500 hover:bg-blue-600  px-3 py-2"
            type="submit"
          >
            LOGIN
          </button>
          <p className="text-black/60">Forgot Password ?</p>
        </div>
        <div className="text-base text-center">
          <p>
            Don't have an Account ?{" "}
            <Link
              className="text-amber-400 font-semibold hover:text-amber-500"
              to="/signup"
            >
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
