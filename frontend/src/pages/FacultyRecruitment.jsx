import { useState, useEffect } from "react";
import { storage } from "../storage/base";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DatePicker from "react-date-picker";
import moment from "moment";
import Swal from "sweetalert2";
import FormInput from "../components/FormInput";
import axios from "axios";

export default function FacultyRecruitment() {
  const [dob, setDob] = useState();

  const [facultyRecord, setFacultyRecord] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    bio: "",
    qualification: "",
    department: "",
    yearsOfExperience: "",
    resume: "",
  });

  const [otherRecord, setOtherRecord] = useState();
  const [formState, setFormState] = useState({});
  const [status, setStatus] = useState("false");

  const makeFormInputs = (data, i) => {
    return (
      <FormInput
        label={data.label[i]}
        type={data.type[i]}
        placeholder={data.placeholder[i]}
        name={data.name[i]}
        invalid={data.invalid[i]}
        valid={data.valid[i]}
        formText={data.formText[i]}
        curFormState={formState}
        changeCurFormState={setFormState}
      />
    );
  };

  const helperFormState = (data) => {
    let obj = {};

    for (let entry of data.name.values()) {
      console.log(entry);
      obj[entry] = "";
    }
    setFormState(obj);
    console.log(obj);
  };

  const makeForm = (data) => {
    console.log("hello world");
    console.log(data);
    if (data === {} || data === undefined) {
      return <h1>wait</h1>;
    } else {
      console.log(data);
      console.log(data.name.length);
      let temp = [];
      for (let i = 0; i < data.name.length; i++) {
        temp.push(i);
      }
      console.log(temp);
      return temp.map((i) => {
        return makeFormInputs(data, i);
      });
    }
  };

  const getForm = async () => {
    const data = await axios.get(`/form/FacultyRecruitment`);
    const temp = data.data.formsRecord[0];
    helperFormState(temp);
    setOtherRecord(temp);
    setStatus(true);
    console.log(temp);
  };

  useEffect(() => {
    getForm();
  }, []);

  const handleSubmit = async () => {
    let currentRecord = facultyRecord;

    currentRecord.dateOfBirth = moment(dob).format("DD/MM/YYYY");
    currentRecord.qualification = "btech";

    currentRecord.resume = "resume";
    currentRecord.other = formState;

    //console.log(currentRecord);

    try {
      await axios.post(`/recruitment/create`, currentRecord);
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

  const [url, setUrl] = useState(null);
  const handleChangeInputFile = async (e) => {
    const file = e.target.files[0];

    let newFile = "Resume/" + file.name;
    const fileRef = ref(storage, newFile);

    await uploadBytes(fileRef, file).then((snapshot) => {
      console.log("Uploaded a file");
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setUrl(url);
      });
    });
    console.log(url);
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="p-2">Faculty Recruitment Portal</h1>
        <div className="row m-0 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 p-2 shadow-sm">
            <div className="d-flex flex-column m-3">
              <h2 className="text-center pb-3">Application Form</h2>
              {/* <form class="needs-validation" novalidate> */}
              <div class="alert alert-danger d-none">
                Please review the problems below:
              </div>
              <FormInput
                label="Name"
                type="text"
                name="name"
                placeholder="Enter your name"
                curFormState={facultyRecord}
                changeCurFormState={setFacultyRecord}
                invalid="Please enter your name."
                valid="Looks good!"
                formText="Enter your name as it appears on your documents."
              />
              <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                curFormState={facultyRecord}
                changeCurFormState={setFacultyRecord}
                invalid="Please enter a valid email address."
                valid="Looks good!"
                formText="Enter your email address."
              />
              <FormInput
                label="Phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                curFormState={facultyRecord}
                changeCurFormState={setFacultyRecord}
                invalid="Please enter a valid phone number."
                valid="Looks good!"
                formText="Enter your phone number."
              />

              <div class="row mb-3">
                <label for="exampleTextareaBio" class="col-sm-3 col-form-label">
                  Bio
                </label>
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    id="exampleTextareaBio"
                    rows="2"
                    placeholder="Tell us more about yourself"
                    onChange={(e) => {
                      setFacultyRecord({
                        ...facultyRecord,
                        bio: e.target.value,
                      });
                    }}
                    required
                  ></textarea>
                  <div class="invalid-feedback">
                    Please provide a valid value.
                  </div>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="form-text">Max limit 500 words</div>
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
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label pt-0">Subject</label>
                <div class="col-sm-9">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleInlineRadioColor"
                      id="exampleInlineRadio1"
                      value="option1"
                      onClick={(e) => {
                        setFacultyRecord({
                          ...facultyRecord,
                          department: "cse",
                        });
                      }}
                      required
                    />
                    <label class="form-check-label" for="exampleInlineRadio1">
                      Computer Science
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleInlineRadioColor"
                      id="exampleInlineRadio2"
                      value="option2"
                      onClick={(e) => {
                        setFacultyRecord({
                          ...facultyRecord,
                          department: "me",
                        });
                      }}
                      required
                    />
                    <label class="form-check-label" for="exampleInlineRadio2">
                      Mechanical
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleInlineRadioColor"
                      id="exampleInlineRadio3"
                      value="option3"
                      onClick={(e) => {
                        setFacultyRecord({
                          ...facultyRecord,
                          department: "ce",
                        });
                      }}
                      required
                    />
                    <label class="form-check-label" for="exampleInlineRadio3">
                      Civil
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleInlineRadioColor"
                      id="exampleInlineRadio4"
                      value="option4"
                      onClick={(e) => {
                        setFacultyRecord({
                          ...facultyRecord,
                          department: "ee",
                        });
                      }}
                      required
                    />
                    <label class="form-check-label" for="exampleInlineRadio4">
                      Electrical
                    </label>
                  </div>

                  <div class="invalid-feedback">
                    Please provide a valid value.
                  </div>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="form-text">Your subject of teaching</div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label pt-0">
                  Educational Degrees
                </label>
                <div class="col-sm-9">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="exampleInlineCheckbox1"
                      value="option1"
                      required
                    />
                    <label
                      class="form-check-label"
                      for="exampleInlineCheckbox1"
                    >
                      BTech
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="exampleInlineCheckbox2"
                      value="option2"
                      required
                    />
                    <label
                      class="form-check-label"
                      for="exampleInlineCheckbox2"
                    >
                      MTech
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="exampleInlineCheckbox3"
                      value="option3"
                      required
                    />
                    <label
                      class="form-check-label"
                      for="exampleInlineCheckbox3"
                    >
                      PHD
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="exampleInlineCheckbox4"
                      value="option4"
                      required
                    />
                    <label
                      class="form-check-label"
                      for="exampleInlineCheckbox4"
                    >
                      Doctoral
                    </label>
                  </div>
                  <div class="form-text">Select all applicable options</div>
                </div>
              </div>
              <FormInput
                label="Years of experience"
                type="number"
                name="yearsOfExperience"
                placeholder="Years of experience"
                curFormState={facultyRecord}
                changeCurFormState={setFacultyRecord}
                invalid="Please provide a valid value."
                valid="Looks good!"
                formText="Integer input example"
              />

              <div class="row mb-3">
                <label for="exampleCustomFile" class="col-sm-3 col-form-label">
                  Resume
                </label>
                <div class="col-sm-9">
                  <input
                    type="file"
                    class="form-control"
                    id="exampleCustomFile"
                    onChange={handleChangeInputFile}
                    required
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
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label pt-0">
                  Do you accept the terms and conditions?
                </label>
                <div class="col-sm-9">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleBooleanRadio"
                      id="exampleBooleanRadioYes"
                      value="red"
                      required
                    />
                    <label
                      class="form-check-label"
                      for="exampleBooleanRadioYes"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleBooleanRadio"
                      id="exampleBooleanRadioNo"
                      value="red"
                      required
                    />
                    <label class="form-check-label" for="exampleBooleanRadioNo">
                      No
                    </label>
                  </div>
                  <div class="invalid-feedback">Terms must be accepted</div>
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

              {status ? <h5 className="text-start">Others</h5> : null}
              {makeForm(otherRecord)}
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
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
