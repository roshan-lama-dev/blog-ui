import React from "react";
import "./setting.css";
import { SideBar } from "../../components/SiderBar/SideBar";
export const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>

        <form className="settingForm">
          <label>Profile Picture</label>
          <img src="" alt="" />

          <lable></lable>
        </form>
      </div>
      <SideBar />
    </div>
  );
};
