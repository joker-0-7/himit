const DataCount = ({ count }) => {
    return (
        <div className="data">
            <div className="heading w-100">
                <h5 className="text-light text-end ">اجمالي عدد الطلاب</h5>
                <hr className="text-light" />
            </div>
            <div className="counts w-100">
                <div className="count w-100">
                    <span className="text-end">علوم الحاسب</span>
                    <span className="text-start">
                        {count["علوم حاسب"] ? count["علوم حاسب"].length : 0}
                    </span>
                </div>
                <div className="count w-100">
                    <span className="text-end">محاسبة</span>
                    <span className="text-start">
                        {count["محاسبة"] ? count["محاسبة"].length : 0}
                    </span>
                </div>
                <div className="count w-100">
                    <span className="text-end">نظم ومعلومات ادارية</span>
                    <span className="text-start">
                        {count["نظم ومعلومات"]
                            ? count["نظم ومعلومات"].length
                            : 0}
                    </span>
                </div>
                <div className="count w-100">
                    <span className="text-end">ادارة اعمال</span>
                    <span className="text-start">
                        {count["ادارة اعمال"] ? count["ادارة اعمال"].length : 0}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default DataCount;
