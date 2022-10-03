const AttendanceCard = (props) => {
  return (
    <div className="row m-0 p-1 justify-content-center">
      <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
        <div className="d-flex flex-column p-3 rounded border shadow-sm">
          <h4 className="text-center">Attendance Details</h4>
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
          {props.dayList ? (
            <>
              <h6 className="ps-3 mt-2">Attendance Records</h6>
              <div className="row m-0 mb-2 p-2">
                {props.dayList.map((item, id) => {
                  return (
                    <div className="card my-1 p-2">
                      <div className="card-title fw-bold fs-6">
                        Record #{id + 1}
                      </div>
                      <div className="card-body">
                        <div className="row m-0">
                          <h6 className="col-6 col-md-3 col-lg-2">Date</h6>
                          <span className="col">{item.date}</span>
                        </div>
                        <div className="row m-0">
                          <h6 className="col-6 col-md-3 col-lg-2">Present</h6>
                          <span className="col">
                            {item.present ? (
                              <img src="https://img.icons8.com/emoji/48/228BE6/check-mark-button-emoji.png" />
                            ) : (
                              <img src="https://img.icons8.com/emoji/48/000000/cross-mark-button-emoji.png" />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
