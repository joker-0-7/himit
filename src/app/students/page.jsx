"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import Nav from "../components/Nav";
import { useRouter } from "next/navigation";
import "./students.css";
import axios from "axios";
const Student = () => {
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState("");
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const [fill, setFill] = useState([]);
  const [fillter, setFillter] = useState({
    section: "",
    squad: "",
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/users/students`
      );
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  const showModal = (e) => {
    setOpen(true);
    setStudent(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API}/users/delete-student/${student._id}`
    );
    console.log("sdfsdfsd");
    setOpen(false);
    // getData();
    // setOpen(false);
    // window.navigation.reload();
  };
  const editStudent = (e) => {
    router.push(`/students/${e}`);
  };
  const fillterUsrs = (e) => {
    setFillter({ ...fillter, [e.target.name]: e.target.value });
  };
  const filltering = () => {
    users.filter((e) => {
      if (e.section === fillter.section && e.squad === fillter.squad) {
        fill.push(e);
      }
    });
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
              <button
                className="btn btn-dark d-flex"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/add-new-student");
                }}
              >
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
            <select
              className="form-control"
              name="section"
              onChange={fillterUsrs}
            >
              <option value="يرجي اختيار الشعبة" selected disabled>
                يرجي اختيار الشعبة
              </option>
              <option value="علوم حاسب">علوم حاسب</option>
              <option value="نظم ومعلومات">نظم ومعلومات</option>
              <option value="محاسبة">محاسبة</option>
              <option value="ادارة اعمال">ادارة اعمال</option>
            </select>
          </div>
          <div className="squad">
            <select
              className="form-control"
              name="squad"
              onChange={fillterUsrs}
            >
              <option value="يرجي اختيار الفرقة" selected disabled>
                يرجي اختيار الفرقة
              </option>
              <option value="الفرقة الأولي">الفرقة الأولي</option>
              <option value="الفرقة الثانية">الفرقة الثانية</option>
              <option value="الفرقة الثالثة">الفرقة الثالثة</option>
              <option value="الفرقة الرابعة">الفرقة الرابعة</option>
            </select>
          </div>
          <div className="submit">
            <button className="btn btn-dark" onClick={filltering}>
              بحث
            </button>
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
              {users.map((student, index) => {
                return (
                  <>
                    <tr key={student.id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API}/public/images/${student.image}`}
                          width={90}
                          height={90}
                          alt={student.name}
                        />
                      </td>
                      <td>
                        <div className="data">
                          <div className="name">{student.name}</div>
                          <div className="actions mt-4">
                            <span className="edit">
                              <Image
                                src="/images/icons/actions/edit.png"
                                width={25}
                                height={25}
                                alt="edit"
                                onClick={() => {
                                  editStudent(student._id);
                                }}
                              />
                            </span>
                            <span className="delete me-3">
                              <Button
                                type="auto"
                                onClick={() => {
                                  showModal(student);
                                }}
                              >
                                <Image
                                  src="/images/icons/actions/delete.png"
                                  width={25}
                                  height={25}
                                  alt="edit"
                                />
                              </Button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>{student.section}</td>
                      <td>{student.squad}</td>
                      <td>{student.studyCase}</td>
                      <td>{student.spec}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
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
        </div>
      </div>
    </div>
  );
};
export default Student;
