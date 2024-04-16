import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CurrentUserContextProvider } from "./contexts/CurrentUserContext.jsx";
import { OtherUsersContextProvider } from "./contexts/OtherUsersContext.jsx";
axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CurrentUserContextProvider>
          <OtherUsersContextProvider>
            <App />
            <Toaster
              toastOptions={{
                className: "",
                style: {
                  border: "1px solid #713200",
                  padding: "16px",
                  color: "#FF204E",
                },
              }}
            />
          </OtherUsersContextProvider>
        </CurrentUserContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
