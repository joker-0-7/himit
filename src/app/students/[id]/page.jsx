"use client";
import Image from "next/image";
import Nav from "../../components/Nav";
import "../students.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FormStudent from "../../components/formStudent";
const EditStudint = () => {
  const [student, setStudent] = useState({
    name: "",
    num: "",
    studyCase: "",
    squad: "",
    section: "",
    password: "",
    Specialization: "",
  });
  useEffect((e) => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/users/get-student/${
          window.location.pathname.split("/")[2]
        }`
      );
      setStudent(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/users/update-student/${
          window.location.pathname.split("/")[2]
        }`,
        student
      );
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
