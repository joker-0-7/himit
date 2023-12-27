"use client";
import { useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import "./setting.css";
import Quill from "../components/QuillCoponent";
import MainSetting from "../components/components-setting/MainSetting";
import FacultyDepartments from "../components/components-setting/FacultyDepartments";

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
          <div className="col-12" style={{ minHeight: "60vh" }}>
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
                    اعدادات عامه
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="faculty-departments-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#faculty-departments"
                    type="button"
                    role="tab"
                    aria-controls="faculty-departments"
                    aria-selected="false"
                  >
                    اعضاء هيئة التدريس
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="institute-vision-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#institute-vision"
                    type="button"
                    role="tab"
                    aria-controls="institute-vision"
                    aria-selected="false"
                  >
                    رؤية المعهد
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="goal-application-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#goal-application"
                    type="button"
                    role="tab"
                    aria-controls="goal-application"
                    aria-selected="false"
                  >
                    الهدف من التطبيق
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="usage-policy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#usage-policy"
                    type="button"
                    role="tab"
                    aria-controls="usage-policy"
                    aria-selected="false"
                  >
                    سياسة الاستخدام
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="change-password-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#change-password"
                    type="button"
                    role="tab"
                    aria-controls="change-password"
                    aria-selected="false"
                  >
                    تغيير الباسورد
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
                  <MainSetting />
                </div>
                <div
                  className="tab-pane fade"
                  id="faculty-departments"
                  role="tabpanel"
                  aria-labelledby="faculty-departments-tab"
                  tabIndex={0}
                >
                  <FacultyDepartments />
                </div>
                <div
                  className="tab-pane fade"
                  id="institute-vision"
                  role="tabpanel"
                  aria-labelledby="institute-vision-tab"
                  tabIndex={0}
                >
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
                <div
                  className="tab-pane fade"
                  id="goal-application"
                  role="tabpanel"
                  aria-labelledby="goal-application-tab"
                  tabIndex={0}
                >
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
                <div
                  className="tab-pane fade"
                  id="usage-policy"
                  role="tabpanel"
                  aria-labelledby="usage-policy-tab"
                  tabIndex={0}
                >
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
                <div
                  className="tab-pane fade"
                  id="change-password"
                  role="tabpanel"
                  aria-labelledby="change-password-tab"
                  tabIndex={0}
                >
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
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
