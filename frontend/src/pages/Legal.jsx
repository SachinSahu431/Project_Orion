/*
  Submodule to handle the legal page and Right to Information queries.
*/
import React, { useState } from "react";
import RTIForm from "../components/RTIForm";
import RTIView from "./RTIView";

export default function Legal() {
  const [click, setClick] = useState(0);

  return (
    <div className="d-flex flex-column">
      <div className={click === 0 ? "row m-0 p-1" : "row m-0 p-1 d-none"}>
        <h3 className="ps-2 p-1">Right to Information and Legal Cell</h3>
        <h4>Actions</h4>
        <div className="col-lg-6 col-12">
          <div
            className="card btn text-start"
            onClick={() => {
              setClick(1);
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Submit an RTI Request!</h5>
              <p>
                Fill the necessary details and fill the Text for the RTI
                Request.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div
            className="card btn text-start"
            onClick={() => {
              setClick(2);
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Legal Cell</h5>
              <p>View, Track and Update the status of RTI Requests.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={click !== 0 ? "row m-0 p-1" : "row m-0 p-1 d-none"}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li
              className="breadcrumb-item"
              onClick={() => {
                setClick(0);
              }}
            >
              <span className="btn btn-outline p-0 border-0 link-dark">
                RTI & Legal Cell
              </span>
            </li>
            {click !== 0 && click === 1 ? (
              <li className="breadcrumb-item active" aria-current="page">
                <span className="btn btn-outline p-0 border-0 link-primary">
                  Submit RTI Query
                </span>
              </li>
            ) : null}
            {click !== 0 && click === 2 ? (
              <li className="breadcrumb-item active" aria-current="page">
                <span className="btn btn-outline p-0 border-0 link-primary">
                  Legal Cell
                </span>
              </li>
            ) : null}
          </ol>
        </nav>
      </div>
      <div className="row m-0 p-1 justify-content-center">
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded p-2">
        <div className="d-flex flex-column">
          {click !== 0 ? (
            click === 1 ? (
              <RTIForm />
            ) : (
              <RTIView />
            )
          ) : (
            null
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
