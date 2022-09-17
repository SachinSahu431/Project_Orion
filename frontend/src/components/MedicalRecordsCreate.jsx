import { useState } from "react";
import axios from "axios";
import { storage } from "../storage/base";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DatePicker from "react-date-picker";
import moment from "moment";
import Swal from "sweetalert2";

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

    currentRecord.medicalHistory[0].medicalFile = url;
    currentRecord.medicalHistory[0].date =
      moment(medicalDate).format("DD/MM/YYYY");
    try {
      await axios.post(
        `http://localhost:5000/api/medical/create`,
        currentRecord
      );
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
        text: "Something went wrong!",
      });
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
                {/* <form class="needs-validation" novalidate> */}
                <div class="alert alert-danger d-none">
                  Please review the problems below:
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
                      value={medicalRecord.name}
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
                      value={medicalRecord.email}
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
                  <label for="exampleInputName" class="col-sm-3 col-form-label">
                    Phone
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName"
                      placeholder="Your Phone number"
                      name="phone"
                      value={medicalRecord.phone}
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
                  <label class="col-sm-3 col-form-label pt-0">Gender</label>
                  <div class="col-sm-9">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="exampleInlineRadio1"
                        name="gender"
                        value="Male"
                        onChange={handleInputs}
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
                        name="gender"
                        id="exampleInlineRadio2"
                        value="Female"
                        onChange={handleInputs}
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
                        name="gender"
                        id="exampleInlineRadio3"
                        onChange={handleInputs}
                        value="Other"
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
                        name="gender"
                        id="exampleInlineRadio4"
                        value="Prefer not to say"
                        onChange={handleInputs}
                        required
                      />
                      <label class="form-check-label" for="exampleInlineRadio4">
                        Prefer not to say
                      </label>
                    </div>
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">DOB</label>
                  <div class="col-sm-9">
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
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">Format: Day Month Year</div>
                  </div>
                </div>

                <div class="container">
                  <div class="row">
                    <div class="col-md-12 m-2">
                      <h3 class="text-center">Medical History</h3>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleInputName"
                      class="col-sm-3 col-form-label"
                    >
                      Diagnosis
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Diagnosis name"
                        name="diagnosis"
                        value={medicalHistory.diagnosis}
                        onChange={handleInputsHistory}
                      />
                      <div class="invalid-feedback">Name can't be blank</div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleInputName"
                      class="col-sm-3 col-form-label"
                    >
                      Referred Physician
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Name of doctor"
                        name="referredPhysician"
                        value={medicalHistory.referredPhysician}
                        onChange={handleInputsHistory}
                      />
                      <div class="invalid-feedback">Name can't be blank</div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleInputName"
                      class="col-sm-3 col-form-label"
                    >
                      Referred Clinic
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Name of the Clinic"
                        name="referredClinic"
                        value={medicalHistory.referredClinic}
                        onChange={handleInputsHistory}
                      />
                      <div class="invalid-feedback">Name can't be blank</div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-3 col-form-label">Date</label>
                    <div class="col-sm-9">
                      <div class="d-flex flex-row justify-content-between align-items-center">
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
                      <div class="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="form-text">Format: Day Month Year</div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleInputName"
                      class="col-sm-3 col-form-label"
                    >
                      Severity
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="severity"
                        value={medicalHistory.severity}
                        onChange={handleInputsHistory}
                      />
                      <div class="invalid-feedback">Name can't be blank</div>
                      <div class="valid-feedback">Looks good!</div>
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
                        class="form-control"
                        id="exampleInputName"
                        name="otherInfo"
                        value={medicalHistory.otherInfo}
                        onChange={handleInputsHistory}
                      />
                      <div class="invalid-feedback">Name can't be blank</div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleInputFriends"
                      class="col-sm-3 col-form-label"
                    >
                      Payment Amount (in ₹)
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputFriends"
                        placeholder="Amount in rupees (₹)"
                        name="paymentAmount"
                        value={medicalHistory.paymentAmount}
                        onChange={handleInputsHistory}
                      />
                      <div class="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="exampleCustomFile"
                      class="col-sm-3 col-form-label"
                    >
                      Upload Medical File
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="file"
                        class="form-control"
                        id="Upload file"
                        onChange={handleChangeInputFile}
                      />
                      <div class="invalid-feedback">
                        Please provide a valid value.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="form-text">
                        (pdf, docx, jpg are acceptable formats)
                      </div>
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
                        required
                      />
                      <label class="form-check-label" for="exampleCheckTerms">
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

                <div class="row mb-0">
                  <div class="col-sm-9 offset-sm-3">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <button type="reset" class="btn btn-outline-secondary">
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
