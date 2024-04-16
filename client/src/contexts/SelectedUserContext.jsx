import { createContext, useContext, useState } from "react";

const SelectedUserContext = createContext(null);

export const useSelectedUserContext = () => {
  const { selectedUser, setSelectedUser } = useContext(SelectedUserContext);
  return { selectedUser, setSelectedUser };
};

export const SelectedUserContextProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(
    JSON.parse(localStorage.getItem("chat-selected-user"))
  );
  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};
