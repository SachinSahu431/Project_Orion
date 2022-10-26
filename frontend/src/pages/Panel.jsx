import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Panel = () => {
  const [formState, setFormState] = useState({
    formName: "Rti",
    name: "",
    schemaType: "",
    required: "",
    frontend: "",
    label: "",
    placeholder: "",
    type: "",
    valid: "",
    invalid: "",
    formText: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async () => {
    let curRecord = formState;
    curRecord.schemaType = "String";
    curRecord.frontend = "true";

    console.log(curRecord);

    try {
      await axios.post(`/form/custom`, curRecord);

      await Swal.fire({
        title: "Success!",
        text: `Form field ${curRecord.name} added successfully to ${curRecord.formName} form.`,
        icon: "success",
        confirmButtonText: "OK",
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="row m-0 p-1 justify-content-center">
        <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
          <div className="d-flex flex-column">
            <h4 className="text-center mb-3">Panel Control</h4>

            <h5 className="text-start">Add New Field</h5>

            <div className="row mt-2 mb-3">
              <label className="col-sm-3 col-form-label">Select</label>
              <div className="col-sm-9">
                <select
                  id="pageName"
                  onChange={() => {
                    setFormState({
                      ...formState,
                      formName: document.getElementById("pageName").value,
                    });
                  }}
                >
                  <option value="Rti">RTI Page</option>
                  <option value="FacultyRecruitment">
                    Faculty Recruitment Page
                  </option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Name</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputs}
                  id="name"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Required</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="required"
                  onChange={handleInputs}
                  id="name"
                  value={formState.required}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Label</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="label"
                  onChange={handleInputs}
                  id="name"
                  value={formState.label}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Placeholder</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="placeholder"
                  onChange={handleInputs}
                  id="name"
                  value={formState.placeholder}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Type</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="type"
                  onChange={handleInputs}
                  id="name"
                  value={formState.type}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Valid</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="valid"
                  onChange={handleInputs}
                  id="name"
                  value={formState.valid}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Invalid</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="invalid"
                  onChange={handleInputs}
                  id="name"
                  value={formState.invalid}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Form Text</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="formText"
                  onChange={handleInputs}
                  id="name"
                  value={formState.formText}
                />
              </div>
            </div>
            <div className="row mb-0">
              <div className="col-sm-9 offset-sm-3 text-end">
                <button
                  type="submit"
                  className="btn btn-primary m-1"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button type="reset" className="btn btn-outline-secondary">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
