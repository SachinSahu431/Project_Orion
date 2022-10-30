import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  //authenticate user
  const authenticateUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        account
      );
      console.log(res);

      if (res.status === 200) {
        localStorage.setItem("email", res.data.username);
        localStorage.setItem("phone", res.data.phone);
        localStorage.setItem("name", res.data.name);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="flex-fill"></div>
      <div className="row justify-content-center m-0">
        <div className="col-lg-4 col-md-8 col-12">
          <h3>Login Form</h3>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              onChange={(e) =>
                setAccount({ ...account, username: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
          </div>
          <div className="row m-2 justify-content-end">
            <div className="col-sm-9 text-end">
              <button
                type="submit"
                onClick={authenticateUser}
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
