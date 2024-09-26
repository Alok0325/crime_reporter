import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function RecentData() {
  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/crimeReport/getAll");
        
        setRecentData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecentData(); // Call the async function inside useEffect
  }, []); 

  
  return (<>
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
    <Footer/>
    </>
  );
}

export default RecentData