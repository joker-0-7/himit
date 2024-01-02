"use client";
import { useEffect, useState } from "react";
import Nav from "@/app/components/Nav";
import Header from "@/app/components/Headr";
import FormStudent from "@/app/components/formStudent";
import "../../add-doc/add-doc.css";
import axios from "axios";
const EditDoctor = () => {
  const [doctor, setDoctor] = useState({
    fristName: "",
    lastName: "",
  });
  const [image, setImage] = useState();
  const [imgFile, setImgFile] = useState("");
  const getDoctor = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API}/doctor/get-doctor/${
          window.location.pathname.split("/")[3]
        }`
      )
      .then((res) => setDoctor(res.data))
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("img", imgFile);
    formdata.append("fristName", doctor.fristName);
    formdata.append("lastName", doctor.lastName);
    await axios
      .put(
        `${process.env.NEXT_PUBLIC_API}/doctor/update-doctor/${
          window.location.pathname.split("/")[3]
        }`,
        formdata
      )
      .then((res) => setDoctor(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDoctor();
  }, []);
  const upImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImgFile(file);
    }
  };
  return (
    <div className="add-student">
      <Nav />
      <div className="container">
        <div className="header">
          <Header />
        </div>

        <FormStudent
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          doctor={doctor}
          upImage={upImage}
          //   setStudent={setStudent}
          //   imageURLS={imageURLS}
          //   images={images}
          page="add-doc"
        />
      </div>
    </div>
  );
};
export default EditDoctor;
