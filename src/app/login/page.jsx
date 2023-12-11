"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import IsLogin from "../components/IsLogin";

const Login = () => {
  const [num, setNum] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setAuth(window.localStorage.getItem("auth"));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/users/login", { num, password })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("auth", "auth");
        router.push("/students");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login text-center">
      <div className="description ps-3 pe-3">
        <div className="img-login">
          <Image
            src="/images/login/image-login.png"
            width={400}
            height={460}
            alt="logo"
          />
        </div>
        <div className="logo">
          <Image
            src="/images/logo/main-logo.png"
            width={151}
            height={151}
            alt="logo"
          />
        </div>
        <div>
          <div className="heading">
            <h1>تسجيل دخول المنصة</h1>
          </div>
          <div className="info">
            <p>
              التطوّر المستمر للتكنولوجيا يعني التطوّر المستمر لتصميم مواقع
              الإنترنت الفارق بين مقدمي خدمات الويب المختلفة هو إنشاء موقع
              إحترافي عالي الجودة يميزك بين منافسيك في المجال وفي أذهاننا نقديم
              أفضل تجربة إستخدام ممكنة لك عبر تمكينك من التحكم في موقعك عبر لوحة
              تحكم، وفي تقديم أفضل تجربة إستخدام لزوارك عبر توفير أسهل وأفضل
              أسلوب تصفح لصفحات الموقع المختلفة.
            </p>
          </div>
        </div>
      </div>
      <div className="col-8 form">
        <div className="logo-form">
          <Image
            src="/images/logo/opacity-logo.png"
            width={280}
            height={280}
            alt="logo"
          />
        </div>
        <div className="header">
          <div className="logo">
            <Image
              src="/images/logo/dark-logo.png"
              width={98}
              height={98}
              alt="logo"
            />
          </div>
        </div>
        <div className="container">
          {auth ? (
            <IsLogin handleSubmit={handleSubmit} />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="heading-form">
                    <h2 className="text-end">تسجيل الدخول</h2>
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="ادخل رقمك القومي"
                    maxLength={14}
                    onChange={(e) => {
                      setNum(e.target.value);
                    }}
                  />
                </div>
                <div className="col-12 position-relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="كلمة السر"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <Image
                    src={`/images/icons/${show ? "show" : "hide"}.png`}
                    width={17}
                    height={17}
                    alt="show and hide password"
                    className="eyes"
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                  <label>نسيت كلمة السر؟</label>
                </div>
                <div className="col-12">
                  <button className="btn w-100" type="submit">
                    دخول
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
