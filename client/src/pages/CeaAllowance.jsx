export default function CEAAllowance() {
  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="p-2">CEA Allowance</h1>
        <div className="row m-0 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 border p-2 rounded shadow-sm">
              <h2 className="text-center p-2">Application Form</h2>
            <div className="d-flex flex-column m-3">
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
                  <label for="exampleInputName" class="col-sm-3 col-form-label">
                    Name of Child 1
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName"
                      placeholder="Child name"
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
                    Number of Months Demanded
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputFriends"
                      placeholder="Number of Months"
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
                      class="form-control"
                      id="exampleInputName"
                      placeholder="Child name"
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
                    Number of Months Demanded
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputFriends"
                      placeholder="Number of Months"
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
                    Amount approved (in ₹)
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
                  <label
                    for="exampleInputFriends"
                    class="col-sm-3 col-form-label"
                  >
                    Income Tax Deducted (in ₹)
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
                  <label class="col-sm-3 col-form-label pt-0">Approved?</label>
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
                      <label
                        class="form-check-label"
                        for="exampleBooleanRadioNo"
                      >
                        No
                      </label>
                    </div>
                    <div class="invalid-feedback">Terms must be accepted</div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div class="row mb-3">
                  <label
                    for="exampleCustomFile"
                    class="col-sm-3 col-form-label"
                  >
                    Upload File (Optional)
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="file"
                      class="form-control"
                      id="exampleCustomFile"
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
                    <button type="submit" class="btn btn-primary m-1">
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
