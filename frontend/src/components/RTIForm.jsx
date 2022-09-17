export default function RTIForm(){
    return (<div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
    <div className="d-flex flex-column">
      <h4 className="text-center mb-3">Submit an RTI Request Form</h4>
      <h5 className="text-start">Personal Details of the Applicant</h5>
      <div class="row mt-2 mb-3">
        <label for="rti-email" className="col-sm-3 col-form-label">
          Email
        </label>
        <div class="col-sm-9">
          <input
            type="email"
            name="email"
            class="form-control"
            id="rti-email"
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
        <label for="rti-phone" class="col-sm-3 col-form-label">
          Mobile Number
        </label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            id="rti-phone"
            placeholder="Your Phone number"
            name="phone"
            required
          />
          <div class="invalid-feedback">Phone Number can't be blank</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
      </div>
      <div class="row mb-3">
        <label for="rti-name" class="col-sm-3 col-form-label">
          Name
        </label>
        <div class="col-sm-9">
          <input
            type="text"
            name="name"
            class="form-control"
            id="rti-name"
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
      <h5 className="text-start">Right To Information Request Details</h5>
      <div class="row mt-2 mb-3">
        <label for="rti-query" class="col-sm-3 col-form-label">
          RTI Query
        </label>
        <div class="col-sm-9">
          <textarea
            class="form-control"
            id="rti-query"
            placeholder="RTI Request"
            name="RTIRequest"
            required
          />
          <div class="invalid-feedback">RTI Request</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
      </div>
      <div class="row mb-3">
        <label for="rti-query-type" class="col-sm-3 col-form-label">
          Query Type
        </label>
        <div class="col-sm-9">
          <input
            type="text"
            name="name"
            class="form-control"
            id="rti-query-type"
            placeholder="Query Type"
            required
          />
          <div class="invalid-feedback">Query Type can't be blank</div>
          <div class="valid-feedback">Looks good!</div>
          <div class="form-text">
            Query type can be Administration, Medical, Financial etc..
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
  </div>)
}