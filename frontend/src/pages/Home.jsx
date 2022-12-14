//Home Directory
/*
  Contains all the links to the sub pages.
*/
import { Link } from "react-router-dom";
const linkStyle = {
  textDecoration: "none",
};
export default function Home() {
  return (
    <div className="d-flex flex-row row gx-1">
      <div className="row">
        <div className="col-lg-12">
          <h2>Hi! Project Orion</h2>
        </div>
        <div className="col-lg-8">
          <div className="p-4">
            <h4>Here are the list of activities that can be performed.</h4>
            <p className="text-muted">
              Ensure you have access before you proceed.
            </p>
            <div className="row gy-3 gx-2">
              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/" style={linkStyle}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title fw-normal">
                        <span class="material-symbols-outlined fs-2 align-text-bottom pe-3">
                          home
                        </span>
                        Home
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/legal" style={linkStyle}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title fw-normal">
                        <span class="material-symbols-outlined fs-2 align-text-bottom pe-3">
                          balance
                        </span>
                        RTI & Legal Cell
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/staff_service" style={linkStyle}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title fw-normal">
                        <span class="material-symbols-outlined fs-2 align-text-bottom pe-3">
                          support_agent
                        </span>
                        Staff Services
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/training" style={linkStyle}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title fw-normal">
                        <span class="material-symbols-outlined fs-2 align-text-bottom pe-3">
                          assignment
                        </span>
                        Training Management
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/property_returns" style={linkStyle}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title fw-normal">
                        <span class="material-symbols-outlined fs-2 align-text-bottom pe-3">
                          real_estate_agent
                        </span>
                        Annual Property Returns
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/visiting" style={linkStyle}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title fw-normal">
                        <span class="material-symbols-outlined fs-2 align-text-bottom pe-3">
                          assignment_ind
                        </span>
                        Guest Faculty Details
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/staff_recruitment" style={linkStyle}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title fw-normal">
                        <span class="material-symbols-outlined fs-2 align-text-bottom pe-3">
                          support_agent
                        </span>
                        Staff Recruitment Portal
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Link to="/faculty_recruitment" style={linkStyle}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title fw-normal">
                        <span class="material-symbols-outlined fs-2 align-text-bottom pe-3">
                          support_agent
                        </span>
                        Faculty Recruitment Portal
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* To Be Done */}
        {/* <div className="col-lg-4">
          <div className="d-flex flex-column w-100">
            <div className="col-12">
              <div className="p-4">
                <h4>Notifications</h4>
                <p className="text-muted">
                  Ensure you have access before you proceed.
                </p>
                <div className="list-group">
                  <div className="border rounded shadow-sm p-2">
                    <div className="d-flex w-100 justify-content-between p-2">
                      <h6 className="mb-1">Update your profile!</h6>
                    </div>
                    <p className="mb-1 px-2">
                      Please complete your profile before using the ERP system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
