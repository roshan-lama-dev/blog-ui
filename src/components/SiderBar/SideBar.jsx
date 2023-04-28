import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/category");
      setCat(result.data);
      // console.log(result.data);
    };
    getCategories();
  }, []);

  // console.log(cat);
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
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="categoriesList">
          {cat.map((i) => (
            <Link to={`/?cat=${i.name}`} className="navlink">
              <li className="sidebarListItem">{i.name}</li>;
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocail">
          <a target="_blank" href="https://www.linkedin.com/in/roshan-lama/">
            {" "}
            <i className="sideIconf fa-brands fa-linkedin" />
          </a>{" "}
          <a target="_blank" href="https://github.com/roshan-lama-dev">
            <i className="sideIcon fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
