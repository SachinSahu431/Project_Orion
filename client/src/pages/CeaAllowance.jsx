import { useState } from "react";
import axios from "axios";

export default function CEAAllowance() {
  const [ceaRecord, setCeaRecord] = useState({
    name: "",
    email: "",
    phone: "",
    childName1: "",
    monthlyCeaDemanded1: "",
    numberOfMonthsDemanded1: "",
    childName2: "",
    monthlyCeaDemanded2: "",
    numberOfMonthsDemanded2: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCeaRecord({ ...ceaRecord, [name]: value });
  };

  const handleSubmit = async () => {
    let temp = ceaRecord;

    await axios.post(`http://localhost:5000/api/cea/create`, temp);

    console.log("posted");
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h3 className="p-2">CEA Allowance</h3>
        <div className="row m-0 p-3">
          <h4>Actions</h4>
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apply for CEA Allowance</h5>
                <p>
                  Fill the form and submit an application for CEA Allowance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Previous Applications</h5>
                <p>View the status of your previous applications.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-10 col-md-10 col-12 rounded pb-3">
            <div className="d-flex flex-column">
              <h4 className="text-center mb-3">
                CEA Allowance Application Form
              </h4>
              <form class="needs-validation" novalidate>
                <div class="alert alert-danger d-none">
                  Please review the problems below:
                </div>

                <div class="row mb-3">
                  <label for="cea-name" class="col-sm-3 col-form-label">
                    Name
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="cea-name"
                      placeholder="Your name"
                      value={ceaRecord.name}
                      onChange={handleInputs}
                      required
                    />
                    <div class="invalid-feedback">Name can't be blank</div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">
                      Enter Name as on official documents
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="cea-email" class="col-sm-3 col-form-label">
                    Email Address
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="cea-email"
                      placeholder="Enter your email address"
                      autocomplete="email"
                      value={ceaRecord.email}
                      onChange={handleInputs}
                      required
                    />
                    <div class="invalid-feedback">
                      Email address can't be blank
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="cea-phone-number" class="col-sm-3 col-form-label">
                    Mobile Number
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      id="cea-phone-number"
                      placeholder="Your Phone number"
                      value={ceaRecord.phone}
                      onChange={handleInputs}
                      required
                    />
                    <div class="invalid-feedback">
                      Phone Number can't be blank
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">
                      Put country code before your phone number
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label
                    for="cea-first-child-name"
                    class="col-sm-3 col-form-label"
                  >
                    First Child Name
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      name="childName1"
                      class="form-control"
                      id="cea-first-child-name"
                      placeholder="First Child Name"
                      value={ceaRecord.childName1}
                      onChange={handleInputs}
                      required
                    />
                    <div class="invalid-feedback">
                      Child Name can't be blank
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">
                      Enter Child Name as on official documents.
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label
                    for="cea-monthlyCeaDemanded1"
                    class="col-sm-3 col-form-label"
                  >
                    Monthly CEA demanded (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      name="monthlyCeaDemanded1"
                      class="form-control"
                      id="cea-monthlyCeaDemanded1"
                      placeholder="Amount in rupees (₹)"
                      value={ceaRecord.monthlyCeaDemanded1}
                      onChange={handleInputs}
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="cea-noOfMonths" class="col-sm-3 col-form-label">
                    Number of Months Demanded
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      name="numberOfMonthsDemanded1"
                      class="form-control"
                      id="cea-noOfMonths"
                      placeholder="Number of Months"
                      value={ceaRecord.numberOfMonthsDemanded1}
                      onChange={handleInputs}
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div class="row mb-3">
                  <label
                    for="cea-second-child-name"
                    class="col-sm-3 col-form-label"
                  >
                    Second Child Name
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      name="childName2"
                      class="form-control"
                      id="cea-second-child-name"
                      placeholder="Second Child Name"
                      value={ceaRecord.childName2}
                      onChange={handleInputs}
                    />
                    <div class="invalid-feedback">Name can't be blank</div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">
                      Enter Name as on official documents
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label
                    for="cea-monthlyCeaDemanded2"
                    class="col-sm-3 col-form-label"
                  >
                    Monthly CEA demanded (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      name="monthlyCeaDemanded2"
                      class="form-control"
                      id="cea-monthlyCeaDemanded2"
                      placeholder="Amount in rupees (₹)"
                      value={ceaRecord.monthlyCeaDemanded2}
                      onChange={handleInputs}
                    />
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="cea-noOfMonths2" class="col-sm-3 col-form-label">
                    Number of Months Demanded
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      name="numberOfMonthsDemanded2"
                      class="form-control"
                      id="cea-noOfMonths2"
                      placeholder="Number of Months"
                      value={ceaRecord.numberOfMonthsDemanded2}
                      onChange={handleInputs}
                    />
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-sm-9 offset-sm-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cea-terms"
                        required
                      />
                      <label class="form-check-label" for="cea-terms">
                        Review and submit?
                      </label>
                      <div class="invalid-feedback">Terms must be accepted</div>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="form-text">
                        Please review again, no changes possible after this
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb-0 text-end">
                  <div class="col-sm-9 offset-sm-3">
                    <button
                      type="submit"
                      class="btn btn-primary m-1"
                      onClick={handleSubmit}
                    >
                      Apply!
                    </button>
                    <button type="reset" class="btn btn-outline-secondary m-1">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
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
}
