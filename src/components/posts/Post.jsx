import React from "react";
import "./post.css";

export const Post = ({ posts }) => {
  return (
    <div className="post">
      <div className="blogPost">
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="postImage"
        />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>

          <span className="postTitle">{}</span>
          <hr />
          <span className="postDate">2 hours ago</span>
        </div>

        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo molestiae nulla excepturi aperiam ullam delectus dolorem
          veritatis quos fugit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores illo molestiae nulla excepturi aperiam
          ullam delectus dolorem veritatis quos fugit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Asperiores illo molestiae nulla
          excepturi aperiam ullam delectus dolorem veritatis quos fugit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo
          molestiae nulla excepturi aperiam ullam delectus dolorem veritatis
          quos fugit.
        </p>
      </div>
      <div className="blogPost">
        <img
          src="https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt=""
          className="postImage"
        />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>

          <span className="postTitle">Exercise Daily</span>
          <hr />
          <span className="postDate">2 hours ago</span>
        </div>

        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo molestiae nulla excepturi aperiam ullam delectus dolorem
          veritatis quos fugit.
        </p>
      </div>
      <div className="blogPost">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="postImage"
        />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>

          <span className="postTitle">Exercise Daily</span>
          <hr />
          <span className="postDate">2 hours ago</span>
        </div>

        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo molestiae nulla excepturi aperiam ullam delectus dolorem
          veritatis quos fugit.
        </p>
      </div>
      <div className="blogPost">
        <img
          src="https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
          className="postImage"
        />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>

          <span className="postTitle">Exercise Daily</span>
          <hr />
          <span className="postDate">2 hours ago</span>
        </div>

        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo molestiae nulla excepturi aperiam ullam delectus dolorem
          veritatis quos fugit.
        </p>
      </div>
    </div>
  );
};
