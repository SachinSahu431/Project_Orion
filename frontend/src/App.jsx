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
import CeaAllowance from "./pages/CeaAllowance";
import Payment from "./pages/Payment";
import Performance from "./pages/Performance";
import Medical from "./pages/Medical";
import StaffRecruitment from "./pages/StaffRecruitment";
import ServiceRecords from "./pages/ServiceRecords";
import RTIForm from "./components/RTIForm";
import RTIView from "./components/RTIView";
import Attendance from "./pages/Attendance";
import CeaAllowanceForm from "./components/CEAAllowanceForm";
import CEAAllowancePrevApplication from "./components/CEAAllowancePrevApplications";
import ServiceRecordsCreate from "./components/ServiceRecordsCreate";
import ServiceRecordsSearch from "./components/ServiceRecordsSearch";
import PaymentForm from "./components/PaymentForm";
import PaymentView from "./components/PaymentView";
import PerformanceForm from "./components/PerformanceForm";
import PerformanceView from "./components/PerformanceView";
import MedicalRecordsSearch from "./components/MedicalRecordsSearch";
import MedicalRecordsCreate from "./components/MedicalRecordsCreate";
const navHeight = 65;
const contentHeight = "calc(100% - " + navHeight + "px)";

export default function App() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Router>
      <div className="container-fluid vh-100">
        <div className="row h-100 p-0 position-relative">
          <div
            className="d-flex flex-row p-2 m-0 w-100 shadow-sm"
            style={{ height: navHeight }}
          >
            <button
              className="btn btn-outline"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <span class="material-symbols-outlined align-middle">menu</span>
            </button>
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
                  <i className="bi bi-person"></i>
                </Link>
              </button>
            </div>
          </div>
          <div
            className={
              toggle
                ? "col-2 shadow-sm p-0 m-0 sidenav-list"
                : "col-2 shadow-sm p-0 m-0 sidenav-list d-none"
            }
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
                  <Link
                    to="/staff_service/medical"
                    className="list-group-item list-group-item-action"
                  >
                    Medical Records
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
            className={
              toggle
                ? "col-10 pt-0 p-2 overflow-auto"
                : "col-12 pt-0 p-2 overflow-auto"
            }
            style={{ height: contentHeight }}
          >
            <div className="pt-2 h-100">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>

                <Route path="/legal" element={<Legal />}></Route>
                <Route path="/legal/rti/create" element={<RTIForm />}></Route>
                <Route path="/legal/rti/view" element={<RTIView />}></Route>
                <Route path="/staff_service" element={<StaffService />}></Route>
                <Route
                  path="/staff_services/cea_allowance"
                  element={<CeaAllowance />}
                ></Route>
                <Route
                  path="/staff_service/cea_allowance/applyform"
                  element={<CeaAllowanceForm />}
                ></Route>
                <Route
                  path="/staff_service/cea_allowance/searchform"
                  element={<CEAAllowancePrevApplication />}
                ></Route>

                <Route
                  path="/staff_service/service_records"
                  element={<ServiceRecords />}
                ></Route>

                <Route
                  path="/staff_service/service_records/create"
                  element={<ServiceRecordsCreate />}
                ></Route>
                <Route
                  path="/staff_service/service_records/search"
                  element={<ServiceRecordsSearch />}
                ></Route>

                <Route path="/staff_service/attendance" element={<Attendance/>}></Route>

                <Route
                  path="/staff_service/payment"
                  element={<Payment />}
                ></Route>
                <Route
                  path="/staff_service/payment/applyform"
                  element={<PaymentForm />}
                ></Route>
                <Route
                  path="/staff_service/payment/view"
                  element={<PaymentView/>}
                ></Route>
                <Route
                  path="/staff_service/performance"
                  element={<Performance />}
                ></Route>
                                <Route
                  path="/staff_service/performance/create"
                  element={<PerformanceForm/>}
                ></Route>
                                <Route
                  path="/staff_service/performance/view"
                  element={<PerformanceView/>}
                ></Route>
                <Route
                  path="/staff_service/medical"
                  element={<Medical />}
                ></Route>
                                <Route
                  path="/staff_service/medical/view"
                  element={<MedicalRecordsSearch/>}
                ></Route>
                                <Route
                  path="/staff_service/medical/create"
                  element={<MedicalRecordsCreate/>}
                ></Route>

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
      </div>
    </Router>
  );
}
