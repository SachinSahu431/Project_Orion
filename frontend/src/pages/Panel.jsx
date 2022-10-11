import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Panel = () => {
  const [formState, setFormState] = useState({
    formName: "",
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

    curRecord.valid = "Good!";
    curRecord.invalid = "Please provide a valid input.";
    curRecord.formText = "";
    console.log(curRecord);

    try {
      await axios.post(`http://localhost:5000/api/form/custom`, curRecord);

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
          <option value="Property">Property Page</option>
          <option value="StaffPayment">Staff Payment Management</option>
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
              <label for="name">Schema Type</label>
              <input
                type="text"
                name="schemaType"
                id="name"
                value={formState.schemaType}
                onChange={handleInputs}
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
              <label for="name">frontend</label>
              <input
                type="text"
                name="frontend"
                onChange={handleInputs}
                id="name"
                value={formState.frontend}
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

          <button onClick={handleSubmit}> submit</button>
        </div>
      </div>
    </>
  );
};

export default Panel;
