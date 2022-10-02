import { useState } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";
import moment from "moment";
import Swal from "sweetalert2";

export default function TrainingRecordsCreate() {
  const [trainingRecord, setTrainingRecord] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
  });

  const [trainingHistory, setTrainingHistory] = useState({
    trainingName: "",
    trainingInstitute: "",
    trainingDomain: "",
    trainingYear: "",
    otherInfo: "",
    paymentAmount: "",
    timesTaken: "",
  });
  const [dob, setDob] = useState();
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setTrainingRecord({ ...trainingRecord, [name]: value });
  };
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleAccepted = (e) => {
    setTermsAccepted(!termsAccepted);
  };
  const handleInputsHistory = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setTrainingHistory({ ...trainingHistory, [name]: value });
  };

  const handleSubmit = async () => {
    let currentRecord = trainingRecord;
    currentRecord.trainingHistory = [trainingHistory];
    currentRecord.dateOfBirth = moment(dob).format("DD/MM/YYYY");

    if (termsAccepted) {
      await axios.post(`/training/create`, currentRecord);
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
        <h1 className="p-2">Training Records</h1>
        <div className="row m-0 p-2 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
            <div className="d-flex flex-column">
              <h2 className="text-center">Details</h2>
              <>
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
                        value={trainingRecord.name}
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
                        value={trainingRecord.email}
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
                        value={trainingRecord.phone}
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
                    </div>
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">Format: Year Month Day</div>
                  </div>

                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 m-2">
                        <h3 class="text-center">Training History</h3>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="exampleInputName"
                        class="col-sm-3 col-form-label"
                      >
                        Training Name
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName"
                          placeholder="Training Name"
                          name="trainingName"
                          value={trainingHistory.trainingName}
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
                        Training Institute
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName"
                          placeholder="Training Institute"
                          name="trainingInstitute"
                          value={trainingHistory.trainingInstitute}
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
                        Training Domain
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName"
                          placeholder="Training Domain"
                          name="trainingDomain"
                          value={trainingHistory.trainingDomain}
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
                        Training Year
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="number"
                          class="form-control"
                          id="exampleInputFriends"
                          placeholder="Training Year"
                          name="trainingYear"
                          value={trainingHistory.trainingYear}
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
                          placeholder="Other Info"
                          name="otherInfo"
                          value={trainingHistory.otherInfo}
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
                          value={trainingHistory.paymentAmount}
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
                        for="exampleInputFriends"
                        class="col-sm-3 col-form-label"
                      >
                        Times Taken the Training
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="number"
                          class="form-control"
                          id="exampleInputFriends"
                          placeholder="Times Taken the Training"
                          name="timesTaken"
                          value={trainingHistory.timesTaken}
                          onChange={handleInputsHistory}
                        />
                        <div class="invalid-feedback">
                          Please provide a valid value.
                        </div>
                        <div class="valid-feedback">Looks good!</div>
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
                </form>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
