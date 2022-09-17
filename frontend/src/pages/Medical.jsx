import React from "react";
import { useState } from "react";
import MedicalRecordsSearch from "../components/MedialRecordsSearch";
import MedicalRecordsCreate from "../components/MedicalRecordsCreate";

export default function Medical() {
  const [status, setStatus] = useState(0);

  const renderBody = () => {
    if (status == 1) {
      return <MedicalRecordsCreate />;
    } else if (status == 2) {
      return <MedicalRecordsSearch />;
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h3 className="p-2">Medical Records</h3>
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
                <h5 className="card-title">Create New Medical Record!</h5>
                <p>
                  Fill the necessary details for creating a new medical record.
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
                <h5 className="card-title">View Your Mecial Record</h5>
                <p>View your Medical record</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {status != 0 ? renderBody() : <></>}
    </>
  );
}
