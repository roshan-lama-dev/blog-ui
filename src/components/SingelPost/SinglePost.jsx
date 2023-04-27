import React, { useEffect, useState } from "react";
import "./singelpost.css";
import { Nabar } from "../Navbar/Nabar";
import { useLocation } from "react-router";
import axios from "axios";
// import { set } from "mongoose";
export const SinglePost = () => {
  // using the location hook gives us the pathname where we have sent the post id
  const location = useLocation();
  // we are spliting the location returend from the uselocation to get the id which in the second position
  const idPath = location.pathname.split("/")[2];
  const [singlePost, setSinglePost] = useState({});
  useEffect(() => {
    const getSinglePost = async () => {
      const result = await axios.get(
        "http://localhost:8080/api/v1/posts/" + idPath
      );
      setSinglePost(result.data);
    };

    getSinglePost();
  }, [idPath]);
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
            {singlePost.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>

          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>{singlePost.userName}</b>
            </span>

            <span className="singlePosttime">
              Created At: <b>{new Date(singlePost.createdAt).toDateString()}</b>
            </span>
          </div>

          <p className="postDesription">{singlePost.desc}</p>
        </div>
      </div>
    </>
  );
};
