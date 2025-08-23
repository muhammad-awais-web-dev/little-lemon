import React from "react";
import { useAuth } from "./AuthContext";

export default function Header(){
    const {isLoggedIn} = useAuth();

    return(
        <header>
            <h1>{isLoggedIn? "Welcome User" : "Please Login"}</h1>
        </header>
    )
}