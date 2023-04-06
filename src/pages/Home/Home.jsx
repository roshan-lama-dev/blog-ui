import React from "react";
import "./home.css";
import { Header } from "../../components/Header/Header";
import { Post } from "../../components/posts/Post";
import { SideBar } from "../../components/SiderBar/SideBar";
export const Home = () => {
  return (
    <div>
      <Header />

      <div className="home">
        <Post />
        <SideBar />
      </div>
    </div>
  );
};
