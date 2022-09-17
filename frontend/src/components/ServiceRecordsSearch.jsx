import { useState, useEffect } from "react";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";
import { Link } from "react-router-dom";

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


  return (
    <>
      <div className="d-flex flex-column">
        <div className="row m-0 p-1">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/staff_service/service_records">
                  <span className="btn btn-outline p-0 border-0 link-dark">
                    Service Records
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/staff_service/service_records/search">
                  <span className="btn btn-outline p-0 border-0 link-primary">
                    View Service Record
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="container pb-3">
          <div className="row justify-content-center">
            <div className="col-lg-6 rounded searchBox">
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
                additional={loadedServiceRecords.eServiceRecord}
              />
            </>
          )}
      </div>
    </>
  );
}
