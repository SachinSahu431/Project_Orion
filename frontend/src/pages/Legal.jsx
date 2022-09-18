/*
  Submodule to handle the legal page and Right to Information queries.
*/
import React from "react";
import { Link } from "react-router-dom";
export default function Legal() {
  return (
    <div className="d-flex flex-column">
      <div className="row m-0 p-1">
        <h3 className="ps-2 p-1">Right to Information and Legal Cell</h3>
        <h4>Actions</h4>
        <div className="row m-0 gy-2">
        <div className="col-lg-6 col-12">
          <Link to="/legal/rti/create" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">Submit an RTI Request!</h5>
              <p>
                Fill the necessary details and fill the Text for the RTI
                Request.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-lg-6 col-12">
          <Link to="/legal/rti/view" className="card btn text-start">
            <div className="card-body">
              <h5 className="card-title">Legal Cell</h5>
              <p>View, Track and Update the status of RTI Requests.</p>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
