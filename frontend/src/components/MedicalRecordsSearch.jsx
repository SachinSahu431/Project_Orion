import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";

export default function MedicalRecordsSearch() {
  const [loadedMedicalRecords, setLoadedMedicalRecords] = useState();
  const [eMail, setEMail] = useState("");

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:5000/api/medical/email/${eMail}`
      );
      const responsetools = resp.data;
      console.log(responsetools["medicalRecord"][0]);

      setLoadedMedicalRecords(responsetools["medicalRecord"][0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="row m-0 p-1 position-sticky top-0 bg-white">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/staff_service/medical/">
                  <span className="btn btn-outline p-0 border-0 link-dark">
                    Medical Records
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/staff_service/medical/view">
                  <span className="btn btn-outline p-0 border-0 link-primary">
                    View Medical Record
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 searchBox">
              <form className="row g-3 m-2">
                <h1>Search Records</h1>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="searchByEmail"
                    placeholder="Email ID"
                    onBlur={(e) => setEMail(e.target.value)}
                  />
                </div>
                <div className="mb-3 w-100 text-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={sendGetRequest}
                  >
                    <i className="bi bi-search p-2"></i>Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {!loadedMedicalRecords ? (
          <></>
        ) : (
          <>
            <DetailsCard
              name={loadedMedicalRecords.name}
              dob={loadedMedicalRecords.dateOfBirth}
              phone={loadedMedicalRecords.phone}
              gender={loadedMedicalRecords.gender}
              email={loadedMedicalRecords.email}
              medicalHistory={loadedMedicalRecords.medicalHistory}
            />
          </>
        )}
      </div>
    </>
  );
}
