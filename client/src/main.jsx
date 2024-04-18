import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CurrentUserContextProvider } from "./contexts/CurrentUserContext.jsx";
import { SelectedUserContextProvider } from "./contexts/SelectedUserContext.jsx";
import { SocketContextProvider } from "./contexts/SocketContext.jsx";
axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserContextProvider>
        <SelectedUserContextProvider>
          <SocketContextProvider>
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
          </SocketContextProvider>
        </SelectedUserContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
