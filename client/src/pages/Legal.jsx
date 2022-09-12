export default function Legal() {
  return (
    <div className="d-flex flex-column">
      <h3>Legal Cell</h3>
      <div className="row m-0 p-3">
        <h4>Actions</h4>
        <div className="col-lg-6 col-12">
          <div className="card">
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
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Legal Cell</h5>
              <p>View, Track and Update the status of RTI Requests.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
        <div className="d-flex flex-column">
          <h4 className="text-center mb-3">Submit an RTI Request Form</h4>
          <h5 className="text-start">Personal Details of the Applicant</h5>
          <div class="row mt-2 mb-3">
            <label for="rti-email" className="col-sm-3 col-form-label">
              Email
            </label>
            <div class="col-sm-9">
              <input
                type="email"
                name="email"
                class="form-control"
                id="rti-email"
                placeholder="Enter email"
                autocomplete="email"
                required
              />
              <div class="invalid-feedback">Email can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                All Official communication will be done through this email
                address.
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="rti-phone" class="col-sm-3 col-form-label">
              Mobile Number
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="rti-phone"
                placeholder="Your Phone number"
                name="phone"
                required
              />
              <div class="invalid-feedback">Phone Number can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="rti-name" class="col-sm-3 col-form-label">
              Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                name="name"
                class="form-control"
                id="rti-name"
                placeholder="Your name"
                required
              />
              <div class="invalid-feedback">Name can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                Enter your full name as in official document.
              </div>
            </div>
          </div>
          <h5 className="text-start">Right To Information Request Details</h5>
          <div class="row mt-2 mb-3">
            <label for="rti-query" class="col-sm-3 col-form-label">
              RTI Query
            </label>
            <div class="col-sm-9">
              <textarea
                class="form-control"
                id="rti-query"
                placeholder="RTI Request"
                name="RTIRequest"
                required
              />
              <div class="invalid-feedback">RTI Request</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="rti-query-type" class="col-sm-3 col-form-label">
              Query Type
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                name="name"
                class="form-control"
                id="rti-query-type"
                placeholder="Query Type"
                required
              />
              <div class="invalid-feedback">Query Type can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                Query type can be Administration, Medical, Financial etc..
              </div>
            </div>
          </div>
          <div class="row mb-0">
            <div class="col-sm-9 offset-sm-3 text-end">
              <button class="btn btn-primary me-2">Submit</button>
              <button type="reset" class="btn btn-outline-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
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
                  <p>
                    <span className="fw-bold">Applicant Name: </span>
                    <span className="ps-1">Siddhartha G</span>
                  </p>
                  <p>
                    <span className="fw-bold">Applicant Email: </span>
                    <span className="ps-1">cs20b040@iittp.ac.in</span>
                  </p>
                  <p>
                    <span className="fw-bold">Applicant Phone Number: </span>
                    <span className="ps-1">987654321</span>
                  </p>
                  <div className="m-2 border p-2 rounded">
                    <h5 className="fw-bold mb-2">RTI Request Details:</h5>
                    <p className="mb-2">
                      <span className="fw-bold">Query Type: </span>
                      <span className="ps-1">Medical</span>
                    </p>
                    <p>
                      <span className="fw-bold pe-2">RTI Request:</span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus faucibus ut sapien ut posuere. Praesent eleifend
                      nisi erat, vitae faucibus sem pharetra ut. Praesent tempus
                      metus dolor, non dapibus ipsum maximus vel. Praesent
                      blandit aliquam lorem eu condimentum. Suspendisse dictum
                      sed elit vel faucibus. Nulla venenatis eros ac nunc
                      vehicula, eu finibus felis eleifend. Cras suscipit leo at
                      interdum bibendum. Phasellus urna massa, rutrum non purus
                      vitae, aliquet pretium ante. Sed malesuada velit quis
                      augue mattis varius. Quisque in arcu a metus imperdiet
                      sodales. Aliquam nec facilisis quam. Suspendisse potenti.
                    </p>
                  </div>
                  <p>
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
                  <p>
                    <span className="fw-bold">Applicant Name: </span>
                    <span className="ps-1">Siddhartha G</span>
                  </p>
                  <p>
                    <span className="fw-bold">Applicant Email: </span>
                    <span className="ps-1">cs20b040@iittp.ac.in</span>
                  </p>
                  <p>
                    <span className="fw-bold">Applicant Phone Number: </span>
                    <span className="ps-1">987654321</span>
                  </p>
                  <div className="m-2 border p-2 rounded">
                    <h5 className="fw-bold mb-2">RTI Request Details:</h5>
                    <p className="mb-2">
                      <span className="fw-bold">Query Type: </span>
                      <span className="ps-1">Medical</span>
                    </p>
                    <p>
                      <span className="fw-bold pe-2">RTI Request:</span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus faucibus ut sapien ut posuere. Praesent eleifend
                      nisi erat, vitae faucibus sem pharetra ut. Praesent tempus
                      metus dolor, non dapibus ipsum maximus vel. Praesent
                      blandit aliquam lorem eu condimentum. Suspendisse dictum
                      sed elit vel faucibus. Nulla venenatis eros ac nunc
                      vehicula, eu finibus felis eleifend. Cras suscipit leo at
                      interdum bibendum. Phasellus urna massa, rutrum non purus
                      vitae, aliquet pretium ante. Sed malesuada velit quis
                      augue mattis varius. Quisque in arcu a metus imperdiet
                      sodales. Aliquam nec facilisis quam. Suspendisse potenti.
                    </p>
                  </div>
                </div>
                <div class="row m-1">
                  <label
                    for="rti-query-response"
                    class="col-sm-3 col-form-label fw-bold"
                  >
                    Query Type
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="rti-query-response"
                      placeholder="Query Response"
                      required
                    />
                    <div class="invalid-feedback">
                      Query Response can't be blank
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div class="row mb-0 mt-2">
                  <div class="col-sm-9 offset-sm-3 text-end">
                    <button class="btn btn-primary me-2">Approve Response</button>
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
  );
}
