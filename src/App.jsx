import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Card from './components/card';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import WhoAreWePage from './pages/WhoAreWePage';
import RecentData from './pages/RecentData';
import SafetyPage from './pages/safetyPage';
import RegisterComplain from './pages/RegisterComplain';

let card_content1_title = "Who Are We";
let card_content1_text = `
As dedicated crime reporters, we are committed to uncovering the truth behind the headlines. Our team tirelessly investigates and analyzes criminal activities.`;
let card_content1_pic = "./src/assets/WhoAREWE.jpeg";

let card_content2_title = "Recent Data";
let card_content2_text = "Crime rates fluctuate significantly across different regions and time periods, influenced by various social, economic, and environmental factors.";
let card_content2_pic = "./src/assets/data.jpeg";

let card_content3_title = "Safety Precautions";
let card_content3_text = "To ensure personal safety, always remain aware of your surroundings and avoid distractions, especially in unfamiliar areas. Keep your belongings secure and avoid displaying valuable items in public.";
let card_content3_pic = "./src/assets/safety.jpeg";

let card_content4_title = "Report A Crime";
let card_content4_text = "Start by giving your location and a brief description of the incident, including the type of crime and any injuries. Provide details about the suspect(s), such as their appearance, clothing, and any vehicle information, if applicable.";
let card_content4_pic = "./src/assets/crime_report.jpeg";

// This component controls the layout
function Layout() {
  const location = useLocation(); // Get current route

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path='/who-we-are' element={<WhoAreWePage />} />
          <Route path='/recent-data' element={<RecentData />} />
          <Route path='/safety-precautions' element={<SafetyPage />} />
          <Route path='/register-complain' element={<RegisterComplain />} />
          
          <Route path='/' element={(
            <div className="row justify-content-center">
              <div className="col-md-8"> {/* Container for the 2x2 layout */}
                <div className="row">
                  <div className="col-md-6 col-12 mt-2 mb-3"> {/* Card 1 */}
                    <Card title={card_content1_title} text={card_content1_text} card_pic={card_content1_pic} link='/who-we-are' />
                  </div>
                  <div className="col-md-6 col-12 mt-2 mb-3"> {/* Card 2 */}
                    <Card title={card_content2_title} text={card_content2_text} card_pic={card_content2_pic} link='/recent-data' />
                  </div>
                  <div className="col-md-6 col-12 mt-2 mb-3"> {/* Card 3 */}
                    <Card title={card_content3_title} text={card_content3_text} card_pic={card_content3_pic} link='/safety-precautions'/>
                  </div>
                  <div className="col-md-6 col-12 mt-2 mb-3"> {/* Card 4 */}
                    <Card title={card_content4_title} text={card_content4_text} card_pic={card_content4_pic} link='register-complain'/>
                  </div>
                </div>
              </div>
            </div>
          )} />
        </Routes>
      </div>

      {/* Conditionally render footer - only show on home route */}
      {location.pathname === '/' && <Footer />}
    </>
  );
}
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
