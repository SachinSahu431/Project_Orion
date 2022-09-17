export default function RTIView(){
    return (<div className="py-2">
    <div className="card">
      <div className="card-header d-flex">
        <span className="fw-bold flex-fill">
          Request ID: <span>(MongoID of Request)</span>
        </span>
        <span className="fw-bold ms-auto text-success">●</span>
      </div>
      <div className="card-body">
        <div className="row m-0">
          <p>
            <span className="fw-bold">Applicant Name: </span>
            <span className="ps-1">Siddhartha G</span>
          </p>
          <p>
            <span className="fw-bold">Applicant Email: </span>
            <span className="ps-1">cs20b040@iittp.ac.in</span>
          </p>
          <p>
            <span className="fw-bold">Applicant Phone Number: </span>
            <span className="ps-1">987654321</span>
          </p>
          <div className="m-2 border p-2 rounded">
            <h5 className="fw-bold mb-2">RTI Request Details:</h5>
            <p className="mb-2">
              <span className="fw-bold">Query Type: </span>
              <span className="ps-1">Medical</span>
            </p>
            <p>
              <span className="fw-bold pe-2">RTI Request:</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus faucibus ut sapien ut posuere. Praesent eleifend
              nisi erat, vitae faucibus sem pharetra ut. Praesent tempus
              metus dolor, non dapibus ipsum maximus vel. Praesent
              blandit aliquam lorem eu condimentum. Suspendisse dictum
              sed elit vel faucibus. Nulla venenatis eros ac nunc
              vehicula, eu finibus felis eleifend. Cras suscipit leo at
              interdum bibendum. Phasellus urna massa, rutrum non purus
              vitae, aliquet pretium ante. Sed malesuada velit quis
              augue mattis varius. Quisque in arcu a metus imperdiet
              sodales. Aliquam nec facilisis quam. Suspendisse potenti.
            </p>
          </div>
          <p>
            <span className="fw-bold">Application Status:</span>
            <span>
              <span className="text-success p-1">Processed</span>
            </span>
            <span>
              <span className="text-primary p-1">Queued</span>
            </span>
            <span>
              <span className="text-danger p-1">
                Rejected(Bro u are asking for too much)
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>)
}