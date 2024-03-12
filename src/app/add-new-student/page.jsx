
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Nav from "../components/Nav";
import { useState } from "react";
import axios from "axios";
import FormStudent from "../components/formStudent";
import "./add-new-student.css";

const AddStudent = () => {
  const [image, setImage] = useState();
     const router = useRouter();
  const [imgFile, setImgFile] = useState("");
  const [student, setStudent] = useState({
    fristName: "",
    lastName: "",
    num: "",
    studyCase: "",
    squad: "",
    section: "",
    password: "",
    specialization: "",
  });
  const upImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImgFile(file);
    }
  };
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    const formdata = new FormData();
    formdata.append("img", imgFile);
    formdata.append("fristName", student.fristName);
    formdata.append("lastName", student.lastName);
    formdata.append("num", student.num);
    formdata.append("studyCase", student.studyCase);
    formdata.append("squad", student.squad);
    formdata.append("section", student.section);
    formdata.append("password", student.password);
    formdata.append("specialization", student.specialization);
    e.preventDefault();
    await axios
      .post(`${process.env.NEXT_PUBLIC_API}/users/add-new-user`, formdata)
      .then((res) => console.log(res))
       .then((res) => router.push("/students"))
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
            upImage={upImage}
            image={image}
            page="addNew"
          />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
