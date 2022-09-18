/*
  Submodule to handle payment functionalities.
*/
import React from "react";
import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <div className="d-flex flex-column">
      <div className="row m-0 p-1">
        <h3 className="ps-2 p-1">Staff Payment Management</h3>
        <h4>Actions</h4>
        <div className="col-lg-6 col-12">
          <Link to="/staff_service/payment/applyform" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">Apply for Reembuirsements</h5>
              <p>
                Fill the necessary details and upload the documents.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-lg-6 col-12">
          <Link to="/staff_service/payment/view" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">View Applications</h5>
              <p>View the applications</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
