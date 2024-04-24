import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { useCurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  const { currentUser } = useCurrentUserContext();
  return (
    <>
      <h1 className=" w-72 text-cyan-950/90 relative mx-auto text-center text-4xl p-1 font-sans bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10  bg-slate-700 border border-black/20 rounded-b-2xl ">
        Talk<span className="text-slate-600">Hub</span>
      </h1>
      <div className=" bg-black/50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-gray-900 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-black/20">
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={currentUser ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={currentUser ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
