/*
  Submodule to handle the staff performance.
*/
import React from "react";
import { Link } from "react-router-dom";
export default function Performance() {
  return (
    <div className="d-flex flex-column">
      <div className="row m-0 p-1">
        <h3 className="ps-2 p-1">Staff Performance Management</h3>
        <h4>Actions</h4>
        <div className="col-lg-6 col-12">
          <Link to="/staff_service/performance/create" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">Create a Performance Record</h5>
              <p>
                Fill the necessary details to create a performance record.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-lg-6 col-12">
          <Link to="/staff_service/performance/view" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">View Performance Record</h5>
              <p>View performance record.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
