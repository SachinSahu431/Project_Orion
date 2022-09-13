// import user from "../static/images/user.png";

export default function Visiting() {
  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="p-2">Adjunct/Visiting/Guest Faculty Details</h1>
        <div className="row w-100 justify-content-center">
          <div className="col-lg-8 col-md-10 col-12 shadow-sm border border-1 rounded p-2">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 py-2">
                    <h3 className="text-center">Search Faculty</h3>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <form className="needs-validation" novalidate>
                  <div className="alert alert-danger d-none">
                    Please review the problems below:
                  </div>

                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="exampleSelectLanguage"
                      required
                    >
                      <option value="">Faculty Type</option>
                      <option value="en">Assistant Professor</option>
                      <option value="de">Associate Professor</option>
                      <option value="es">Teaching Assistant</option>
                      <option value="ru">Others</option>
                    </select>
                    <label for="exampleSelectLanguage">Faculty Type</label>
                    <div className="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="exampleTextareaBio"
                      placeholder="Tell us your story"
                      required
                    ></textarea>
                    <label for="exampleTextareaBio">Search Filters</label>
                    <div className="invalid-feedback">
                      Please provide a valid value.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="form-text">
                      Use space separated tags for multiple selection
                    </div>
                  </div>

                  <div classNameName="text-end">
                    <button type="submit" className="btn btn-primary m-1">
                      Submit!
                    </button>
                    <button
                      type="reset"
                      className="btn btn-outline-secondary m-1"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
