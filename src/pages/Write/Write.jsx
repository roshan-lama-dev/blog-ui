import React from "react";
import "./write.css";
export const Write = () => {
  return (
    <div className="write">
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="fa-solid fa-plus"></i>
          </label>
          <input type="file" style={{ display: "none" }} id="fileInput" />
          <input type="text" placeholder="title" />
        </div>
      </form>
    </div>
  );
};
