import Image from "next/image";
const Header = () => {
    return (
        <div className="header" style={{ height: "200px", width: "100%" }}>
            <Image
                src="/images/logo/dark-logo.png"
                width={73}
                height={73}
                alt="logo"
            />
            <form>
                <div className="search d-flex" style={{ height: "60px" }}>
                    <input type="text" placeholder="بحث" />
                    <span>
                        <Image
                            src="/images/icons/search.png"
                            width={16}
                            height={16}
                            alt="search"
                        />
                    </span>
                </div>
            </form>
        </div>
    );
};
export default Header;
