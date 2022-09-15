const CeaPreviousApplications = () => {
  return (
    <>
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded p-2">
        <div className="d-flex flex-column">
          <div className="py-2">
            <div className="card">
              <div className="card-header d-flex">
                <span className="fw-bold flex-fill">
                  Request ID: <span>(MongoID of Request)</span>
                </span>
                <span className="fw-bold ms-auto text-success">●</span>
              </div>
              <div className="card-body">
                <div className="row m-0">
                  <h5 className="mt-1 p-1">First Child Details</h5>
                  <div className="py-3">
                    <p>
                      <span className="fw-bold">First Child Name: </span>
                      <span className="ps-1">abc</span>
                    </p>
                    <p>
                      <span className="fw-bold">
                        Monthly CEA Demanded(in ₹):{" "}
                      </span>
                      <span className="ps-1">10000</span>
                    </p>
                    <p>
                      <span className="fw-bold">
                        Number of Months Demanded:{" "}
                      </span>
                      <span className="ps-1">12</span>
                    </p>
                  </div>
                  <h5 className="mt-1 ps-1">
                    Second Child Details (Render Conditionally)
                  </h5>
                  <div className="py-3">
                    <p>
                      <span className="fw-bold">Second Child Name: </span>
                      <span className="ps-1">abc</span>
                    </p>
                    <p>
                      <span className="fw-bold">
                        Monthly CEA Demanded(in ₹):{" "}
                      </span>
                      <span className="ps-1">10000</span>
                    </p>
                    <p>
                      <span className="fw-bold">
                        Number of Months Demanded:{" "}
                      </span>
                      <span className="ps-1">12</span>
                    </p>
                  </div>
                  <p className="ps-1">
                    <span className="fw-bold">Application Status:</span>
                    <span>
                      <span className="text-success p-1">Processed</span>
                    </span>
                    <span>
                      <span className="text-primary p-1">Queued</span>
                    </span>
                    <span>
                      <span className="text-danger p-1">
                        Rejected(Bro u are asking for too much)
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="card">
              <div className="card-header d-flex">
                <span className="fw-bold flex-fill">
                  Request ID: <span>(MongoID of Request)</span>
                </span>
                <span className="fw-bold ms-auto text-success">●</span>
              </div>
              <div className="card-body">
                <div className="row m-0">
                  <h5 className="mt-1 p-1">First Child Details</h5>
                  <div className="py-3">
                    <p>
                      <span className="fw-bold">First Child Name: </span>
                      <span className="ps-1">abc</span>
                    </p>
                    <p>
                      <span className="fw-bold">
                        Monthly CEA Demanded(in ₹):{" "}
                      </span>
                      <span className="ps-1">10000</span>
                    </p>
                    <p>
                      <span className="fw-bold">
                        Number of Months Demanded:{" "}
                      </span>
                      <span className="ps-1">12</span>
                    </p>
                  </div>
                  <h5 className="mt-1 ps-1">
                    Second Child Details (Render Conditionally)
                  </h5>
                  <div className="py-3">
                    <p>
                      <span className="fw-bold">Second Child Name: </span>
                      <span className="ps-1">abc</span>
                    </p>
                    <p>
                      <span className="fw-bold">
                        Monthly CEA Demanded(in ₹):{" "}
                      </span>
                      <span className="ps-1">10000</span>
                    </p>
                    <p>
                      <span className="fw-bold">
                        Number of Months Demanded:{" "}
                      </span>
                      <span className="ps-1">12</span>
                    </p>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="accept-reject"
                    />
                    <label className="form-check-label" for="accept-reject">
                      Accept or Reject Application
                    </label>
                  </div>
                  <div class="row mb-0 mt-2">
                    <div class="col-sm-9 offset-sm-3 text-end">
                      <button class="btn btn-primary me-2">
                        Submit Response
                      </button>
                      <button type="reset" class="btn btn-outline-secondary">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CeaPreviousApplications;
