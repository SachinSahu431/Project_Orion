import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import swal from "sweetalert2";
import axios from "axios";

const Applications = () => {
  const [loadedRecords, setLoadedRecords] = useState();
  const [loading, setLoading] = useState(false);
  const [dep, setDep] = useState("");

  const sendGetRequest = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/recruitment/department/${dep}`);
      console.log(res.data);
      const responsetools = res.data;
      //   console.log(responsetools["medicalRecord"][0]);
      setLoading(false);
      setLoadedRecords(responsetools["recruitmentRecord"]);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const acceptApplication = async (id) => {
    console.log(id);
    try {
      const res = await axios.get(`/recruitment/success/${id}`);
      console.log(res.data);
      await swal.fire("Success!", "Application Accepted!", "success");
      sendGetRequest();
    } catch (err) {
      console.error(err);
    }
  };

  const rejectApplication = async (id) => {
    try {
      const res = await axios.get(`/recruitment/fail/${id}`);
      console.log(res.data);
      await swal.fire("Success!", "Application Rejected!", "success");
      sendGetRequest();
    } catch (err) {
      console.error(err);
    }
  };

  const renderBody = () => {
    if (loading) {
    }
    if (!loading && loadedRecords) {
      return (
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Qualification</th>
            <th>resume</th>
            <th>yearsOfExperience</th>
            <th>bio</th>
            <th>dateOfBirth</th>
          </tr>

          {loadedRecords.map((record, id) => {
            let temp = `application${record._id}`;

            return (
              <tr className={temp}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.qualification}</td>
                <td>{record.resume}</td>
                <td>{record.yearsOfExperience}</td>
                <td>{record.bio}</td>
                <td>{record.dateOfBirth}</td>
                <td
                  style={{ color: "red" }}
                  onClick={() => {
                    rejectApplication(record._id);
                  }}
                >
                  <i className="bi bi-trash3-fill "></i>
                </td>
                <td
                  onClick={() => {
                    acceptApplication(record._id);
                  }}
                >
                  <i class="bi bi-bookmark"></i>
                </td>
              </tr>
            );
          }, [])}
        </table>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 searchBox">
            <form className="row g-3 m-2">
              <h1>View All Applications</h1>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="searchByDepartment"
                  placeholder="Department"
                  onBlur={(e) => setDep(e.target.value)}
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

          {renderBody()}
        </div>
      </div>
    </>
  );
};

export default Applications;
