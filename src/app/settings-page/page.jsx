"use client";
import { useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import "./setting.css";
import Quill from "../components/QuillCoponent";

const Settings = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="settings">
      <Nav />
      <div className="container">
        <div className="row w-100">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-12">
            <div>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="main-setting-tap"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="pills-disabled"
                    aria-selected="false"
                    disabled
                  >
                    Disabled
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="main-setting-tap"
                  tabIndex={0}
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex={0}
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabIndex={0}
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-disabled"
                  role="tabpanel"
                  aria-labelledby="pills-disabled-tab"
                  tabIndex={0}
                >
                  ...
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <Quill value={value} setValue={setValue} />
              <div className="btns" style={{ paddingTop: "47px" }}>
                <button
                  className="btn btn-dark"
                  style={{
                    width: "123px",
                    height: "47px",
                    marginLeft: "10px",
                  }}
                >
                  حفظ
                </button>
                <button
                  onClick={() => {
                    window.history.back();
                  }}
                  className="btn btn-outline-dark"
                  style={{
                    width: "123px",
                    height: "47px",
                  }}
                >
                  الغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
