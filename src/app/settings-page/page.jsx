"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";

import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

import "./setting.css";
const Settings = () => {
  const [value, setValue] = useState("");
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return client ? (
    <div className="settings">
      <Nav />
      <div className="container">
        <div className="row w-100">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-12">
            <ReactQuill theme="snow">  </ReactQuill>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default Settings;
