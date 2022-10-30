import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Signup() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleInputs = (e) => {
    // console.log(e.target.value, e.target.name);
    let name = e.target.name;
    let value = e.target.value;

    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/signup",
      account
    );

    console.log(response);

    if (response.status === 200) {
      await Swal.fire({
        title: "Success!",
        text: "You have successfully signed up!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      window.location.href = "/login";
    } else {
      Swal.fire({
        title: "Error!",
        text: response.data,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className="d-flex flex-column h-100">
      <div className="flex-fill"></div>
      <div className="row justify-content-center m-0">
        <div className="col-lg-4 col-md-8 col-12">
          <h3>Signup Form</h3>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="name"
              value={account.username}
              onChange={handleInputs}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={account.email}
              onChange={handleInputs}
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              value={account.phone}
              onChange={handleInputs}
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={account.password}
              onChange={handleInputs}
              placeholder="Enter Password"
            />
          </div>
          <div className="row m-2 justify-content-end">
            <div className="col-sm-9 text-end">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-fill"></div>
    </div>
  );
}
