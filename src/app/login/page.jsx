"use client";
import Image from "next/image";
import "./login.css";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login text-center">
      <div className="row">
        <div className="col-4 description ps-3 pe-3">
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
                إحترافي عالي الجودة يميزك بين منافسيك في المجال وفي أذهاننا
                نقديم أفضل تجربة إستخدام ممكنة لك عبر تمكينك من التحكم في موقعك
                عبر لوحة تحكم، وفي تقديم أفضل تجربة إستخدام لزوارك عبر توفير
                أسهل وأفضل أسلوب تصفح لصفحات الموقع المختلفة.
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
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="heading-form">
                    <h2 className="text-end">تسجيل الدخول</h2>
                  </div>
                </div>
                <div className="col-12">
                  <input type="email" placeholder="ادخل رقمك القومي" />
                </div>
                <div className="col-12 position-relative">
                  <input type="password" placeholder="كلمة السر" />
                  <label>نسيت كلمة السر؟</label>
                </div>
                <div className="col-12">
                  <button className="btn w-100" type="submit">
                    دخول
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
