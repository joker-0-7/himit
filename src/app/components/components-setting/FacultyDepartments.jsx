"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Actions from "../Actions";
import ModalCopmonent from "../Modal";
import { useRouter } from "next/navigation";
const FacultyDepartments = () => {
  const [doctors, setDoctors] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const router = useRouter();

  const getDoctors = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API}/doctor`)
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDoctors();
  }, []);
  const showModal = (name) => {
    setOpen(true);
    setName(name);
  };
  const editStudent = (e) => {
    router.push(`/settings-page/edit-doctor/${e}`);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <div className="faculty-departments position-relative">
      <Link
        href="/settings-page/add-doc"
        className="btn btn-dark position-absolute"
        style={{ left: "0", top: "0" }}
      >
        <span>اضافة</span>
      </Link>
      <div className="row g-3">
        {doctors &&
          doctors.map((doctor) => {
            return (
              <div className="col-lg-6 col-sm-12 d-flex" key={doctor._id}>
                <div className="image ms-3">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API}/public/images/doctors/${doctor.image}`}
                    width={90}
                    height={90}
                    alt="doc"
                  />
                </div>
                <div className="detils">
                  <div className="name">
                    <h5>{doctor.fristName + " " + doctor.lastName}</h5>
                  </div>
                  <Actions
                    showModal={showModal}
                    name={doctor.fristName + " " + doctor.lastName}
                    id={doctor._id}
                    editStudent={editStudent}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <ModalCopmonent
        showModal={showModal}
        hideModal={hideModal}
        open={open}
        page="doctor"
        name={name}
      />
    </div>
  );
};
export default FacultyDepartments;
