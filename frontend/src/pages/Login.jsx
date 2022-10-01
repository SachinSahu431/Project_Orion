export default function Login() {
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="row m-2 justify-content-end">
            <div className="col-sm-9 text-end">
              <button type="submit" className="btn btn-primary">
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
