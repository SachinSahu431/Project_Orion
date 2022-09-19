import { useState, useEffect } from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";

export default function TrainingRecordsSearch() {
  const [switchstate, setswitchstate] = useState(false);
  const [loadedTrainingRecords, setLoadedTrainingRecords] = useState();
  const [email, setEMail] = useState("");
  const [records, setRecords] = useState();

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(`/training/email/${email}`);
      const responsetools = resp.data;
      console.log(responsetools["trainingRecord"][0]);

      setLoadedTrainingRecords(responsetools["trainingRecord"][0]);
    } catch (err) {
      console.error(err);
    }
  };

  const fillTable = (eRecord) => {
    return (
      <tr style={{ border: "2px solid blue" }}>
        <td style={{ border: "2px solid blue" }}>{eRecord.trainingName}</td>
        <td style={{ border: "2px solid blue" }}>
          {eRecord.trainingInstitute}
        </td>
        <td style={{ border: "2px solid blue" }}>{eRecord.trainingDomain}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.trainingYear}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.otherInfo}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.paymentAmount}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.timesTaken}</td>
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
      {!loadedTrainingRecords ? (
        <></>
      ) : (
        <>
          <DetailsCard
            name={loadedTrainingRecords.name}
            dob={loadedTrainingRecords.dateOfBirth}
            phone={loadedTrainingRecords.phone}
            gender={loadedTrainingRecords.gender}
            email={loadedTrainingRecords.email}
          />

          <table style={{ border: "2px solid blue" }}>
            <tr style={{ border: "2px solid blue" }}>
              <th style={{ border: "2px solid blue" }}>Training Name</th>
              <th style={{ border: "2px solid blue" }}>Training Institute</th>
              <th style={{ border: "2px solid blue" }}>Training Domain</th>
              <th style={{ border: "2px solid blue" }}>Training Year</th>
              <th style={{ border: "2px solid blue" }}>Other Info</th>
              <th style={{ border: "2px solid blue" }}>Payment Amount</th>
              <th style={{ border: "2px solid blue" }}>Time taken (Years)</th>
            </tr>
            {loadedTrainingRecords.trainingHistory.map(fillTable)}
          </table>
          <br />
          <br />
          <br />
        </>
      )}
    </>
  );
}
