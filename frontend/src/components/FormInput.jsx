const FormInput = (props) => {
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    props.changeCurFormState({ ...props.curFormState, [name]: value });
  };

  const setValue = () => {
    return props.curFormState[props.name];
  };

  return (
    <div class="row mb-3">
      <label for="exampleInputName" class="col-sm-3 col-form-label">
        {props.label}
      </label>
      <div class="col-sm-9">
        <input
          type={props.type}
          name={props.name}
          class="form-control"
          id="exampleInputName"
          placeholder={props.placeholder}
          value={props.curFormState[props.name]}
          onChange={handleInputs}
          required
        />
        <div class="invalid-feedback">{props.invalid}</div>
        <div class="valid-feedback">{props.valid}</div>
        <div class="form-text">{props.formText}</div>
      </div>
    </div>
  );
};

export default FormInput;
