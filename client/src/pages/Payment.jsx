export default function Payment() {
  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="p-2">Staff Payment Management</h1>
        <div className="row m-0 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 border p-2 rounded shadow-sm">
            <h2 className="text-center">Payment Form</h2>
            <div className="d-flex flex-column p-2">
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
                      class="form-control"
                      id="exampleInputName"
                      placeholder="Your name"
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
                      class="form-control"
                      id="exampleInputEmail"
                      placeholder="Enter email"
                      autocomplete="email"
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
                        Prefer Not Say
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
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">Format: Year Month Day</div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label
                    for="exampleInputFriends"
                    class="col-sm-3 col-form-label"
                  >
                    Leave Encashment (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputFriends"
                      placeholder="Amount in rupees (₹)"
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
                    LTC (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputFriends"
                      placeholder="Amount in rupees (₹)"
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
                    Temporary Advances (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputFriends"
                      placeholder="Amount in rupees (₹)"
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
                    Medical Reimbursement (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputFriends"
                      placeholder="Amount in rupees (₹)"
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
                    for="exampleCustomFile"
                    class="col-sm-3 col-form-label"
                  >
                    Travel Reimbusement File
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="file"
                      class="form-control"
                      id="Upload file"
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
                  <label
                    for="exampleInputFriends"
                    class="col-sm-3 col-form-label"
                  >
                    Other Reimbusements (in ₹)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputFriends"
                      placeholder="Amount in rupees (₹)"
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="form-text">Amount in rupees</div>
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
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" class="btn btn-outline-secondary">
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
