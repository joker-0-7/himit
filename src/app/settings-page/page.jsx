"use client";
import { useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./setting.css";
const Settings = () => {
  const [value, setValue] = useState("");

  return (
    <div className="settings">
      <Nav />
      <div className="container">
        <div className="row w-100">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-12">
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
