import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CeaAllowanceForm() {
  const baseUrl = process.env.BASE_URL;
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleAccepted = (e) => {
    setTermsAccepted(!termsAccepted);
  };
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
    if (termsAccepted) {
      await axios.post(`/cea/create`, temp);
      console.log("posted");

      try {
        // await axios.post(`/cea/create`, temp);
        // console.log("posted");

        await Swal.fire({
          icon: "success",
          title: "Details Updated",
        });
        window.location.reload();
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: e.response.data.error,
        });
        console.log(e);
      }
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="row m-0 position-sticky top-0 bg-white">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/staff_services/cea_allowance">
                  <span className="btn btn-outline p-0 border-0 link-dark">
                    CEA Allowance
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/staff_service/cea_allowance/applyform">
                  <span className="btn btn-outline p-0 border-0 link-primary">
                    Apply Form
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row m-0 p-1 justify-content-center">
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
                        onChange={handleAccepted}
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
    </>
  );
}
