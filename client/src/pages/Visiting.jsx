import user from "../static/images/user.png";

export default function Visiting() {
  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="p-2">Adjunct/Visiting/Guest Faculty Details</h1>
      </div>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-center">Search Faculty</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column">
        <form class="needs-validation" novalidate>
          <div class="alert alert-danger d-none">
            Please review the problems below:
          </div>

          <div class="form-floating mb-3">
            <select class="form-select" id="exampleSelectLanguage" required>
              <option value="">Faculty Type</option>
              <option value="en">Assistant Professor</option>
              <option value="de">Associate Professor</option>
              <option value="es">Teaching Assistant</option>
              <option value="ru">Others</option>
            </select>
            <label for="exampleSelectLanguage">Faculty Type</label>
            <div class="invalid-feedback">Please provide a valid value.</div>
            <div class="valid-feedback">Looks good!</div>
          </div>

          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              id="exampleTextareaBio"
              placeholder="Tell us your story"
              required
            ></textarea>
            <label for="exampleTextareaBio">Search Filters</label>
            <div class="invalid-feedback">Please provide a valid value.</div>
            <div class="valid-feedback">Looks good!</div>
            <div class="form-text">
              Use space seperaterd tags for multile selection
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit!
          </button>
          <button type="reset" class="btn btn-outline-secondary">
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}
