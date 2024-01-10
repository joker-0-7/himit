"use client";
import Image from "next/image";
import Link from "next/link";
const FormStudent = ({
  handleChange,
  handleSubmit,
  student,
  page,
  doctor,
  upImage,
  image,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-5">
        {page && page !== "add-doc" && (
          <>
            <div className="col-6">
              <div className="section">
                <select
                  className="form-control"
                  name="section"
                  onChange={handleChange}
                  value={student && student.section}
                >
                  <option value="يرجي اختيار الشعبة" selected>
                    يرجي اختيار الشعبة
                  </option>
                  <option value="علوم حاسب">علوم حاسب</option>
                  <option value="نظم ومعلومات">نظم ومعلومات</option>
                  <option value="محاسبة">محاسبة</option>
                  <option value="ادارة اعمال">ادارة اعمال</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="squad">
                <select
                  className="form-control"
                  onChange={handleChange}
                  name="squad"
                  value={student && student.squad}
                >
                  <option value="يرجي اختيار الفرقة" selected>
                    يرجي اختيار الفرقة
                  </option>
                  <option value="الفرقة الأولي">الفرقة الأولي</option>
                  <option value="الفرقة الثانية">الفرقة الثانية</option>
                  <option value="الفرقة الثالثة">الفرقة الثالثة</option>
                  <option value="الفرقة الرابعة">الفرقة الرابعة</option>
                </select>
              </div>
            </div>
          </>
        )}
        <div className="col-6">
          <div className="name">
            <input
              name="fristName"
              onChange={handleChange}
              value={
                (student && student.fristName) || (doctor && doctor.fristName)
              }
              type="text"
              className="form-control"
              placeholder="الاسم الاول"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="name">
            <input
              name="lastName"
              onChange={handleChange}
              value={
                (student && student.lastName) || (doctor && doctor.lastName)
              }
              type="text"
              className="form-control"
              placeholder="الاسم الثاني"
            />
          </div>
        </div>
        {page && page !== "add-doc" && (
          <>
            <div className="col-6">
              <div className="study-case">
                <input
                  type="text"
                  name="specialization"
                  onChange={handleChange}
                  value={student && student.specialization}
                  className="form-control"
                  placeholder="التخصص"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="study-case">
                <input
                  type="text"
                  name="studyCase"
                  onChange={handleChange}
                  value={student && student.studyCase}
                  className="form-control"
                  placeholder="الحالة الدراسية"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="study-num">
                <input
                  name="num"
                  onChange={handleChange}
                  value={student && student.num}
                  type="text"
                  className="form-control"
                  placeholder="الرقم القومي"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="password">
                <input
                  name="password"
                  onChange={handleChange}
                  value={student && student.password}
                  type="text"
                  className="form-control"
                  placeholder="باسوورد التطبيق"
                />
              </div>
            </div>
          </>
        )}
        <div className="image d-flex">
          <label
            className="image"
            style={
              page === "editStudint"
                ? {
                    backgroundImage: `url(http://localhost:5000/public/images/students/${
                      student && student.image
                    })`,
                    width: "100px",
                    height: "100px",
                    border: "none",
                  }
                : { backgroundImage: `url(${image})` }
            }
          >
            {page === "editStudint" ? (
              ""
            ) : (
              <>
                {!image && (
                  <Image
                    src="/images/icons/add-image.png"
                    width={40}
                    height={40}
                    alt="add-image"
                  />
                )}
              </>
            )}
            <input type="file" hidden onChange={upImage} name="image" />
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
        <div className="btns">
          <button className="btn submit btn-dark" type="submit">
            حفظ
          </button>
          <button
            className="btn cancle btn-outline-dark me-4"
            onClick={() => {
              window.history.back();
            }}
          >
            الغاء
          </button>
        </div>
      </div>
    </form>
  );
};
export default FormStudent;
