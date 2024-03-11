import DefaultPage from "../components/DefaultPage";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import "./main.css";
const Committees = () => {
    return (
        <div className="committees">
            <Nav />
            <div className="container">
                <Header />
                <DefaultPage
                    page="اللجان"
                    props={{
                        link: "/committees/add-committees",
                        title: "اللجان",
                        name: "لجان",
                    }}
                />
            </div>
        </div>
    );
};
export default Committees;
