import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  return { isAuthenticated, setIsAuthenticated };
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("chat-auth"));
  console.log("authContext : ", isAuthenticated);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
