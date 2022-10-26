import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import FormInput from "../components/FormInput";

const DynamicRec = () => {
  const [dynForm, setDynForm] = useState();
  const [formState, setFormState] = useState({});
  const [status, setStatus] = useState("false");

  const makeFormInputs = (data, i) => {
    return (
      <FormInput
        label={data.label[i]}
        type={data.type[i]}
        placeholder={data.placeholder[i]}
        name={data.name[i]}
        valid="Good!"
        invalid="Please provide a valid input."
        formText="Hehehe"
        // invalid={data.invalid[i]}
        // valid={data.valid[i]}
        // formText={data.formText[i]}
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
    console.log("hello world");
    console.log(data);
    if (data === {} || data === undefined) {
      return <h1>wait</h1>;
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
    const data = await axios.get(`/form/FacultyRecruitment`);
    const temp = data.data.formsRecord[0];
    helperFormState(temp);
    setDynForm(temp);
    setStatus(true);
    console.log(temp);
  };

  useEffect(() => {
    getForm();
  }, []);

  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="p-2">Faculty Recruitment Portal</h1>
        <div className="row m-0 justify-content-center">
          <div className="col-lg-10 col-md-10 col-12 p-2 shadow-sm">
            <div className="d-flex flex-column m-3">
              <h2 className="text-center pb-3">Application Form</h2>

              {makeForm(dynForm)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicRec;
