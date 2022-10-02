/*
  Submodule to handle reembuirsement requests.
*/
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import { storage } from "../storage/base";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DatePicker from "react-date-picker";
import Swal from "sweetalert2";

import moment from "moment";

export default function PaymentForm() {
  const [dob, setDob] = useState();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [performanceRecord, setPerformanceRecord] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    jobKnowledge: "",
    workQuality: "",
    workQuantity: "",
    reliability: "",
    initiative: "",
    creativity: "",
    judgement: "",
    cooperation: "",
    socialSkills: "",
    decisionMaking: "",
    overallRating: "",
    otherInfo: "",
  });

  // const [url, setUrl] = useState(null);
  const handleAccepted = (e) => {
    setTermsAccepted(!termsAccepted);
  };
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPerformanceRecord({ ...performanceRecord, [name]: value });
  };

  const handleSubmit = async () => {
    let currentRecord = performanceRecord;
    currentRecord.dateOfBirth = moment(dob).format("DD/MM/YYYY");

    if (termsAccepted) {
      await axios.post(`/performance/create`, currentRecord);
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
                <Link to="/staff_service/performance/">
                  <span className="btn btn-outline p-0 border-0 link-dark">
                    Staff Performance Management
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/staff_service/performance/create">
                  <span className="btn btn-outline p-0 border-0 link-primary">
                    Create Record
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex flex-column">
          <div className="row m-0 justify-content-center">
            <div className="col-lg-10 col-md-10 col-12 p-2">
              <div className="d-flex flex-column">
                <h4 className="text-center mb-3">Create Performance Record</h4>
                <form class="needs-validation" novalidate>
                  <div class="alert alert-danger d-none">
                    Please review the problems below:
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleInputName"
                      class="col-sm-3 col-form-label"
                    >
                      Name
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Your name"
                        value={performanceRecord.name}
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
                    <label
                      for="exampleInputEmail"
                      class="col-sm-3 col-form-label"
                    >
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
                        value={performanceRecord.email}
                        onChange={handleInputs}
                        required
                      />
                      <div class="invalid-feedback">Email can't be blank</div>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleInputName"
                      class="col-sm-3 col-form-label"
                    >
                      Phone
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Your Phone number"
                        name="phone"
                        value={performanceRecord.phone}
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

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Job Knowledge
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="jobKnowledge"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jobKnowledge"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jobKnowledge"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jobKnowledge"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jobKnowledge"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Work Quality
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="workQuality"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="workQuality"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="workQuality"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="workQuality"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="workQuality"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Work Quantity
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="workQuantity"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="workQuantity"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="workQuantity"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="workQuantity"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="workQuantity"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Reliability
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="reliability"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="reliability"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="reliability"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="reliability"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="reliability"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Initiative
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="initiative"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="initiative"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="initiative"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="initiative"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="initiative"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Creativity
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="creativity"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="creativity"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="creativity"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="creativity"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="creativity"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Judgement
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="judgement"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="judgement"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="judgement"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="judgement"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="judgement"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Cooperation
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="cooperation"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="cooperation"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="cooperation"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="cooperation"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="cooperation"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Social Skills
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="socialSkills"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="socialSkills"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="socialSkills"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="socialSkills"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="socialSkills"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Decision Making
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="decisionMaking"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="decisionMaking"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="decisionMaking"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="decisionMaking"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="decisionMaking"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label pt-0">
                      Overall Rating
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="exampleInlineRadio1"
                          name="overallRating"
                          value="1"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio1"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="overallRating"
                          value="2"
                          id="exampleInlineRadio2"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio2"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="overallRating"
                          value="3"
                          id="exampleInlineRadio3"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio3"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="overallRating"
                          value="4"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          4
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="overallRating"
                          value="5"
                          id="exampleInlineRadio4"
                          onChange={handleInputs}
                          required
                        />
                        <label
                          className="form-check-label"
                          for="exampleInlineRadio4"
                        >
                          5
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleInputName"
                      class="col-sm-3 col-form-label"
                    >
                      Other Info
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        name="otherInfo"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Other Info"
                        value={performanceRecord.otherInfo}
                        onChange={handleInputs}
                        required
                      />
                      <div class="invalid-feedback">Info can't be blank</div>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="form-text">
                        Enter any other related details or comments.
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-sm-9 offset-sm-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="exampleCheckTerms"
                          onChange={handleAccepted}
                          required
                        />
                        <label class="form-check-label" for="exampleCheckTerms">
                          Review and submit?
                        </label>
                        <div class="invalid-feedback">
                          Terms must be accepted
                        </div>
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
                        Submit
                      </button>
                      <button
                        type="reset"
                        class="btn btn-outline-secondary m-1"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
