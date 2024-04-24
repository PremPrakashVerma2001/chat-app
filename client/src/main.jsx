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
                success:{
                  style: {
                    border: "1px solid white",
                    padding: "10px",
                    color: "green",
                    borderRadius:'10px'
                  },
                  position:'top-right',
                  icon:'✅'
                },
                error:{
                  style: {
                    border: "1px solid white",
                    padding: "10px",
                    color: "red",
                    borderRadius:'10px'
                  },
                  position:'top-right',
                  icon:'❌'
                }
              }}
            />
          </SocketContextProvider>
        </SelectedUserContextProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
