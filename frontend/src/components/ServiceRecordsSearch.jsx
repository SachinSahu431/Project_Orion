import { useState, useEffect } from "react";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";

export default function ServiceRecordsSearch() {
  const [switchstate, setswitchstate] = useState(false);
  const [loadedServiceRecords, setLoadedServiceRecords] = useState();
  const [phoneNum, setPhoneNum] = useState("");
  const [records, setRecords] = useState();

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:5000/api/service/phone/${phoneNum}`
      );
      const responsetools = resp.data;
      console.log(responsetools["serviceRecord"][0]);

      setLoadedServiceRecords(responsetools["serviceRecord"][0]);
    } catch (err) {
      console.error(err);
    }
  };

  const fillTable = (eRecord) => {
    return (
      <tr style={{ border: "2px solid blue" }}>
        <td style={{ border: "2px solid blue" }}>{eRecord.jobDescription}</td>
        <td style={{ border: "2px solid blue" }}>{eRecord.record}</td>
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
                  id="searchByPhone"
                  placeholder="Phone Number"
                  onBlur={(e) => setPhoneNum(e.target.value)}
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
      {!loadedServiceRecords ? (
        <></>
      ) : (
        <>
          <DetailsCard
            name={loadedServiceRecords.name}
            dob={loadedServiceRecords.dateOfBirth}
            phone={loadedServiceRecords.phone}
            gender={loadedServiceRecords.gender}
            email={loadedServiceRecords.email}
          />

          <table style={{ border: "2px solid blue" }}>
            <tr style={{ border: "2px solid blue" }}>
              <th style={{ border: "2px solid blue" }}>Record</th>
              <th style={{ border: "2px solid blue" }}>Job Desc</th>
            </tr>
            {/* {loadedServiceRecords.eServiceRecord.map(fillTable)} */}
          </table>
        </>
      )}
    </>
  );
}
