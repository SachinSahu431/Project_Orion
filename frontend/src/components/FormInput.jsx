const FormInput = (props) => {
  <div class="row mb-3">
    <label for="exampleInputName" class="col-sm-3 col-form-label">
      {props.Name}
    </label>
    <div class="col-sm-9">
      <input
        type="text"
        name="name"
        class="form-control"
        id="exampleInputName"
        placeholder="Your name"
        value={props.name}
        onChange={props.handleInputChange}
        required
      />
      <div class="invalid-feedback">Name can't be blank</div>
      <div class="valid-feedback">Looks good!</div>
      <div class="form-text">Enter Name as on official documents</div>
    </div>
  </div>;
};

export default FormInput;
