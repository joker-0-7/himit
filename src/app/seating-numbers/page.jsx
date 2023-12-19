"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import "./seating.css";
import { useState, useEffect } from "react";
import axios from "axios";
const SeatingNumbers = () => {
  const [count, setCount] = useState({
    "علوم حاسب": [],
    محاسبة: [],
    "نظم ومعلومات": [],
    "ادارة اعمال": [],
  });
  const [student, setStudent] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [squad, setSquad] = useState("DEFAULT");
  const getData = async () => {
    const sq = ["علوم حاسب", "محاسبة", "نظم ومعلومات", "ادارة اعمال"];
    const nums = [1, 2, 3, 4];
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/users/students`
      );
      data.map((s) => {
        setCount({ ...count, [s.section]: [...[s]] });
        console.log(s, count[s.section]);
      });
      setStudent(data);
      // console.log(count);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsClient(true);
    getData();
  }, []);
  return isClient ? (
    <div className="seating-numbers">
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
        <form>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  <select
                    name="squad"
                    className="form-control"
                    defaultValue={squad}
                    onChange={(e) => setSquad(e.target.value)}
                  >
                    <option value="DEFAULT" selected disabled>
                      يرجي اختيار الفرقة
                    </option>
                    <option value="الفرقة الأولي">الفرقة الأولي</option>
                    <option value="الفرقة الثانية">الفرقة الثانية</option>
                    <option value="الفرقة الثالثة">الفرقة الثالثة</option>
                    <option value="الفرقة الرابعة">الفرقة الرابعة</option>
                  </select>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">علوم الحاسب</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="من"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الي"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم المجموعة"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">محاسبة</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="من"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الي"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم المجموعة"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">نظم ومعلومات ادارية</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="من"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الي"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم المجموعة"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">ادارة اعمال</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="من"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الي"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم المجموعة"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-dark send ms-4" type="submit">
            ارسال
          </button>
          <button className="btn cancle">الغاء</button>
        </form>
        <div className="data">
          <div className="heading w-100">
            <h5 className="text-light text-end ">اجمالي عدد الطلاب</h5>
            <hr className="text-light" />
          </div>
          <div className="counts w-100">
            <div className="count w-100">
              <span className="text-end">علوم الحاسب</span>
              <span className="text-start">{count["علوم حاسب"].length}</span>
            </div>
            <div className="count w-100">
              <span className="text-end">محاسبة</span>
              <span className="text-start">{count["محاسبة"].length}</span>
            </div>
            <div className="count w-100">
              <span className="text-end">نظم ومعلومات ادارية</span>
              <span className="text-start">{count["نظم ومعلومات"].length}</span>
            </div>
            <div className="count w-100">
              <span className="text-end">ادارة اعمال</span>
              <span className="text-start">{count["ادارة اعمال"].length}</span>
            </div>
          </div>
        </div>
      </div>
      {console.log(count)}
    </div>
  ) : (
    ""
  );
};
export default SeatingNumbers;
