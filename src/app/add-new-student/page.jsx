"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import "./add-new-student.css";
import { useState } from "react";
import axios from "axios";
import FormStudent from "../components/formStudent";

const AddStudent = () => {
  const [imageURLS, setImageURLS] = useState([]);
  const [images, setImages] = useState([]);
  const [student, setStudent] = useState({
    name: "",
    num: "",
    studyCase: "",
    squad: "",
    section: "",
    password: "",
    Specialization: "",
  });
  const uploadImageToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImages((imageList) => [...imageList, e.target.files[0]]);
      setImageURLS((urlList) => [
        ...urlList,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    const formdata = new FormData();
    formdata.append("img", images[0]);
    formdata.append("name", student.name);
    formdata.append("num", student.num);
    formdata.append("studyCase", student.studyCase);
    formdata.append("squad", student.squad);
    formdata.append("section", student.section);
    formdata.append("password", student.password);
    formdata.append("Specialization", student.Specialization);
    e.preventDefault();
    await axios
      .post(`${process.env.NEXT_PUBLIC_API}/users/add-new-user`, formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(student);
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
            imageURLS={imageURLS}
            setImages={setImages}
            setImageURLS={setImageURLS}
            images={images}
            uploadImageToClient={uploadImageToClient}
            page="addNew"
          />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
