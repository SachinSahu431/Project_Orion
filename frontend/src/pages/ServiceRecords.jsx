import React from "react";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="row m-0 p-1">
          <h3 className="ps-2 p-1">Service Records</h3>
          <h4>Actions</h4>

          <div className="col-lg-6 col-12">
            <Link to="/staff_service/service_records/create" className="card btn text-start">
              <div className="card-body">
                <h5 className="card-title">
                  Create or Append to Service Record
                </h5>
                <p>
                  Fill the necessary details for creating or appending to the
                  service record.
                </p>
              </div>
            </Link>
          </div>

          <div className="col-lg-6 col-12">
            <Link to="/staff_service/service_records/search" className="card btn text-start">
              <div className="card-body">
                <h5 className="card-title">View Your Service Record</h5>
                <p>View Service Record</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
