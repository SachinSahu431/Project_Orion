import React from "react";

export default function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="d-flex flex-column h-100">
        <div className="row p-1 border-bottom shadow-sm">
          <div className="d-flex flex-row p-0 m-0 w-100 ">
            <img alt="IIT Tirupati Logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Indian_Institute_of_Technology_Tirupati_Logo.svg/1920px-Indian_Institute_of_Technology_Tirupati_Logo.svg.png" className="img bg-white p-1 rounded" style={{ratio: "1/1", height: "50px"}}></img>
            <div className="flex-fill my-auto pt-2 ms-2">
              <h4>Project Orion</h4>
            </div>
            <div className="my-auto ms-2">
              <button className="btn btn-primary pt-1 pb-1">Login / Logout</button>
            </div>
          </div>
        </div>
        <div className="row p-0 flex-fill">
          <div className="container-fluid">
            <div className="row h-100">
              <div className="col-3 border-end border-2 p-2">
              <div className="d-flex flex-column">
                <h5>Sidebar</h5>
              </div>
              </div>
              <div className="col-9">
              <div className="d-flex flex-column p-1">
                <div className="row">
                  <div className="d-flex flex-row">
                    <div className="border flex-fill p-2 m-2">
                    <h5> Hi👋, Sridhar Chimalakonda</h5>
                    </div>
                    <div className="col-4 border p-2 m-2">
                      <h5>🔔 Notification</h5>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-2 justify-content-center border-top fw-bold fs-6">Copyright@2022</div>
      </div>
    </div>
  );
}
