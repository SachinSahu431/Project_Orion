/*
  Submodule to handle medical records
*/
import React from "react";
import { Link } from "react-router-dom";
export default function Medical() {
  return (
    <div className="d-flex flex-column">
      <div className="row m-0 p-1">
        <h3 className="ps-2 p-1">Medical Records</h3>
        <h4>Actions</h4>
        <div className="col-lg-6 col-12">
          <Link to="/staff_service/medical/create" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">Create a Medical Record</h5>
              <p>
                Fill the necessary details to create a medical record
              </p>
            </div>
          </Link>
        </div>
        <div className="col-lg-6 col-12">
          <Link to="/staff_service/medical/view" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">View Medical Record</h5>
              <p>View your medical record.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
