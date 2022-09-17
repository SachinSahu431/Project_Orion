import { useState, useEffect } from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";

export default function MedicalRecordsSearch() {
  const [switchstate, setswitchstate] = useState(false);
  const [loadedMedicalRecords, setLoadedMedicalRecords] = useState();
  const [eMail, setEMail] = useState("");
  const [records, setRecords] = useState();

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

  const fillTable = (eRecord) => {
    return (
      <tr style={{ border: "2px solid blue" }}>
        <td style={{ border: "2px solid blue" }}>{eRecord.diagnosis}</td>
        <td style={{ border: "2px solid blue" }}>
          {eRecord.referredPhysician}
        </td>
        <td style={{ border: "2px solid blue" }}>{eRecord.referredClinic}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.date}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.severity}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.otherInfo}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.paymentAmount}</td>
      </tr>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 border border-2 rounded shadow-sm searchBox">
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
          />

          <table style={{ border: "2px solid blue" }}>
            <tr style={{ border: "2px solid blue" }}>
              <th style={{ border: "2px solid blue" }}>Daignosis</th>
              <th style={{ border: "2px solid blue" }}>Referred Physician</th>
              <th style={{ border: "2px solid blue" }}>Referred Clinic</th>
              <th style={{ border: "2px solid blue" }}>Date</th>
              <th style={{ border: "2px solid blue" }}>Severity</th>
              <th style={{ border: "2px solid blue" }}>Other Info</th>
              <th style={{ border: "2px solid blue" }}>Payment Amount</th>
            </tr>
            {loadedMedicalRecords.medicalHistory.map(fillTable)}
          </table>
          <br />
          <br />
          <br />
        </>
      )}
    </>
  );
}
