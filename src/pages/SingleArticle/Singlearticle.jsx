import React from "react";
import "./singelarticle.css";
import { SideBar } from "../../components/SiderBar/SideBar";
import { SinglePost } from "../../components/SingelPost/SinglePost";
export const Singlearticle = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};
