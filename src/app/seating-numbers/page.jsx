import Image from "next/image";
import Nav from "../components/Nav";
import "./seating.css";

const SeatingNumbers = () => {
  return (
    <div className="seating-numbers">
      <Nav />
      <div className="container">
        <div className="header">
          <Image
            src="/images/logo/dark-logo.png"
            width={73}
            height={73}
            alt="logo"
          />
        </div>
        <form>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  <select name="squad" className="form-control">
                    <option value="يرجي اختيار الفرقة" selected disabled>
                      يرجي اختيار الفرقة
                    </option>
                    <option value="الفرقة الأولي">الفرقة الأولي</option>
                    <option value="الفرقة الثانية">الفرقة الثانية</option>
                    <option value="الفرقة الثالثة">الفرقة الثالثة</option>
                    <option value="الفرقة الرابعة">الفرقة الرابعة</option>
                  </select>
                </th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <th scope="row">علوم الحاسب</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="من"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الي"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم المجموعة"
                  />
                </td>
              </tr>
              <br />
              <tr>
                <th scope="row">محاسبة</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="من"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الي"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم المجموعة"
                  />
                </td>
              </tr>
              <br />
              <tr>
                <th scope="row">نظم ومعلومات ادارية</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="من"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الي"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم المجموعة"
                  />
                </td>
              </tr>
              <br />
              <tr>
                <th scope="row">ادارة اعمال</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="من"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الي"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم المجموعة"
                  />
                </td>
              </tr>
              <br />
            </tbody>
          </table>
          <button className="btn btn-dark send ms-4" type="submit">
            ارسال
          </button>
          <button className="btn cancle">الغاء</button>
        </form>
        <div className="data">
          <div className="heading w-100">
            <h5 className="text-light text-end ">اجمالي عدد الطلاب</h5>
            <hr className="text-light" />
          </div>
          <div className="counts w-100">
            <div className="count w-100">
              <span className="text-end">علوم الحاسب</span>
              <span className="text-start">3000</span>
            </div>
            <div className="count w-100">
              <span className="text-end">محاسبة</span>
              <span className="text-start">3000</span>
            </div>
            <div className="count w-100">
              <span className="text-end">نظم ومعلومات ادارية</span>
              <span className="text-start">3000</span>
            </div>
            <div className="count w-100">
              <span className="text-end">ادارة اعمال</span>
              <span className="text-start">3000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeatingNumbers;
