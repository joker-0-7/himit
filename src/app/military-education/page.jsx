"use client";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Image from "next/image";
const MilitaryEducation = () => {
  const [students, setStudents] = useState([]);
  const [choseStu, setChoseStu] = useState([]);
  const [squad, setSquad] = useState("");
  const [section, setSection] = useState("");
  const [num, setNum] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState("");
  const [filtring, serFiltering] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/users/students`
      );
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };
  const countData = () => {
    const organizedData = {};
    students.forEach((item) => {
      const section = item.section;
      if (!organizedData[section]) {
        organizedData[section] = [];
      }
      organizedData[section].push(item);
    });
    setCount(organizedData);
  };
  const handleSquad = async (e) => {
    const squadValue = e.target.value;
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/users/students`
      );
      const filtering =
        squadValue !== "DEFAULT"
          ? data.filter((s) => s.squad === squadValue)
          : data;
      setStudents(filtering);
      filteredStudents();
    } catch (error) {
      console.log(error);
    }
  };
  const filteredStudents = () => {
    const fStu = students.filter((s) => s.num.toString().includes(search));
    serFiltering(fStu);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    countData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [students]);
  const addToTable = (student) => {
    const isStudentAlreadyAdded = choseStu.some((s) => s._id === student._id);

    if (!isStudentAlreadyAdded) {
      setChoseStu((prevChoseStu) => [...prevChoseStu, student]);
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    filteredStudents();
  };
  return (
    <div className="military-education">
      <div className="row">
        <div className="col-3">
          <Nav />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <Header />
                <div className="main-page">
                  <div className="main-heading">
                    <h1>التربية العسكرية</h1>
                  </div>
                  <div className="form">
                    <form onSubmit={handleSubmit}>
                      <div className="row gy-5">
                        <div className="col-lg-6 col-sm-12">
                          <div className="section">
                            <select className="form-control">
                              <option
                                value="يرجي اختيار الشعبة"
                                selected
                                disabled
                              >
                                يرجي اختيار الشعبة
                              </option>
                              <option value="علوم حاسب">علوم حاسب</option>
                              <option value="نظم ومعلومات">نظم ومعلومات</option>
                              <option value="محاسبة">محاسبة</option>
                              <option value="ادارة اعمال">ادارة اعمال</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="Squad">
                            <select
                              className="form-control"
                              onChange={handleSquad}
                            >
                              <option
                                value="يرجي اختيار الفرقة"
                                selected
                                disabled
                              >
                                يرجي اختيار الفرقة
                              </option>
                              <option value="الفرقة الأولي">
                                الفرقة الأولي
                              </option>
                              <option value="الفرقة الثانية">
                                الفرقة الثانية
                              </option>
                              <option value="الفرقة الثالثة">
                                الفرقة الثالثة
                              </option>
                              <option value="الفرقة الرابعة">
                                الفرقة الرابعة
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="رقم الدورة"
                          />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="تاريخ بدأ الدورة"
                          />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="تاريخ انتهاء الدورة"
                          />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="البحث بالرقم القومي"
                            onChange={handleSearch}
                            value={search}
                          />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="head d-flex justify-content-between bg-dark text-light ps-4 pe-4 rounded-top-3 pt-3 pb-3">
                            <span>اسم الطالب</span>
                            <span>مسلسل</span>
                          </div>
                          {choseStu.map((student, index) => {
                            return (
                              <div
                                className="body d-flex justify-content-between bg-light ps-4 pe-4 pt-3 pb-3"
                                key={index + 1}
                              >
                                <span>
                                  {student.fristName + " " + student.lastName}
                                </span>
                                <span>{index + 1}</span>
                              </div>
                            );
                          })}
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="resault">
                            <div className="student">
                              {search &&
                                filtring.map((student, i) => {
                                  return (
                                    <div key={i}>
                                      <button
                                        className="btn btn-light w-100"
                                        style={{ height: "60px" }}
                                        onClick={() => {
                                          addToTable(student);
                                        }}
                                      >
                                        <span className="name">
                                          {student.fristName +
                                            " " +
                                            student.lastName}
                                        </span>
                                        <span className="image">
                                          {student && student.image ? (
                                            <Image
                                              src={`${process.env.NEXT_PUBLIC_API}/public/images/${student.image}`}
                                              width={50}
                                              height={50}
                                              alt={student.name}
                                            />
                                          ) : (
                                            ""
                                          )}
                                        </span>
                                      </button>
                                      <h1></h1>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div className="row text-center mt-4">
                              <div className="col-6">
                                <button
                                  className="btn btn-dark"
                                  style={{
                                    width: "123px",
                                    height: "47px",
                                    fontWeight: "bolder",
                                    fontSize: "15px",
                                  }}
                                >
                                  ارسال
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  className="btn btn-outline-dark"
                                  style={{
                                    width: "123px",
                                    height: "47px",
                                    fontWeight: "bolder",
                                    fontSize: "15px",
                                  }}
                                  onClick={() => {
                                    window.history.back();
                                  }}
                                >
                                  الغاء
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MilitaryEducation;
