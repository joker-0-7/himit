"use client";
import dynamic from "next/dynamic";
import {useState, useMemo } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";

import "react-quill/dist/quill.snow.css";

import "./setting.css";
import ReactQuillComp from "../components/ReactQuill";
const Settings = () => {
  const [value, setValue] = useState("");
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

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
  )
};
export default Settings;
