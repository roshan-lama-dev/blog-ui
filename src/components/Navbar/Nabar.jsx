import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Nabar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="navbarContainer">
        <div className="leftNavbar">
          <i className="leftIcon fa-brands fa-linkedin"></i>
          <i className="leftIcon fa-brands fa-square-github"></i>
        </div>

        <div className="centerNavbar">
          <span>
            <Link to="/" className="navlink">
              Home{" "}
            </Link>
          </span>
          <span>
            {" "}
            <Link to="/about" className="navlink">
              About{" "}
            </Link>
          </span>
          <span>
            {" "}
            <Link to="/contact" className="navlink">
              Contact{" "}
            </Link>
          </span>
          <span>
            {" "}
            <Link to="/writepost" className="navlink">
              Write{" "}
            </Link>
          </span>

          {isLoggedIn && (
            <span>
              {" "}
              <Link to="/logout" className="navlink">
                Logout{" "}
              </Link>
            </span>
          )}
        </div>
        <div className="rightNavbar">
          {isLoggedIn ? (
            <img
              className="profileImage"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="profile"
            />
          ) : (
            <>
              <span>
                <Link to="/login" className="navlink">
                  Login{" "}
                </Link>
              </span>
              <Link to="/register" className="navlink">
                Register{" "}
              </Link>
            </>
          )}

          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="searchIcon"></div>
      </div>
      <div className="hamburder">
        <button className="hamburger">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>
      </div>
    </>
  );
};
