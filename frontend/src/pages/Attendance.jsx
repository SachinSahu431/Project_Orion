import { useState } from "react";
import { Link } from "react-router-dom";
import AttendanceCard from "../components/AttendanceCard";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// count present days in attendanceRecords.dayList
const countPresentDays = (attendanceRecords) => {
  let presentDays = 0;
  attendanceRecords.dayList.forEach((day) => {
    if (day.present) {
      presentDays++;
    }
  });
  return presentDays;
};

const data = {
  labels: ["Red", "Blue", "Green"],
  datasets: [
    {
      label: "Attendance Count",
      data: [14, 19, 13],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const attendanceRecords = {
  name: "John Doe",
  email: "abc@abc.com",
  dateOfBirth: "1999-01-01",
  phone: "1000",
  gender: "male",
  // list of present days
  dayList: [
    { date: "1999-01-01", present: 1 },
    { date: "1999-01-02", present: 0 },
    { date: "1999-01-03", present: 0 },
    { date: "1999-04-04", present: 1 },
    { date: "1999-04-02", present: 0 },
    { date: "1999-04-03", present: 0 },
    { date: "1999-04-01", present: 1 },
    { date: "1999-01-02", present: 0 },
    { date: "1999-01-03", present: 0 },
    { date: "1999-01-04", present: 1 },
    { date: "1999-01-05", present: 0 },
  ],
};

export default function Attendance() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="row m-0 p-1 position-sticky top-0 bg-white">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/staff_service/attendance">
                  <span className="btn btn-outline p-0 border-0 link-dark">
                    Attendance
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/staff_service/attendance">
                  <span className="btn btn-outline p-0 border-0 link-primary">
                    View Attendance
                  </span>
                </Link>
              </li>
            </ol>
          </nav>
        </div>

        <div className="justify-content-between w-25 h-25 bg-white">
          <Pie
            data={{
              labels: ["Red", "Blue", "Green"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [
                    attendanceRecords.dayList.length -
                      countPresentDays(attendanceRecords),
                    2,
                    countPresentDays(attendanceRecords),
                  ],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
        <AttendanceCard
          name={attendanceRecords.name}
          dob={attendanceRecords.dateOfBirth}
          phone={attendanceRecords.phone}
          gender={attendanceRecords.gender}
          email={attendanceRecords.email}
          dayList={attendanceRecords.dayList}
        />
      </div>
    </>
  );
}
