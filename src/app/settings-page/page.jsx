"use client";
import { useEffect, useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";
// import ReactQuill from "react-quill";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import "react-quill/dist/quill.snow.css";

import "./setting.css";
const Settings = () => {
  const [value, setValue] = useState("");
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, 0);

  return client ? (
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
  ) : (
    ""
  );
};
export default Settings;
