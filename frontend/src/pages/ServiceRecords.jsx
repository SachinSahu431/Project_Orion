import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Service() {
  return (
    <>
      <div className="d-flex flex-column">
        <h3 className="p-2">Service Records</h3>
        <div className="row m-0 p-3">
          <h4>Actions</h4>
          <div className="col-lg-6 col-12">
            <Link to="/staff_service/service_records/create" style={{ color: "black", textDecoration: "none" }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Create or Append to Service Record!
                  </h5>
                  <p>
                    Fill the necessary details for creating or appending to the
                    service record.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-6 col-12">
            <Link to="/staff_service/service_records/search" style={{ color: "black", textDecoration: "none" }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View Your Service Record</h5>
                  <p>View your service record</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
