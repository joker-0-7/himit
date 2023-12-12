import Image from "next/image";
const FormStudent = ({
  handleChange,
  handleSubmit,
  student,
  page,
  uploadImageToClient,
  imageURLS,
  images,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-5">
        <div className="col-6">
          <div className="section">
            <select
              className="form-control"
              name="section"
              onChange={handleChange}
              value={student.section}
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
              value={student.squad}
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
        <div className="col-6">
          <div className="name">
            <input
              name="name"
              onChange={handleChange}
              value={student.name}
              type="text"
              className="form-control"
              placeholder="اسم الطالب"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="study-case">
            <input
              type="text"
              name="Specialization"
              onChange={handleChange}
              value={student.Specialization}
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
              value={student.studyCase}
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
              value={student.num}
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
              value={student.password}
              type="text"
              className="form-control"
              placeholder="باسوورد التطبيق"
            />
          </div>
        </div>
        <div className="image d-flex">
          <label
            className="image"
            style={
              imageURLS.length > 0
                ? { backgroundImage: `url(${imageURLS[0]})` }
                : {}
            }
          >
            <input
              type="file"
              hidden
              onChange={uploadImageToClient}
              name="image"
            />
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
          <button className="btn submit" type="submit">
            حفظ
          </button>
          <button className="btn cancle">الغاء</button>
        </div>
      </div>
    </form>
  );
};
export default FormStudent;
