import Image from "next/image";
const IsLogin = ({ handleSubmit }) => {
  const deleteUserFormStorage = () => {
    window.localStorage.removeItem("auth");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="heading-form">
            <h2 className="text-end">تسجيل الدخول</h2>
          </div>
        </div>
        <label className="w-100 text-end pb-4">من فضلك اختار حسابك</label>
        <div className="col-12 position-relative hello-user">
          <span className="user-img">
            <Image
              src="/images/home/user-img.png"
              width={66}
              height={66}
              alt="user img"
            />
          </span>
          <div className="hello text-end">
            <h2>
              <span className="name">أحمد, </span> اهلا بك
            </h2>
          </div>
          <span className="del text-danger" onClick={deleteUserFormStorage}>
            {" "}
            حذف{" "}
          </span>
        </div>
        <div className="col-12">
          <button className="btn w-100" type="submit">
            دخول
          </button>
        </div>
      </div>
    </form>
  );
};
export default IsLogin;
