import { useState } from "react";
import axios from "axios";

export default function CEAAllowance() {
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
      <div className="d-flex flex-column">
        <h1 className="p-2">CEA Allowance</h1>
        <div className="row m-0 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 rounded pb-3">
            <div className="d-flex flex-column">
              <h2 className="pb-2">Application Form</h2>
              <form class="needs-validation" novalidate>
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
                      value={ceaRecord.email}
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
                      name="phone"
                      class="form-control"
                      id="exampleInputName"
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
                  <label for="exampleInputName" class="col-sm-3 col-form-label">
                    Child Name 1
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      name="childName1"
                      class="form-control"
                      id="exampleInputName"
                      placeholder="Child Name 1"
                      value={ceaRecord.childName1}
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
                    for="exampleInputFriends"
                    class="col-sm-3 col-form-label"
                  >
                    Monthly CEA demanded (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      name="monthlyCeaDemanded1"
                      class="form-control"
                      id="exampleInputFriends"
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
                  <label
                    for="exampleInputFriends"
                    class="col-sm-3 col-form-label"
                  >
                    Number of Months Demanded
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      name="numberOfMonthsDemanded1"
                      class="form-control"
                      id="exampleInputFriends"
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
                  <label for="exampleInputName" class="col-sm-3 col-form-label">
                    Name of Child 2
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      name="childName2"
                      class="form-control"
                      id="exampleInputName"
                      placeholder="Child name"
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
                    for="exampleInputFriends"
                    class="col-sm-3 col-form-label"
                  >
                    Monthly CEA demanded (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      name="monthlyCeaDemanded2"
                      class="form-control"
                      id="exampleInputFriends"
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
                  <label
                    for="exampleInputFriends"
                    class="col-sm-3 col-form-label"
                  >
                    Number of Months Demanded
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      name="numberOfMonthsDemanded2"
                      class="form-control"
                      id="exampleInputFriends"
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
