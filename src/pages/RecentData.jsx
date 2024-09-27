import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { MapContainer } from "react-leaflet";
import MapPage from "./MapPage";
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function RecentData() {
  const [recentData, setRecentData] = useState([]);
  const [chartData, setChartData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/crimeReport/getAll");
        setRecentData(response.data);

        // Create a map to count crimes by city
        const cityCrimeCount = response.data.reduce((acc, report) => {
          const city = report.location;
          if (acc[city]) {
            acc[city]++;
          } else {
            acc[city] = 1;
          }
          return acc;
        }, {});

        // Prepare data for the chart
        const cities = Object.keys(cityCrimeCount);
        const crimeCounts = Object.values(cityCrimeCount);

        setChartData({
          labels: cities,
          datasets: [
            {
              label: 'Crime Reports by City',
              data: crimeCounts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecentData();
  }, []);

  // Button to navigate to the map page
  const goToMap = () => {
    navigate("/map");
  };

  return (
    <>
      <div>
        <h2>Recent Crime Reports</h2>
        {recentData.length > 0 ? (
          <ul>
            {recentData.map((report) => (
              <li key={report.reportId}>
                <Link to={'/crimeReport/${report.reportId}'}>
                  {report.name} - {report.location}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent data available.</p>
        )}

        <div>
          <h3>Crime Reports by City</h3>
          {chartData.labels ? (
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Crime Reports Distribution by City',
                  },
                },
              }}
            />
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
        {/* Button to navigate to the map page */}

          
        <button onClick={goToMap}>View Crime Map</button>
      </div>
      <Footer />
    </>
  );
}

export default RecentData;