"use client";
import Image from "next/image";
import { useState } from "react";
import { Button, Modal } from "antd";
import Nav from "../components/Nav";
import Students from "../helpers/students";
import "./students.css";
const Student = () => {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    console.log("done del");
    hideModal();
  };
  return (
    <div className="student">
      <Nav />
      <div className="container  pt-5">
        <div className="form pb-5">
          <form>
            <div className="search d-flex">
              <input type="text" placeholder="بحث" />
              <span>
                <Image
                  src="/images/icons/search.png"
                  width={16}
                  height={16}
                  alt="search"
                />
              </span>
              <button className="btn btn-dark d-flex ">
                <Image
                  src="/images/icons/plus.png"
                  width={20}
                  height={20}
                  alt="add"
                />
                <span>اضافة طالب</span>
              </button>
            </div>
          </form>
        </div>
        <div className="fillter">
          <div className="section">
            <select className="form-control">
              <option value="" selected disabled>
                يرجي اختيار الشعبة
              </option>
              <option value="علوم حاسب">علوم حاسب</option>
              <option value="نظم ومعلومات">نظم ومعلومات</option>
              <option value="محاسبة">محاسبة</option>
              <option value="ادارة اعمال">ادارة اعمال</option>
            </select>
          </div>
          <div className="Squad">
            <select className="form-control">
              <option value="" selected disabled>
                يرجي اختيار الفرقة
              </option>
              <option value="الفرقة الأولي">الفرقة الأولي</option>
              <option value="الفرقة الثانية">الفرقة الثانية</option>
              <option value="الفرقة الثالثة">الفرقة الثالثة</option>
              <option value="الفرقة الرابعة">الفرقة الرابعة</option>
            </select>
          </div>
          <div className="submit">
            <button className="btn btn-dark">بحث</button>
          </div>
        </div>
        <div className="users mt-5">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">الرقم</th>
                <th scope="col">صورة الطالب</th>
                <th scope="col">اسم الطالب</th>
                <th scope="col">الشعبة</th>
                <th scope="col">الفرقة</th>
                <th scope="col">الحالة الدراسية</th>
                <th scope="col">التخصص</th>
              </tr>
            </thead>
            <tbody>
              {Students.map((Student) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <Image
                        src="/images/students/student.png"
                        width={90}
                        height={90}
                        alt="احمد ماهر احمد ابراهيم شعيب"
                      />
                    </td>
                    <td>
                      <div className="data">
                        <div className="name">احمد ماهر احمد ابراهيم شعيب</div>
                        <div className="actions mt-4">
                          <span className="edit">
                            <Image
                              src="/images/icons/actions/edit.png"
                              width={25}
                              height={25}
                              alt="edit"
                            />
                          </span>
                          <span className="delete me-3">
                            <Button type="auto" onClick={showModal}>
                              <Image
                                src="/images/icons/actions/delete.png"
                                width={25}
                                height={25}
                                alt="edit"
                              />
                            </Button>
                            <Modal
                              title="حذف الطالب"
                              open={open}
                              onOk={handleDelete}
                              onCancel={hideModal}
                              okText="حذف"
                              cancelText="الغاء"
                            >
                              <h5>هل انت متأكد من حذف الطالب ؟</h5>
                            </Modal>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>نظم ومعلومات ادارية</td>
                    <td>الرابعة</td>
                    <td>مستجد</td>
                    <td>عام</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Student;
