"use client";
import { useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import "./setting.css";
import MainSetting from "../components/components-setting/MainSetting";
import FacultyDepartments from "../components/components-setting/FacultyDepartments";
import ChangePassword from "../components/components-setting/ChangePassword";
import GoalApplication from "../components/components-setting/GoalApplication";
import UsagePolicy from "../components/components-setting/UsagePolicy";
import VisionAndMission from "../components/components-setting/VisionAndMission";

const Settings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const showModal = () => {
        setIsModalOpen(true);
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
                            <ul
                                className="nav nav-pills mb-3"
                                id="pills-tab"
                                role="tablist"
                            >
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
                                        className="nav-link btn"
                                        onClick={showModal}
                                    >
                                        تغيير كلمة السر
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
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ChangePassword
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Settings;
