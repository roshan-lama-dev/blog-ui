import React from "react";
import "./singelarticle.css";
import { SideBar } from "../../components/SiderBar/SideBar";
import { SinglePost } from "../../components/SingelPost/SinglePost";
import { Nabar } from "../../components/Navbar/Nabar";
export const Singlearticle = () => {
  return (
    <>
      <Nabar />
      <div className="flexContainer">
        <div className="single">
          <SinglePost />
        </div>

        <SideBar />
      </div>
    </>
  );
};
