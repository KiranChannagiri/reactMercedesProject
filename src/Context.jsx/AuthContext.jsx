import { createContext,useState } from "react";

export const AuthContext =createContext();
export function AuthProvider({children}){
    const[isLoggedIn,setIsLoggedin]=useState(false);

    return (
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedin}}>
            {children}
        </AuthContext.Provider>
    )
}