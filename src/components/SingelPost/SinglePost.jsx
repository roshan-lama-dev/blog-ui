import React from "react";
import "./singelpost.css";
import { Nabar } from "../Navbar/Nabar";
import { useLocation } from "react-router-dom";
export const SinglePost = () => {
  // using the location hook gives us the pathname where we have sent the post id
  const location = useLocation();
  // we are spliting the location returend from the uselocation to get the id which in the second position
  console.log(location.pathname.split("/")[2]);
  return (
    <>
      {/* <Nabar /> */}
      <div className="singlePost">
        <div className="singlePostContainer">
          <img
            src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
            alt=""
            className="singlePostImg"
          />

          <h1 className="singlePostTitle">
            This is the first title for the post
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>

          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Roshan</b>
            </span>

            <span className="singlePosttime">2 hours ago</span>
          </div>

          <p className="postDesription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            sed, possimus voluptatibus culpa odio consectetur facere non enim?
            Quibusdam, accusamus.
          </p>
        </div>
      </div>
    </>
  );
};
