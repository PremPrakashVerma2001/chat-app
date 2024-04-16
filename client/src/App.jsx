import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated } = useAuthContext();
  return (
    <>
      <h1 className="text-3xl text-black text-center">
        {isAuthenticated ? "auth truee!!" : "auth falseee!!"}
      </h1>
      <div className=" bg-black/20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-gray-900 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-black/20">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
