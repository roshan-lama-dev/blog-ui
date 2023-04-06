import React from "react";
import "./navbar.css";
export const Nabar = () => {
  return (
    <div className="navbarContainer">
      <div className="leftNavbar">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-github"></i>
      </div>

      <div className="centerNavbar">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Write</span>
        <span>Logout</span>
      </div>
      <div className="rightNavbar">
        <img
          className="profileImage"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="profile"
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="searchIcon"></div>
    </div>
  );
};
