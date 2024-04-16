import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

//custom hook:
export const useCurrentUserContext = ()=>{
    const {currentUser,setCurrentUser} = useContext(CurrentUserContext);
    return {currentUser,setCurrentUser};
}


export const CurrentUserContextProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null);
    return(
        <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </CurrentUserContext.Provider>
    )
}


