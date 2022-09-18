import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ServiceRecordsCreate() {
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
    let temp = serviceRecord;
    temp.eServiceRecord = [eServiceRecord];
    temp.dateOfBirth = "04092022";
    temp.gender = "male";

    await axios.post(`http://localhost:5000/api/service/create`, temp);

    console.log("posted");
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
                          name="sr-male"
                          id="sr-male"
                          value="option1"
                          required
                        />
                        <label className="form-check-label" for="sr-male">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sr-female"
                          id="sr-female"
                          value="option2"
                          required
                        />
                        <label className="form-check-label" for="sr-female">
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sr-other"
                          id="sr-other"
                          value="option3"
                          required
                        />
                        <label className="form-check-label" for="sr-other">
                          Other
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sr-no"
                          id="sr-no"
                          value="option4"
                          required
                        />
                        <label className="form-check-label" for="sr-no">
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
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <select
                          id="sr-year"
                          className="form-select me-1"
                          required
                        >
                          <option></option>
                          <option value="1970">1970</option>
                          <option value="1971">1971</option>
                          <option value="1972">1972</option>
                          <option value="1973">1973</option>
                          <option value="1974">1974</option>
                          <option value="1975">1975</option>
                          <option value="1980">1980</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                        </select>

                        <select
                          id="sr-month"
                          className="form-select mx-1"
                          required
                        >
                          <option></option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>

                        <select
                          id="sr-day"
                          className="form-select ms-1"
                          required
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                      <div className="form-text">Format: Year Month Day</div>
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

          {/* <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
            <div className="d-flex flex-column">
              <h4 className="text-center mb-3">
                Append Employee Service Record
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

                  <div>
                    <div className="row m-0">
                      <div className="col-md-12 m-0 p-0">
                        <h5 className="text-start">Record of the employee</h5>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="sr-record" className="col-sm-3 col-form-label">
                        Record Entry
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="sr-record"
                          placeholder="Record history"
                          name="record"
                          required
                        />
                        <div className="invalid-feedback">Name can't be blank</div>
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
                          required
                        />
                        <div className="invalid-feedback">
                          Job Description can't be blank
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
                      <button className="btn btn-primary me-2">Append</button>
                      <button type="reset" className="btn btn-outline-secondary">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
