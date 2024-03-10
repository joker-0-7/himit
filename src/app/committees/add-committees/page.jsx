const { default: Header } = require("../../components/Headr");
const { default: Nav } = require("../../components/Nav");

const AddCommittees = () => {
    return (
        <div className="add-committe">
            <div className="row">
                <div className="col-2">
                    <Nav />
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="col-12">
                                <div className="main-headin">
                                    <h1>اللجان</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddCommittees;
