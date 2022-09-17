import { useState } from "react";
import axios from "axios";
import { storage } from "../storage/base";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function MedicalRecordsCreate() {
  const [medicalRecord, setMedicalRecord] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
  });

  const [medicalHistory, setMedicalHistory] = useState({
    diagnosis: "",
    referredPhysician: "",
    referredClinic: "",
    date: "",
    severity: "",
    otherInfo: "",
    paymentAmount: "",
    medicalFile: "",
  });

  const [url, setUrl] = useState(null);

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setMedicalRecord({ ...medicalRecord, [name]: value });
  };

  const handleInputsHistory = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setMedicalHistory({ ...medicalHistory, [name]: value });
  };

  const handleChangeInputFile = (e) => {
    const file = e.target.files[0];
    let newFile = "Medical/" + file.name;
    const fileRef = ref(storage, newFile);

    uploadBytes(fileRef, file).then((snapshot) => {
      console.log("Uploaded a file");
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setUrl(url);
      });
    });
  };

  const handleSubmit = async () => {
    let currentRecord = medicalRecord;
    currentRecord.medicalHistory = [medicalHistory];
    currentRecord.dateOfBirth = "04092022";
    currentRecord.gender = "male";
    currentRecord.medicalHistory[0].medicalFile = url;

    try {
      await axios.post(
        `http://localhost:5000/api/medical/create`,
        currentRecord
      );

      console.log("posted");

      window.alert("Your record is updated");
      window.location.reload();
    } catch (e) {
      window.alert("Error try again later");
      console.log(e);
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="p-2">Medical Records</h1>
        <div className="row m-0 p-2 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
            <div className="d-flex flex-column">
              <h2 className="text-center">Details</h2>
              <>
                {/* <form className="needs-validation" novalidate> */}
                <div className="alert alert-danger d-none">
                  Please review the problems below:
                </div>

                <div className="row mb-3">
                  <label for="exampleInputName" className="col-sm-3 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Your name"
                      value={medicalRecord.name}
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
                  <label
                    for="exampleInputEmail"
                    className="col-sm-3 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail"
                      placeholder="Enter email"
                      autocomplete="email"
                      value={medicalRecord.email}
                      onChange={handleInputs}
                      required
                    />
                    <div className="invalid-feedback">Email can't be blank</div>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="exampleInputName" className="col-sm-3 col-form-label">
                    Phone
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Your Phone number"
                      name="phone"
                      value={medicalRecord.phone}
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
                  <label className="col-sm-3 col-form-label pt-0">Gender</label>
                  <div className="col-sm-9">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleInlineRadioColor"
                        id="exampleInlineRadio1"
                        value="option1"
                        required
                      />
                      <label className="form-check-label" for="exampleInlineRadio1">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleInlineRadioColor"
                        id="exampleInlineRadio2"
                        value="option2"
                        required
                      />
                      <label className="form-check-label" for="exampleInlineRadio2">
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleInlineRadioColor"
                        id="exampleInlineRadio3"
                        value="option3"
                        required
                      />
                      <label className="form-check-label" for="exampleInlineRadio3">
                        Other
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleInlineRadioColor"
                        id="exampleInlineRadio4"
                        value="option4"
                        required
                      />
                      <label className="form-check-label" for="exampleInlineRadio4">
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
                        id="exampleInputDateYear"
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
                        id="exampleInputDateMonth"
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
                        id="exampleInputDateDay"
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

                <div className="container">
                  <div className="row">
                    <div className="col-md-12 m-2">
                      <h3 className="text-center">Medical History</h3>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="exampleInputName"
                      className="col-sm-3 col-form-label"
                    >
                      Diagnosis
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Diagnosis name"
                        name="diagnosis"
                        value={medicalHistory.diagnosis}
                        onChange={handleInputsHistory}
                      />
                      <div className="invalid-feedback">Name can't be blank</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="exampleInputName"
                      className="col-sm-3 col-form-label"
                    >
                      Referred Physician
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Name of doctor"
                        name="referredPhysician"
                        value={medicalHistory.referredPhysician}
                        onChange={handleInputsHistory}
                      />
                      <div className="invalid-feedback">Name can't be blank</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="exampleInputName"
                      className="col-sm-3 col-form-label"
                    >
                      Referred Clinic
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Name of the Clinic"
                        name="referredClinic"
                        value={medicalHistory.referredClinic}
                        onChange={handleInputsHistory}
                      />
                      <div className="invalid-feedback">Name can't be blank</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label">Date</label>
                    <div className="col-sm-9">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <select
                          id="exampleInputDateYear"
                          className="form-select me-1"
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
                          id="exampleInputDateMonth"
                          className="form-select mx-1"
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
                          id="exampleInputDateDay"
                          className="form-select ms-1"
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

                  <div className="row mb-3">
                    <label
                      for="exampleInputName"
                      className="col-sm-3 col-form-label"
                    >
                      Severity
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        name="severity"
                        value={medicalHistory.severity}
                        onChange={handleInputsHistory}
                      />
                      <div className="invalid-feedback">Name can't be blank</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="exampleInputName"
                      className="col-sm-3 col-form-label"
                    >
                      Other Info
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        name="otherInfo"
                        value={medicalHistory.otherInfo}
                        onChange={handleInputsHistory}
                      />
                      <div className="invalid-feedback">Name can't be blank</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="exampleInputFriends"
                      className="col-sm-3 col-form-label"
                    >
                      Payment Amount (in ₹)
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputFriends"
                        placeholder="Amount in rupees (₹)"
                        name="paymentAmount"
                        value={medicalHistory.paymentAmount}
                        onChange={handleInputsHistory}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      for="exampleCustomFile"
                      className="col-sm-3 col-form-label"
                    >
                      Upload Medical File
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="file"
                        className="form-control"
                        id="Upload file"
                        onChange={handleChangeInputFile}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                      <div className="form-text">
                        (pdf, docx, jpg are acceptable formats)
                      </div>
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
                        id="exampleCheckTerms"
                        required
                      />
                      <label className="form-check-label" for="exampleCheckTerms">
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

                <div className="row mb-0">
                  <div className="col-sm-9 offset-sm-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <button type="reset" className="btn btn-outline-secondary">
                      Cancel
                    </button>
                  </div>
                </div>
                {/* </form> */}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
