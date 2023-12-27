import Image from "next/image";
import { useState } from "react";
const MainSetting = () => {
  const [image, setImage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const upImage = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImage(URL.createObjectURL(file));
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
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="last-name">
                <input
                  type="text"
                  className="form-control"
                  placeholder="الاسم الثاني"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="num">
                <input
                  type="text"
                  className="form-control"
                  placeholder="الرقم القومي"
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
