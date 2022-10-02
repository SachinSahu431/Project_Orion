import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import Swal from "sweetalert2";

import moment from "moment";
export default function ServiceRecordsCreate() {
  const [dob, setDob] = useState();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleAccepted = (e) => {
    setTermsAccepted(!termsAccepted);
  };
  const [serviceRecord, setServiceRecord] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
  });

  const [eServiceRecord, setEServiceRecord] = useState({
    record: "",
    jobDescription: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setServiceRecord({ ...serviceRecord, [name]: value });
  };

  const handleInputsHistory = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setEServiceRecord({ ...eServiceRecord, [name]: value });
  };

  const handleSubmit = async () => {
    let currentRecord = serviceRecord;
    currentRecord.dateOfBirth = moment(dob).format("DD/MM/YYYY");
    currentRecord.eServiceRecord = [eServiceRecord];

    if (termsAccepted) {
      await axios.post(`/service/create`, currentRecord);
      console.log("posted");
      await Swal.fire({
        icon: "success",
        title: "Details Updated",
      });
      window.location.reload();
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="row m-0 p-1 position-sticky top-0 bg-white">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/staff_service/service_records">
                  <span className="btn btn-outline p-0 border-0 link-dark">
                    Service Records
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/staff_service/service_records/create">
                  <span className="btn btn-outline p-0 border-0 link-primary">
                    Create or Append Record
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row m-0 p-1 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
            <div className="d-flex flex-column">
              <h4 className="text-center mb-3">
                Create Employee Service Record
              </h4>
              <h5 className="text-start">Details of Employee</h5>
              <>
                <form className="needs-validation" novalidate>
                  <div className="alert alert-danger d-none">
                    Please review the problems below:
                  </div>

                  <div className="row mb-3">
                    <label for="sr-name" className="col-sm-3 col-form-label">
                      Employee Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="sr-name"
                        placeholder="Your name"
                        value={serviceRecord.name}
                        onChange={handleInputs}
                        required
                      />
                      <div className="invalid-feedback">
                        Name can't be blank
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                      <div className="form-text">
                        Enter Name as on official documents
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label for="sr-email" className="col-sm-3 col-form-label">
                      Email Address
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="sr-email"
                        placeholder="Enter your email address"
                        autocomplete="email"
                        value={serviceRecord.email}
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
                    <label for="sr-phone" className="col-sm-3 col-form-label">
                      Mobile Number
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="sr-phone"
                        placeholder="Your Phone number"
                        name="phone"
                        value={serviceRecord.phone}
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
                    <label className="col-sm-3 col-form-label pt-0">
                      Gender
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="gender"
                          value="Male"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="exampleInlineRadio2"
                          value="Female"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          value="Other"
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          Other
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="exampleInlineRadio4"
                          value="Prefer not to say"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          Prefer not to say
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label">DOB</label>
                    <div className="col-sm-9">
                      <DatePicker
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayPlaceholder="DD"
                        monthPlaceholder="MM"
                        yearPlaceholder="YYYY"
                        dayAriaLabel="Day"
                        monthAriaLabel="Month"
                        onChange={setDob}
                        value={dob}
                        nativeInputAriaLabel="Date"
                        yearAriaLabel="Year"
                        format="dd-MM-y"
                        maxDate={new Date()}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                      <div className="form-text">Format: Day Month Year</div>
                    </div>
                  </div>

                  <div>
                    <div className="row m-0">
                      <div className="col-md-12 m-0 p-0">
                        <h5 className="text-start">Record of the employee</h5>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="sr-record"
                        className="col-sm-3 col-form-label"
                      >
                        Record Entry
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="sr-record"
                          placeholder="Record history"
                          name="record"
                          value={eServiceRecord.record}
                          onChange={handleInputsHistory}
                          required
                        />
                        <div className="invalid-feedback">
                          Name can't be blank
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="sr-job" className="col-sm-3 col-form-label">
                        Job Description
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="sr-job"
                          placeholder="Job Description of the employee"
                          name="jobDescription"
                          value={eServiceRecord.jobDescription}
                          onChange={handleInputsHistory}
                          required
                        />
                        <div className="invalid-feedback">
                          Name can't be blank
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-9 offset-sm-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="sr-terms"
                          onChange={handleAccepted}
                          required
                        />
                        <label className="form-check-label" for="sr-terms">
                          Review and submit?
                        </label>
                        <div className="invalid-feedback">
                          Terms must be accepted
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="form-text">
                          Please review again, no changes possible after this
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-0">
                    <div className="col-sm-9 offset-sm-3 text-end">
                      <button
                        className="btn btn-primary me-2"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
