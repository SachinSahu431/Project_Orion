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
            <label for="exampleInputEmail" class="col-sm-3 col-form-label">
              Email
            </label>
            <div class="col-sm-9">
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail"
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
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Mobile Number
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Your Phone number"
                name="phone"
                required
              />
              <div class="invalid-feedback">Phone Number can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                name="name"
                class="form-control"
                id="exampleInputName"
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
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label pt-0">Gender</label>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleInlineRadioColor"
                  id="exampleInlineRadio1"
                  value="option1"
                  required
                />
                <label class="form-check-label" for="exampleInlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleInlineRadioColor"
                  id="exampleInlineRadio2"
                  value="option2"
                  required
                />
                <label class="form-check-label" for="exampleInlineRadio2">
                  Female
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleInlineRadioColor"
                  id="exampleInlineRadio3"
                  value="option3"
                  required
                />
                <label class="form-check-label" for="exampleInlineRadio3">
                  Other
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleInlineRadioColor"
                  id="exampleInlineRadio4"
                  value="option4"
                  required
                />
                <label class="form-check-label" for="exampleInlineRadio4">
                  Prefer not to say
                </label>
              </div>
              <div class="invalid-feedback">Please provide a valid value.</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Address
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Address"
                name="address"
                required
              />
              <div class="invalid-feedback">Address can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <h5 className="text-start mt-2">Request Details</h5>
          <div class="row mt-2 mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              RTI Request
            </label>
            <div class="col-sm-9">
              <textarea
                class="form-control"
                id="exampleInputName"
                placeholder="RTI Request"
                name="RTIRequest"
                required
              />
              <div class="invalid-feedback">RTI Request</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleCustomFile" class="col-sm-3 col-form-label">
              Upload Supporting Document
            </label>
            <div class="col-sm-9">
              <input
                type="file"
                class="form-control"
                id="Upload file"
                required
              />
              <div class="invalid-feedback">Please provide a valid value.</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                (PDF,JPG, JPEG, PNG are acceptable formats)
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
                <span className="fw-bold flex-fill">Request ID: #1298332</span>
                <span className="fw-bold ms-auto text-success">●</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Construction Materials used in DB2</h5>
                <p>Status: Processed</p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="card">
              <div className="card-header d-flex">
                <span className="fw-bold flex-fill">Request ID: #1298333</span>
                <span className="fw-bold ms-auto text-primary">●</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Expenditure of Year 2021-2022</h5>
                <p>Status: Queued</p>
              </div>
              
            </div>
          </div>
          <div className="py-2">
            <div className="card">
              <div className="card-header d-flex">
                <span className="fw-bold flex-fill">Request ID: #1298334</span>
                <span className="fw-bold ms-auto text-danger">●</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Personal details of employee.</h5>
                <p>Status: Rejected</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
