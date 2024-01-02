"use client";
import { UserContext } from "@/app/context/userContext";
import axios from "axios";
import Image from "next/image";
import { useState, useContext } from "react";

const MainSetting = () => {
  const [image, setImage] = useState();
  const [imgFile, setImgFile] = useState("");
  const [state, setState] = useContext(UserContext);
  const [fristName, setFristName] = useState(state && state.user.fristName);
  const [lastName, setLastName] = useState(state && state.user.lastName);
  const [num, setNum] = useState(state && state.user.num);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("img", imgFile);
    formdata.append("fristName", fristName);
    formdata.append("lastName", lastName);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/users/update-data/${state.user._id}`,
        formdata
      );
      // let auth = JSON.parse(window.localStorage.getItem("auth"));
      // auth.user = data;
      // window.localStorage.setItem("auth", JSON.stringify(auth));
      // setState({ ...state, user: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const upImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImgFile(file);
    }
  };
  return (
    <div className="main-setting">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-lg-6 col-sm-12">
              <div className="first-name">
                <input
                  type="text"
                  className="form-control"
                  placeholder="الاسم الأول"
                  value={fristName}
                  onChange={(e) => setFristName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="last-name">
                <input
                  type="text"
                  className="form-control"
                  placeholder="الاسم الثاني"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="num">
                <input
                  type="text"
                  className="form-control"
                  placeholder="الرقم القومي"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="img mt-4">
            <div className="image d-flex">
              <label
                className="image"
                style={{ backgroundImage: `url(${image})` }}
              >
                <input type="file" hidden name="image" onChange={upImage} />
              </label>
              <div className="actions">
                <span className="edit me-3 mb-4 mt-1 d-block">
                  <Image
                    src="/images/icons/actions/edit.png"
                    width={25}
                    height={25}
                    alt="edit"
                  />
                </span>
                <span className="delete me-3 d-block">
                  <Image
                    src="/images/icons/actions/delete.png"
                    width={25}
                    height={25}
                    alt="edit"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="btns" style={{ paddingTop: "47px" }}>
            <button
              className="btn btn-dark"
              style={{
                width: "123px",
                height: "47px",
                marginLeft: "10px",
              }}
            >
              تغيير
            </button>
            <button
              onClick={() => {
                window.history.back();
              }}
              className="btn btn-outline-dark"
              style={{
                width: "123px",
                height: "47px",
              }}
            >
              الغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MainSetting;
