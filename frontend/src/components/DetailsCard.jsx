const DetailsCard = (props) => {
  return (
    <div className="row m-0 p-1 justify-content-center">
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
        <div className="d-flex flex-column p-3 rounded border shadow-sm">
          <h4 className="text-center">Service Record of the Employee</h4>
          <div className="row m-0 mb-2 mt-2">
            <div className="col-sm-3">
              <h6>Name</h6>
            </div>
            <div className="col-sm-9">
              <span>{props.name}</span>
            </div>
          </div>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <h6>Date of Birth</h6>
            </div>
            <div className="col-sm-9">
              <span>{props.dob}</span>
            </div>
          </div>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <h6>Gender</h6>
            </div>
            <div className="col-sm-9">
              <span>{props.gender}</span>
            </div>
          </div>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <h6>Email Address</h6>
            </div>
            <div className="col-sm-9">
              <span>{props.email}</span>
            </div>
          </div>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <h6>Phone Number</h6>
            </div>
            <div className="col-sm-9">
              <span>{props.phone}</span>
            </div>
          </div>
          {props.additional ? (
            <>
              <h6 className="ps-3 mt-2">eService Record</h6>
              <div className="row m-0 mb-2 p-2">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Job</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.additional.map((item) => {
                      return (
                        <tr>
                          <td>{item.jobDescription}</td>
                          <td>{item.record}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
