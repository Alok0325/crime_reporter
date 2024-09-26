import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecentData() {
  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/crimeReport/getAll");
        setRecentData(response.data.crimeReports);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecentData(); // Call the async function inside useEffect
  }, []); // Empty dependency array to only run on component mount

  return (
    <div>
      <h2>Recent Crime Reports</h2>
      {recentData.length > 0 ? (
        <ul>
          {recentData.map((report) => (
            <li key={report.reportId}>
              <Link to={`/crimeReport/${report.reportId}`}>
                {report.name} - {report.location}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent data available.</p>
      )}
    </div>
  );
}

export default RecentData;
