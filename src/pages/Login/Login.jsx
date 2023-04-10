import React from "react";
import "./login.css";
import { Nabar } from "../../components/Navbar/Nabar";

export const Login = () => {
  return (
    <div className="mainLogin">
      <Nabar />
      <form action="" className="loginForm">
        <h1 className="loginTitle">Login</h1>
        <input
          className="emailInput"
          type="email"
          placeholder="John Doe"
          autoFocus={true}
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="*******"
        />
        <button className="loginBtn">Login</button>
      </form>
    </div>
  );
};
