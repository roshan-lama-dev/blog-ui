import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      {post.map((i) => {
        return (
          <div className="blogPost">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="postImage"
            />

            <div className="postInfo">
              <div className="postCats">
                {i.categories.map((i) => {
                  return <span className="postCat">{i}</span>;
                })}
              </div>
              {/* capture the post id and relocate the user to the single post filed when he clicks on the title */}
              <Link className="navlink" to={`/post/${i._id}`}>
                <span className="postTitle">{i.title}</span>
              </Link>

              <hr />
              <span className="postDate">
                {/* converts the date created parameter from the database into readable format */}
                {new Date(i.createdAt).toDateString()}
              </span>
            </div>

            <p className="postDesc">{i.desc}</p>
          </div>
        );
      })}
    </div>
  );
};
