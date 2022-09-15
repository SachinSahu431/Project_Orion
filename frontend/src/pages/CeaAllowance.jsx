import { useState } from "react";
import axios from "axios";
import CeaAllowanceApplication from "../components/CeaAllowanceApplication";
import ChooseCard from "../components/ChooseCard";
import CeaPreviousApplications from "../components/CeaPreviousApplications";

export default function CEAAllowance() {
  const [status, setStatus] = useState(0);

  const renderBody = () => {
    if (status == 1) {
      return <CeaAllowanceApplication />;
    } else if (status == 2) {
      return <CeaPreviousApplications />;
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h3 className="p-2">CEA Allowance</h3>
        <div className="row m-0 p-3">
          <h4>Actions</h4>

          <div
            className="col-lg-6 col-12"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setStatus(1);
            }}
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apply for CEA Allowance</h5>
                <p>
                  Fill the form and submit an application for CEA Allowance.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-12"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setStatus(2);
            }}
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Previous Applications</h5>
                <p>View the status of your previous applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {status != 0 ? renderBody() : <></>}
    </>
  );
}
