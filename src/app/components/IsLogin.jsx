import Image from "next/image";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const IsLogin = ({ deleteUserFormStorage }) => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const num = state.user.num;
      const password = state.user.password;
      const login = await axios.post("http://localhost:5000/users/login", {
        num,
        password,
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
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
