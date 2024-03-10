import Image from "next/image";
import Link from "next/link";

const DefaultPage = ({ page, props }) => {
    return (
        <div className="default-page">
            <div className="main-heading w-100">
                <h1>{props && props.title} </h1>
            </div>
            <div className="component text-center">
                <div className="img">
                    <Image
                        src="/images/icons/default-page.png"
                        width={72}
                        height={135}
                        alt="Vector"
                    />
                </div>
                <div className="heading">
                    <h2>لم تقم بارسال {props && props.name} بعد!</h2>
                    <p>أرسل {props && props.name} من هنا.</p>
                </div>
                <div className="link">
                    <Link
                        href={props && props.link}
                        className="btn btn-dark p-0"
                        style={{
                            width: "144px",
                            height: "47px",
                            lineHeight: "47px",
                        }}
                    >
                        <span>اضافة {page}</span>
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
    );
};
export default DefaultPage;
