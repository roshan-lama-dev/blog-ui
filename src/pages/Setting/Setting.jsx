import React from "react";
import "./setting.css";
import { SideBar } from "../../components/SiderBar/SideBar";
import { Nabar } from "../../components/Navbar/Nabar";
export const Setting = () => {
  return (
    <>
      <Nabar />
      <div className="setting">
        <div className="settingWrapper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>

          <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPP">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingPPIcon fa-solid fa-user"></i>
              </label>
            </div>

            <input type="file" id="fileInput" style={{ display: "none" }} />
            <label>UserName</label>
            <input type="text" placeholder="John Doe" />
            <label>Emaiil</label>
            <input type="email" placeholder="johndoe@gamil.com" />
            <label>Password</label>
            <input type="password" placeholder="*******" />

            <button className="settingSubmit">Update</button>
          </form>
        </div>
        <SideBar />
      </div>
    </>
  );
};
