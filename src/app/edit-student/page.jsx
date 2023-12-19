"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import "../add-new-student/add-new-student.css";
import { useState } from "react";
import axios from "axios";
import FormStudent from "../components/formStudent";
const EditStudint = () => {
  const [student, setStudent] = useState("");
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/users/edit-student/${
          window.location.pathname.split("/")[2]
        }`
      );
      setStudent(data);
    } catch (err) {
      console.log(err);
    }
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

        <FormStudent
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          student={student}
          setStudent={setStudent}
          page="editStudint"
        />
      </div>
    </div>
  );
};
export default EditStudint;
