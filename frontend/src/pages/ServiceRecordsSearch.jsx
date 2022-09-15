import { useState, useEffect } from "react";
import axios from "axios";

export default function ServiceRecordsSearch() {
  //------------------------------------------------------------------------------------//
  const [switchstate, setswitchstate] = useState(false);
  const [loadedServiceRecords, setLoadedServiceRecords] = useState([]);
  const [phoneNum, setPhoneNum] = useState("");
  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:5000/api/service/phone/${phoneNum}`
        );
        const responsetools = resp.data;
        //console.log(responsetools);
        const posts = [];
        for (const key in responsetools) {
          posts.push({ ...responsetools[key], id: key });
        }
        //console.log(posts);
        setLoadedServiceRecords(posts);
        console.log(loadedServiceRecords);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    sendGetRequest();
    //axios
    //     .get(`http://localhost:5000/api/service/phone/${phoneNum}`)
    //     .then((res) => {
    //       const responsetools = res.data;
    //       //console.log(responsetools);
    //       // const posts = [];
    //       // for (const key in responsetools) {
    //       //   posts.push({...responsetools[key], id: key});
    //       // }
    //       //console.log(posts);
    //       setLoadedServiceRecords(responsetools);
    //       console.log(loadedServiceRecords);
    //     })
    //     .catch((error) => {
    //       console.log(error.response);
    //     });
  }, [switchstate]);
  //------------------------------------------------------------------------------------//

  //------------------------------------------------------------------------------//
  return (
    <>
      <div className="d-flex flex-column">
        <h3 className="p-2">Service Records</h3>
        <div className="row m-0 p-3">
          <h4>Actions</h4>
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Create or Append to Service Record!
                </h5>
                <p>
                  Fill the necessary details for creating or appending to the
                  service record.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Your Service Record</h5>
                <p>View your service record</p>
              </div>
            </div>
          </div>
        </div>
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
                    onClick={() =>
                      setswitchstate((switchstate) => !switchstate)
                    }
                  >
                    <i className="bi bi-search p-2"></i>Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {loadedServiceRecords &&
          loadedServiceRecords.map((blog) => (
            <div key={blog.id}>
              <h1>{blog[0].name}</h1>

              <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
                <div className="d-flex flex-column p-3 rounded border shadow-sm">
                  <h4 className="text-center">Your Record</h4>
                  <div className="row m-0 mb-2">
                    <div className="col-sm-3">
                      <span className="fw-bold">Full Name</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Siddhartha G</span>
                    </div>
                  </div>
                  <div className="row m-0 mb-2">
                    <div className="col-sm-3">
                      <span className="fw-bold">Date of Birth</span>
                    </div>
                    <div className="col-sm-9">
                      <span>18/91/2023</span>
                    </div>
                  </div>
                  <div className="row m-0 mb-2">
                    <div className="col-sm-3">
                      <span className="fw-bold">Gender</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Male</span>
                    </div>
                  </div>
                  <div className="row m-0 mb-2">
                    <div className="col-sm-3">
                      <span className="fw-bold">Email Address</span>
                    </div>
                    <div className="col-sm-9">
                      <span>SiddharthaG@gmail.com</span>
                    </div>
                  </div>
                  <div className="row m-0 mb-2">
                    <div className="col-sm-3">
                      <span className="fw-bold">Phone Number</span>
                    </div>
                    <div className="col-sm-9">
                      <span>987543211</span>
                    </div>
                  </div>
                  <div className="row m-0 mt-3">
                    <div className="col-sm-3">
                      <span className="fw-bold fs-6">Records</span>
                    </div>
                  </div>
                  <div className="row m-0 ms-2 mt-1">
                    <div className="col-12">
                      <span className="fw-bold">Description:</span>{" "}
                      <span>DDSDFAS</span>
                      <p className="fw-bold m-0">Record Entry:</p>
                      <p>
                        Loreasdfadsfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
