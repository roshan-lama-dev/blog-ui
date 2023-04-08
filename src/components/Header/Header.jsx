import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesm">Roshan's</span>
        <span className="headerTitlelg">Blog</span>
      </div>

      <img
        className="headerImage"
        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="headerImage"
      />
    </div>
  );
};
