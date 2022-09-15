import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ServiceRecordsCreate from "../components/ServiceRecordsCreate";
import ServiceRecordsSearch from "../components/ServiceRecordsSearch";
import { useState } from "react";
import { useEffect } from "react";

export default function Service() {
  const [status, setStatus] = useState(0);

  const renderBody = () => {
    if (status == 1) {
      return <ServiceRecordsCreate />;
    } else if (status == 2) {
      return <ServiceRecordsSearch />;
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h3 className="p-2">Service Records</h3>
        <div className="row m-0 p-3">
          <h4>Actions</h4>

          <div
            className="col-lg-6 col-12"
            onClick={() => {
              setStatus(1);
            }}
            style={{ cursor: "pointer" }}
          >
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
          </div>

          <div
            className="col-lg-6 col-12"
            onClick={() => {
              setStatus(2);
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Your Service Record</h5>
                <p>View your service record</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {status != 0 ? renderBody() : <></>}
    </>
  );
}
