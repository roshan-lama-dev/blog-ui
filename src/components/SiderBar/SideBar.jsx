import React from "react";
import "./sidebar.css";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Author</span>
        <img
          className="abouImage"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="aboutImage"
        />

        <p>
          Hello this is Roshan Lama. This is my blog. I will be writing about my
          developer journey.
        </p>
      </div>
    </div>
  );
};
