import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Legal from "./pages/Legal";
import StaffService from "./pages/StaffService";
import PropertyReturns from "./pages/PropertyReturns";
import Visiting from "./pages/Visiting";
import Training from "./pages/Training";
import Profile from "./pages/Profile";
import FacultyRecruitment from "./pages/FacultyRecruitment";
import StaffRecruitment from "./pages/StaffRecruitment";

const navHeight = 65;
const contentHeight = "calc(100% - " + navHeight + "px)";

export default function App() {
  return (
    <Router>
      <div className="container-fluid vh-100">
        <div className="row h-100 p-0 position-relative">
          <div
            className="d-flex flex-row p-2 m-0 w-100 shadow-sm"
            style={{ height: navHeight }}
          >
            <img
              alt="IIT Tirupati Logo"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Indian_Institute_of_Technology_Tirupati_Logo.svg/1920px-Indian_Institute_of_Technology_Tirupati_Logo.svg.png"
              className="img bg-white p-1 rounded"
              style={{ ratio: "1/1", height: "50px", width: "80px" }}
            ></img>
            <div className="flex-fill my-auto pt-2 ms-2">
              <h4 className="font-primary">Project Orion</h4>
            </div>
            <div className="my-auto ms-2">
              <button className="btn btn-dark-outline fs-5 rounded-5 border">
                <Link to="/profile">
                  <i class="bi bi-person"></i>
                </Link>
              </button>
            </div>
          </div>
          <div
            className="col-2 shadow-sm p-0 m-0 sidenav-list"
            style={{ height: contentHeight }}
          >
            <ul className="list-group mt-1 list-group-flush">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link
                to="/legal"
                className="list-group-item list-group-item-action"
              >
                RTI & Legal Cell
              </Link>
              <Link to="/staff_service" className="list-group-item">
                <span>Staff Services</span>
                <ul
                  className="list-group list-group-flush within-list"
                  id="staff-list"
                >
                  <Link
                    to="/staff_services/cea_allowance"
                    className="list-group-item list-group-item-action"
                  >
                    CEA Allowance
                  </Link>
                  <Link
                    to="/staff_service/service_records"
                    className="list-group-item list-group-item-action"
                  >
                    Institute Service Records
                  </Link>
                  <Link
                    to="/staff_service/attendance"
                    className="list-group-item list-group-item-action"
                  >
                    Staff Attendance Management
                  </Link>
                  <Link
                    to="/staff_service/payment"
                    className="list-group-item list-group-item-action"
                  >
                    Staff Payment Management
                  </Link>
                  <Link
                    to="/staff_service/performance"
                    className="list-group-item list-group-item-action"
                  >
                    Staff Performance Management
                  </Link>
                </ul>
              </Link>
              <Link
                to="/training"
                className="list-group-item list-group-item-action"
              >
                Training Management
              </Link>
              <Link
                to="/property_returns"
                className="list-group-item list-group-item-action"
              >
                Annual Property Returns
              </Link>
              <Link
                to="/visiting"
                className="list-group-item list-group-item-action"
              >
                Adjunct/Visiting Faculty Details
              </Link>
              <Link
                to="/faculty_recruitment"
                className="list-group-item list-group-item-action"
              >
                Faculty Recruitment Portal
              </Link>
              <Link
                to="/staff_recruitment"
                className="list-group-item list-group-item-action"
              >
                Staff Recruitment Portal
              </Link>
            </ul>
          </div>
          <div
            className="col-10 p-2"
            style={{ overflowY: "scroll", height: contentHeight }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/legal" element={<Legal />}></Route>
              <Route path="/staff_service" element={<StaffService />}></Route>
              {/* <Route path="/staff_services/cea_allowance" element={<CEAAllowance/>}></Route>
            <Route path="/staff_service/service_records" element={<ServiceRecords/>}></Route>
            <Route path="/staff_service/attendance" element={<Attendance/>}></Route>
            <Route path="/staff_service/payment" element={<Payment/>}></Route>
            <Route path="/staff_service/performance" element={<Performance/>}></Route>
            */}
              <Route path="/training" element={<Training />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route
                path="/property_returns"
                element={<PropertyReturns />}
              ></Route>
              <Route path="/visiting" element={<Visiting />}></Route>
              <Route
                path="/faculty_recruitment"
                element={<FacultyRecruitment />}
              ></Route>
              <Route
                path="/staff_recruitment"
                element={<StaffRecruitment />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
