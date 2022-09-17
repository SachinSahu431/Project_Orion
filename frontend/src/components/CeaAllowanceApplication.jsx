import { useState } from "react";
import axios from "axios";

const CeaAllowanceApplication = () => {
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
      <div className="row m-0">
        <div className="col-lg-10 col-md-10 col-12 rounded pb-3">
          <div className="d-flex flex-column">
            <h4 className="text-center mb-3">CEA Allowance Application Form</h4>
            <form className="needs-validation" novalidate>
              <div className="alert alert-danger d-none">
                Please review the problems below:
              </div>

              <div className="row mb-3">
                <label for="cea-name" className="col-sm-3 col-form-label">
                  Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="cea-name"
                    placeholder="Your name"
                    value={ceaRecord.name}
                    onChange={handleInputs}
                    required
                  />
                  <div className="invalid-feedback">Name can't be blank</div>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="form-text">
                    Enter Name as on official documents
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label for="cea-email" className="col-sm-3 col-form-label">
                  Email Address
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="cea-email"
                    placeholder="Enter your email address"
                    autocomplete="email"
                    value={ceaRecord.email}
                    onChange={handleInputs}
                    required
                  />
                  <div className="invalid-feedback">
                    Email address can't be blank
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label for="cea-phone-number" className="col-sm-3 col-form-label">
                  Mobile Number
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    id="cea-phone-number"
                    placeholder="Your Phone number"
                    value={ceaRecord.phone}
                    onChange={handleInputs}
                    required
                  />
                  <div className="invalid-feedback">
                    Phone Number can't be blank
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="form-text">
                    Put country code before your phone number
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label
                  for="cea-first-child-name"
                  className="col-sm-3 col-form-label"
                >
                  First Child Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="childName1"
                    className="form-control"
                    id="cea-first-child-name"
                    placeholder="First Child Name"
                    value={ceaRecord.childName1}
                    onChange={handleInputs}
                    required
                  />
                  <div className="invalid-feedback">Child Name can't be blank</div>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="form-text">
                    Enter Child Name as on official documents.
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label
                  for="cea-monthlyCeaDemanded1"
                  className="col-sm-3 col-form-label"
                >
                  Monthly CEA demanded (in ₹)
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    name="monthlyCeaDemanded1"
                    className="form-control"
                    id="cea-monthlyCeaDemanded1"
                    placeholder="Amount in rupees (₹)"
                    value={ceaRecord.monthlyCeaDemanded1}
                    onChange={handleInputs}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid value.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>

              <div className="row mb-3">
                <label for="cea-noOfMonths" className="col-sm-3 col-form-label">
                  Number of Months Demanded
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    name="numberOfMonthsDemanded1"
                    className="form-control"
                    id="cea-noOfMonths"
                    placeholder="Number of Months"
                    value={ceaRecord.numberOfMonthsDemanded1}
                    onChange={handleInputs}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid value.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  for="cea-second-child-name"
                  className="col-sm-3 col-form-label"
                >
                  Second Child Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="childName2"
                    className="form-control"
                    id="cea-second-child-name"
                    placeholder="Second Child Name"
                    value={ceaRecord.childName2}
                    onChange={handleInputs}
                  />
                  <div className="invalid-feedback">Name can't be blank</div>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="form-text">
                    Enter Name as on official documents
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label
                  for="cea-monthlyCeaDemanded2"
                  className="col-sm-3 col-form-label"
                >
                  Monthly CEA demanded (in ₹)
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    name="monthlyCeaDemanded2"
                    className="form-control"
                    id="cea-monthlyCeaDemanded2"
                    placeholder="Amount in rupees (₹)"
                    value={ceaRecord.monthlyCeaDemanded2}
                    onChange={handleInputs}
                  />
                  <div className="invalid-feedback">
                    Please provide a valid value.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>

              <div className="row mb-3">
                <label for="cea-noOfMonths2" className="col-sm-3 col-form-label">
                  Number of Months Demanded
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    name="numberOfMonthsDemanded2"
                    className="form-control"
                    id="cea-noOfMonths2"
                    placeholder="Number of Months"
                    value={ceaRecord.numberOfMonthsDemanded2}
                    onChange={handleInputs}
                  />
                  <div className="invalid-feedback">
                    Please provide a valid value.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-9 offset-sm-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="cea-terms"
                      required
                    />
                    <label className="form-check-label" for="cea-terms">
                      Review and submit?
                    </label>
                    <div className="invalid-feedback">Terms must be accepted</div>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="form-text">
                      Please review again, no changes possible after this
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-0 text-end">
                <div className="col-sm-9 offset-sm-3">
                  <button
                    type="submit"
                    className="btn btn-primary m-1"
                    onClick={handleSubmit}
                  >
                    Apply!
                  </button>
                  <button type="reset" className="btn btn-outline-secondary m-1">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CeaAllowanceApplication;
