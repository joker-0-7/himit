import Image from "next/image";
const FacultyDepartments = () => {
  return (
    <div className="faculty-departments">
      <div className="row g-3">
        <div className="col-lg-6 col-sm-12 d-flex">
          <div className="image ms-3">
            <Image
              src="/images/students/student.png"
              width={90}
              height={90}
              alt="doc"
            />
          </div>
          <div className="detils">
            <div className="name">
              <h5>احمد ماهر احمد ابراهيم شعيب</h5>
            </div>
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
      </div>
    </div>
  );
};
export default FacultyDepartments;
