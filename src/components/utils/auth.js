import { createContext, useContext, useState } from "react";

const AuthContent = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);

    const login = (user) => {
        setuser(user)
    }

    const logout = () => {
        setuser(null)
        
    }

    return (
        <AuthContent.Provider value={{user, login, logout}}>
            {children}
        </AuthContent.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContent)
}