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
      <div className="panel">
        <h1>Add new Field</h1>

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
          <option value="FacultyRecruitment">Faculty Recruitment Page</option>
        </select>

        <div className="d-flex flex-column">
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputs}
                id="name"
              />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <label for="name">Required</label>
              <input
                type="text"
                name="required"
                onChange={handleInputs}
                id="name"
                value={formState.required}
              />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <label for="name">label</label>
              <input
                type="text"
                name="label"
                onChange={handleInputs}
                id="name"
                value={formState.label}
              />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <label for="name">placeholder</label>
              <input
                type="text"
                name="placeholder"
                onChange={handleInputs}
                id="name"
                value={formState.placeholder}
              />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <label for="name">type</label>
              <input
                type="text"
                name="type"
                onChange={handleInputs}
                id="name"
                value={formState.type}
              />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <label for="name">Valid</label>
              <input
                type="text"
                name="valid"
                onChange={handleInputs}
                id="name"
                value={formState.valid}
              />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <label for="name">Invalid</label>
              <input
                type="text"
                name="invalid"
                onChange={handleInputs}
                id="name"
                value={formState.invalid}
              />
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <label for="name">FormText</label>
              <input
                type="text"
                name="formText"
                onChange={handleInputs}
                id="name"
                value={formState.formText}
              />
            </div>
          </div>

          <button onClick={handleSubmit}> submit</button>
        </div>
      </div>
    </>
  );
};

export default Panel;
