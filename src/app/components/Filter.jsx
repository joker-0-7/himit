const Filter = ({ setSquad, setSection, page }) => {
    return (
        <>
            <div className="section col-4">
                <select className="form-control" onChange={setSection}>
                    <option value="يرجي اختيار الشعبة" selected disabled>
                        يرجي اختيار الشعبة
                    </option>
                    <option value="علوم حاسب">علوم حاسب</option>
                    <option value="نظم ومعلومات">نظم ومعلومات</option>
                    <option value="محاسبة">محاسبة</option>
                    <option value="ادارة اعمال">ادارة اعمال</option>
                </select>
            </div>
            {page !== "four" && (
                <div className="Squad col-4">
                    <select className="form-control" onChange={setSquad}>
                        <option value="يرجي اختيار الفرقة" selected disabled>
                            يرجي اختيار الفرقة
                        </option>
                        <option value="الفرقة الأولي">الفرقة الأولي</option>
                        <option value="الفرقة الثانية">الفرقة الثانية</option>
                        <option value="الفرقة الثالثة">الفرقة الثالثة</option>
                        <option value="الفرقة الرابعة">الفرقة الرابعة</option>
                    </select>
                </div>
            )}
        </>
    );
};
export default Filter;
