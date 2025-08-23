import React from "react";
import { useAuth } from "./AuthContext";

export default function LoginButton() {
  const { isLoggedIn, toggleLogIn } = useAuth();

  return (
    <button onClick={toggleLogIn}>
      {isLoggedIn ? "Log Out" : "Log In"}
    </button>
  );
}
