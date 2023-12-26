import Header from "../components/Headr";
import Nav from "../components/Nav";

const MilitaryEducation = () => {
  return (
    <div className="military-education">
      <div className="row">
        <div className="col-3">
          <Nav />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <Header />
                <div className="main-page">
                  <div className="main-heading">
                    <h1>التربية العسكرية</h1>
                  </div>
                  <div className="form">
                    <form></form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MilitaryEducation;
