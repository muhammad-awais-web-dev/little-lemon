import { createContext, useState, useContext} from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function toggleLogIn() {
        setIsLoggedIn((prev) => !prev);
    }

    const value = { isLoggedIn, toggleLogIn };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}