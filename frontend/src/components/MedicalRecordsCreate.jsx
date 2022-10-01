import { useState } from "react";
import axios from "axios";
import { storage } from "../storage/base";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DatePicker from "react-date-picker";
import moment from "moment";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

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

  const [dob, setDob] = useState();
  const [medicalDate, setMedicalDate] = useState();

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
    currentRecord.dateOfBirth = moment(dob).format("DD/MM/YYYY");

    //currentRecord.medicalHistory[0].medicalFile = url;
    currentRecord.medicalHistory[0].date =
      moment(medicalDate).format("DD/MM/YYYY");
    try {
      await axios.post(`/medical/create`, currentRecord);
      console.log("posted");
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
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="row m-0 p-1 position-sticky top-0 bg-white">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/staff_service/medical/">
                  <span className="btn btn-outline p-0 border-0 link-dark">
                    Medical Records
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/staff_service/medical/create">
                  <span className="btn btn-outline p-0 border-0 link-primary">
                    Create Medical Record
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row m-0 p-1 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
            <div className="d-flex flex-column">
              <h4 className="text-center mb-3">Create/Append Medical Record</h4>

              <h5 className="text-start mb-2">Personal Details</h5>
              <>
                {/* <form className="needs-validation" novalidate> */}
                <div className="alert alert-danger d-none">
                  Please review the problems below:
                </div>

                <FormInput
                  label="Name"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  curFormState={medicalRecord}
                  changeCurFormState={setMedicalRecord}
                  valid="Looks good!"
                  invalid="Name can't be blank"
                  formText=" Enter Name as on official documents"
                />

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
                  <label
                    for="exampleInputName"
                    className="col-sm-3 col-form-label"
                  >
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

                <h5 className="text-start mb-2">Medical History</h5>

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
                      <DatePicker
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayPlaceholder="DD"
                        monthPlaceholder="MM"
                        yearPlaceholder="YYYY"
                        dayAriaLabel="Day"
                        monthAriaLabel="Month"
                        onChange={setMedicalDate}
                        value={medicalDate}
                        nativeInputAriaLabel="Date"
                        yearAriaLabel="Year"
                        format="dd-MM-y"
                        maxDate={new Date()}
                      />
                    </div>
                    <div className="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="form-text">Format: Day Month Year</div>
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
                      <label
                        className="form-check-label"
                        for="exampleCheckTerms"
                      >
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

                <div className="row mb-0 text-end">
                  <div className="col-sm-9 offset-sm-3">
                    <button
                      type="submit"
                      className="btn btn-primary m-1"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-outline-secondary m-1"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
