import Image from "next/image";
import Link from "next/link";

const DefaultPage = ({ page }) => {
  return (
    <div className="default-page">
      <div className="main-heading w-100">
        {page === "اللجان" ? <h1>اللجان</h1> : <h1>ارقام جلوس الطلاب</h1>}
      </div>
      <div className="component text-center">
        <div className="img">
          <Image
            src="/images/icons/default-page.png"
            width={72}
            height={135}
            alt="Vector"
          />
          <div className="heading">
            {page === "اللجان" ? (
              <>
                <h2>لم تقم بارسال اماكن اللجان بعد!</h2>
                <p>أرسل اماكن اللجان من هنا.</p>
              </>
            ) : (
              <>
                <h2>لم تقم بارسال ارقام الجلوس بعد!</h2>
                <p>أرسل ارقام الجلوس من هنا.</p>
              </>
            )}
          </div>
          <div className="link">
            <Link
              href="/"
              className="btn btn-dark p-0"
              style={{ width: "144px", height: "47px", lineHeight: "47px" }}
            >
              <span>اضافة اللجان</span>
              <span>
                <Image
                  src="/images/icons/plus.png"
                  width={25}
                  height={25}
                  alt="add"
                  className="pe-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefaultPage;
