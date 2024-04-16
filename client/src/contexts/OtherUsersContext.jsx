import { createContext, useContext, useState } from "react";

const OtherUsersContext = createContext(null);

//custom hook:
export const useOtherUsersContext = ()=>{
    const {otherUsers,setOtherUsers} = useContext(OtherUsersContext);
    return {otherUsers,setOtherUsers};
}

export const OtherUsersContextProvider = ({children})=>{
    const [otherUsers,setOtherUsers] = useState({});
    return(
        <OtherUsersContext.Provider value={{otherUsers,setOtherUsers}}>
            {children}
        </OtherUsersContext.Provider>
    )
}