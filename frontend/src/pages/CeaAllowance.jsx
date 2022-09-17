import { Link } from "react-router-dom";

/*
  Submodule to handle CEA Allowance page.
*/
export default function CEAAllowance() {
  return (
    <div className="d-flex flex-column">
      <div className="row m-0 p-1">
        <h3 className="ps-2 p-1">CEA Allowance</h3>
        <h4>Actions</h4>
        <div className="col-lg-6 col-12">
          <Link to="/staff_service/cea_allowance/applyform" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">Apply for CEA Allowance</h5>
              <p>Fill the form and submit an application for CEA Allowance.</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-6 col-12">
          <Link to="/staff_service/cea_allowance/searchform" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">View Previous Applications</h5>
              <p>View the status of your previous applications.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
