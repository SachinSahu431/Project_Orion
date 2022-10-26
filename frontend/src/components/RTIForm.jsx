import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import FormInput from "./FormInput";
export default function RTIForm() {
  const [rtiRecord, setRtiRecord] = useState({
    name: "",
    email: "",
    phone: "",
    rtiQuery: "",
    queryType: "",
  });
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setRtiRecord({ ...rtiRecord, [name]: value });
  };

  const [otherRecord, setOtherRecord] = useState();
  const [formState, setFormState] = useState({});
  const [status, setStatus] = useState(false);

  const makeFormInputs = (data, i) => {
    return (
      <FormInput
        label={data.label[i]}
        type={data.type[i]}
        placeholder={data.placeholder[i]}
        name={data.name[i]}
        invalid={data.invalid[i]}
        valid={data.valid[i]}
        formText={data.formText[i]}
        curFormState={formState}
        changeCurFormState={setFormState}
      />
    );
  };

  const helperFormState = (data) => {
    let obj = {};

    for (let entry of data.name.values()) {
      console.log(entry);
      obj[entry] = "";
    }
    setFormState(obj);
    console.log(obj);
  };

  const makeForm = (data) => {
    console.log(data);
    if (data === {} || data === undefined) {
      return <></>;
    } else {
      console.log(data);
      console.log(data.name.length);
      let temp = [];
      for (let i = 0; i < data.name.length; i++) {
        temp.push(i);
      }
      console.log(temp);
      return temp.map((i) => {
        return makeFormInputs(data, i);
      });
    }
  };

  const getForm = async () => {
    try {
      const data = await axios.get(`/form/Rti`);
      const temp = data.data.formsRecord[0];
      helperFormState(temp);
      setOtherRecord(temp);
      setStatus(true);
      console.log(temp);
    } catch (err) {
      console.log("no custom field found");
    }
  };

  useEffect(() => {
    getForm();
  }, []);

  const handleSubmit = async () => {
    let temp = rtiRecord;
    temp.other = formState;
    console.log(temp);

    try {
      await axios.post(`/rti/create`, temp);

      console.log("posted");
      await Swal.fire({
        icon: "success",
        title: "Details Updated",
      });
      window.location.reload();
      console.log("posted");
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log(e);
    }
  };

  //Write your code here
  return (
    <div className="d-flex flex-column">
      <div className="row m-0 p-1 position-sticky top-0 bg-white">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/legal">
                <span className="btn btn-outline p-0 border-0 link-dark">
                  RTI & Legal Cell
                </span>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/legal/rti/create">
                <span className="btn btn-outline p-0 border-0 link-primary">
                  Submit RTI Query
                </span>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row m-0 p-1 justify-content-center">
        <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
          <div className="d-flex flex-column">
            <h4 className="text-center mb-3">Submit an RTI Request Form</h4>
            <h5 className="text-start">Personal Details of the Applicant</h5>
            <div className="row mt-2 mb-3">
              <label for="rti-email" className="col-sm-3 col-form-label">
                Email
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="rti-email"
                  placeholder="Enter email"
                  autocomplete="email"
                  value={rtiRecord.email}
                  onChange={handleInputs}
                  required
                />
                <div className="invalid-feedback">Email can't be blank</div>
                <div className="valid-feedback">Looks good!</div>
                <div className="form-text">
                  All Official communication will be done through this email
                  address.
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label for="rti-phone" className="col-sm-3 col-form-label">
                Mobile Number
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="rti-phone"
                  placeholder="Your Phone number"
                  name="phone"
                  value={rtiRecord.phone}
                  onChange={handleInputs}
                  required
                />
                <div className="invalid-feedback">
                  Phone Number can't be blank
                </div>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="row mb-3">
              <label for="rti-name" className="col-sm-3 col-form-label">
                Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="rti-name"
                  placeholder="Your name"
                  value={rtiRecord.name}
                  onChange={handleInputs}
                  required
                />
                <div className="invalid-feedback">Name can't be blank</div>
                <div className="valid-feedback">Looks good!</div>
                <div className="form-text">
                  Enter your full name as in official document.
                </div>
              </div>
            </div>
            <h5 className="text-start">Right To Information Request Details</h5>
            <div className="row mt-2 mb-3">
              <label for="rti-query" className="col-sm-3 col-form-label">
                RTI Query
              </label>
              <div className="col-sm-9">
                <textarea
                  type="text"
                  name="rtiQuery"
                  className="form-control"
                  id="rti-rtiQueryc"
                  placeholder="Your Rti Query"
                  value={rtiRecord.rtiQuery}
                  onChange={handleInputs}
                  required
                />
                <div className="invalid-feedback">RTI Request</div>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="row mb-3">
              <label for="rti-query-type" className="col-sm-3 col-form-label">
                Query Type
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="queryType"
                  className="form-control"
                  id="rti-queryType"
                  placeholder="Your QueryType"
                  value={rtiRecord.queryType}
                  onChange={handleInputs}
                  required
                />
                <div className="invalid-feedback">
                  Query Type can't be blank
                </div>
                <div className="valid-feedback">Looks good!</div>
                <div className="form-text">
                  Query type can be Administration, Medical, Financial etc..
                </div>
              </div>
            </div>
            {status ? <h5 className="text-start">Others</h5> : null}

            {makeForm(otherRecord)}
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
    </div>
  );
}
