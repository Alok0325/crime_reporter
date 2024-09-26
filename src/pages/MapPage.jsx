import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapPage() {
  const [crimeData, setCrimeData] = useState([]);

  useEffect(() => {
    const fetchCrimeData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/crimeReport/getAll");
        setCrimeData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCrimeData();
  }, []);

  return (
    <div>
      <h2>Crime Map of India</h2>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Loop through the crime data to place markers on the map */}
        {crimeData.map((report, index) => (
          <Marker
            key={index}
            position={[report.latitude, report.longitude]}
          >
            <Popup>
              {${report.location}: ${report.crimeCount} crimes}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapPage;