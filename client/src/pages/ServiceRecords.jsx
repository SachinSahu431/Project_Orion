export default function ServiceRecords() {
  return (
    <div className="d-flex flex-column">
      <h3>Staff Service Records</h3>
      <div className="row m-0 p-3">
        <h4>Actions</h4>
        <div className="col-lg-6 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create, Append Record.</h5>
              <p>
                Create new record for a staff member or update an existing
                record.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">View Records.</h5>
              <p>View Records of staff members.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
        <div className="d-flex flex-column">
          <h4 className="text-center mb-3">Create A New Record</h4>
          <h5 className="text-start">Personal Details of the Staff Member</h5>
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
                required
              />
              <div class="invalid-feedback">Name can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                Enter your full name as in official document.
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Identification Number
            </label>
            <div class="col-sm-9">
              <input
                type="number"
                name="name"
                class="form-control"
                id="exampleInputName"
                placeholder="ID Number"
                required
              />
              <div class="invalid-feedback">ID Number can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                Enter your Identification Number as in official document.
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Date Of Birth</label>
            <div class="col-sm-9">
              <div class="d-flex flex-row justify-content-between align-items-center">
                <select
                  id="exampleInputDateYear"
                  class="form-select me-1"
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
                  class="form-select mx-1"
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
                  class="form-select ms-1"
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
              <div class="invalid-feedback">Please provide a valid value.</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">Format: Year Month Day</div>
            </div>
          </div>
          <div class="row mt-2 mb-3">
            <label for="exampleInputEmail" class="col-sm-3 col-form-label">
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
                required
              />
              <div class="invalid-feedback">Email can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                All Official communication will be done through this email
                address.
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Mobile Number
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Your Phone number"
                name="phone"
                required
              />
              <div class="invalid-feedback">Phone Number can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label pt-0">Gender</label>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleInlineRadioColor"
                  id="exampleInlineRadio1"
                  value="option1"
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
                  name="exampleInlineRadioColor"
                  id="exampleInlineRadio2"
                  value="option2"
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
                  name="exampleInlineRadioColor"
                  id="exampleInlineRadio3"
                  value="option3"
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
                  name="exampleInlineRadioColor"
                  id="exampleInlineRadio4"
                  value="option4"
                  required
                />
                <label class="form-check-label" for="exampleInlineRadio4">
                  Prefer not to say
                </label>
              </div>
              <div class="invalid-feedback">Please provide a valid value.</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Address
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Address"
                name="address"
                required
              />
              <div class="invalid-feedback">Address can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <h5 className="text-start mt-2">Staff Service Summary</h5>
          <div class="row mt-2 mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Staff Service Summary
            </label>
            <div class="col-sm-9">
              <textarea
                class="form-control"
                id="exampleInputName"
                placeholder="Staff Service Summary"
                name="staff_service_summary"
                required
              />
              <div class="invalid-feedback">Applicant Details!</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleCustomFile" class="col-sm-3 col-form-label">
              Staff Member Details
            </label>
            <div class="col-sm-9">
              <input
                type="file"
                class="form-control"
                id="Staff Member Details"
                required
              />
              <div class="invalid-feedback">Please provide a valid value.</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                (PDF,JPG, JPEG, PNG are acceptable formats)
              </div>
            </div>
          </div>
          <div class="row mb-0">
            <div class="col-sm-9 offset-sm-3 text-end">
              <button class="btn btn-primary me-2">Submit</button>
              <button type="reset" class="btn btn-outline-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
        <div className="d-flex flex-column">
          <h4 className="text-center mb-3">Update a record.</h4>
          <div class="row mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Identification Number
            </label>
            <div class="col-sm-9">
              <input
                type="number"
                name="name"
                class="form-control"
                id="exampleInputName"
                placeholder="ID Number"
                required
              />
              <div class="invalid-feedback">ID Number can't be blank</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                Enter your Identification Number as in official document.
              </div>
            </div>
          </div>
          <h5 className="text-start mt-2">Staff Service Summary</h5>
          <div class="row mt-2 mb-3">
            <label for="exampleInputName" class="col-sm-3 col-form-label">
              Staff Service Summary
            </label>
            <div class="col-sm-9">
              <textarea
                class="form-control"
                id="exampleInputName"
                placeholder="Staff Service Summary"
                name="staff_service_summary"
                required
              />
              <div class="invalid-feedback">Applicant Details!</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleCustomFile" class="col-sm-3 col-form-label">
              Staff Member Details
            </label>
            <div class="col-sm-9">
              <input
                type="file"
                class="form-control"
                id="Staff Member Details"
                required
              />
              <div class="invalid-feedback">Please provide a valid value.</div>
              <div class="valid-feedback">Looks good!</div>
              <div class="form-text">
                (PDF,JPG, JPEG, PNG are acceptable formats)
              </div>
            </div>
          </div>
          <div class="row mb-0">
            <div class="col-sm-9 offset-sm-3 text-end">
              <button class="btn btn-primary me-2">Append</button>
              <button type="reset" class="btn btn-outline-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
        <div className="d-flex flex-column">
          <h4 className="text-center mb-3">View Record</h4>
          <div className="py-2">
            <div className="card">
              <div className="card-header">
                <span>
                  Siddhartha G, <span className="text-muted fw-bold">CS20B040</span>
                </span>
              </div>
              <div className="card-body">
                <p>Details: List</p>
                <p>[20-10-2022] AA basdfasdfasdfasdfsdfas</p>
                <p>[21-10-2022] AA basdfasdfasdfasdfsdfas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
