const DetailsCard = (props) => {
  return (
    <div>
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
        <div className="d-flex flex-column p-3 rounded border shadow-sm">
          <h4 className="text-center">Details</h4>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <span className="fw-bold">Name</span>
            </div>
            <div className="col-sm-9">
              <span>{props.name}</span>
            </div>
          </div>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <span className="fw-bold">Date of Birth</span>
            </div>
            <div className="col-sm-9">
              <span>{props.dob}</span>
            </div>
          </div>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <span className="fw-bold">Gender</span>
            </div>
            <div className="col-sm-9">
              <span>{props.gender}</span>
            </div>
          </div>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <span className="fw-bold">Email Address</span>
            </div>
            <div className="col-sm-9">
              <span>{props.email}</span>
            </div>
          </div>
          <div className="row m-0 mb-2">
            <div className="col-sm-3">
              <span className="fw-bold">Phone Number</span>
            </div>
            <div className="col-sm-9">
              <span>{props.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
