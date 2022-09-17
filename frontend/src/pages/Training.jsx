import React from "react";
import { useState } from "react";
import TrainingRecordsCreate from "../components/TrainingRecordsCreate";
import TrainingRecordsSearch from "../components/TrainingRecordsSearch";

export default function Training() {
  const [status, setStatus] = useState(0);

  const renderBody = () => {
    if (status === 1) {
      return <TrainingRecordsCreate />;
    } else if (status === 2) {
      return <TrainingRecordsSearch />;
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h3 className="p-2">Training Records</h3>
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
                <h5 className="card-title">Create New Training Record!</h5>
                <p>
                  Fill the necessary details for creating a new training record.
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
                <h5 className="card-title">View Your Training Record</h5>
                <p>View your Training record</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {status !== 0 ? renderBody() : <></>}
    </>
  );
}
