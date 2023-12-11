"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import "./add-new-student.css";
import { useState } from "react";
import axios from "axios";
import FormStudent from "../components/formStudent";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    num: "",
    studyCase: "",
    squad: "",
    section: "",
    password: "",
  });
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("img", file);
    setImage([...formData]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.NEXT_PUBLIC_API}/users/add-new-user`, student)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-student">
      <Nav />
      <div className="container">
        <div className="header">
          <Image
            src="/images/logo/dark-logo.png"
            width={73}
            height={73}
            alt="logo"
          />
        </div>
        <div className="form">
          <div className="main pb-5">
            <h1>تسجيل طالب جديد</h1>
          </div>
          <FormStudent
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            student={student}
            setStudent={setStudent}
            image={image}
            handleImage={handleImage}
            setImage={setImage}
            page="addNew"
          />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
