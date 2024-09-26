import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

function WhoAreWePage() {
  const navigate = useNavigate();

  return (
    <>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      {/* Go Back Button */}
      <button
        onClick={() => navigate('/')} // Adjust the path if your home page has a different route
        style={{
          padding: '10px 20px',
          margin: '20px 0',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go Back to Home Page
      </button>

      {/* Welcome Section */}
      <h1 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '20px' }}>
        Welcome to Citizen Crime Reporting Portal
      </h1>
      <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px' }}>
        Your Secure and Confidential Crime Reporting Platform
      </p>
      
      {/* Introduction */}
      <p>
        At Citizen Crime Reporting portal, we empower citizens to take an active role in maintaining law and order in their communities.
        Our platform provides a safe, convenient, and anonymous way to report crimes and suspicious activities, ensuring your personal information remains protected.
      </p>
      
      {/* Mission Section */}
      <h2 style={{ color: '#3498db', marginTop: '30px' }}>Our Mission</h2>
      <p>
        Citizen Crime Reporting portal is dedicated to creating a secure and supportive environment where individuals feel encouraged to report crimes
        without fear of retaliation or unwanted attention. We strive to bridge the gap between citizens and law enforcement agencies, facilitating efficient and effective investigations.
      </p>

      {/* What We Do Section */}
      <h2 style={{ color: '#3498db', marginTop: '30px' }}>What We Do</h2>
      <ul>
        <li><strong>Evidence Management:</strong> Upload and store evidence securely, maintaining its integrity for investigations.</li>
        <li><strong>Online Safety:</strong> Our platform ensures your digital security, protecting against cyber threats and identity theft.</li>
        <li><strong>Verification and Validation:</strong> Our team verifies reported information to ensure accuracy and credibility.</li>
        <li><strong>Collaboration with Authorities:</strong> We work closely with law enforcement agencies to expedite investigations and bring perpetrators to justice.</li>
      </ul>

      {/* How We Help Section */}
      <h2 style={{ color: '#3498db', marginTop: '30px' }}>How We Help</h2>
      <p>Citizen Crime Reporting portal provides numerous benefits to citizens:</p>
      <ul>
        <li><strong>Convenience:</strong> Report crimes from anywhere, at any time, using our user-friendly platform.</li>
        <li><strong>Assurance:</strong> Know that your report is being handled securely and confidentially.</li>
        <li><strong>Impact:</strong> Contribute to creating a safer community.</li>
        <li><strong>Transparency:</strong> Track the progress of your report and receive updates.</li>
      </ul>

      {/* Our Values Section */}
      <h2 style={{ color: '#3498db', marginTop: '30px' }}>Our Values</h2>
      <ul>
        <li><strong>Privacy:</strong> Protecting your identity and personal information.</li>
        <li><strong>Security:</strong> Ensuring the integrity of evidence and online interactions.</li>
        <li><strong>Accuracy:</strong> Verifying reported information for credibility.</li>
        <li><strong>Collaboration:</strong> Working with law enforcement agencies for effective investigations.</li>
        <li><strong>Empowerment:</strong> Encouraging citizens to take an active role in maintaining community safety.</li>
      </ul>

      {/* Join the Movement Section */}
      <h2 style={{ color: '#3498db', marginTop: '30px' }}>Join the Movement</h2>
      <p>
        Together, let's build a safer, more just society. Report crimes confidently and anonymously with Citizen Crime Reporting portal. 
        If you have witnessed or are aware of a crime, report it today and contribute to creating a better tomorrow.
      </p>

      {/* Contact Us Section */}
      <h2 style={{ color: '#3498db', marginTop: '30px' }}>Contact Us</h2>
      <p>
        For more information, feedback, or support, please contact us at <strong>[email address]</strong> or +91 [phone number].
      </p>

      {/* Stay Connected Section */}
      <h2 style={{ color: '#3498db', marginTop: '30px' }}>Stay Connected</h2>
      <p>
        Follow us on social media to stay updated on our initiatives and success stories:
      </p>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>

      <p style={{ textAlign: 'center', marginTop: '40px', fontStyle: 'italic' }}>
        Remember, your report can make a difference. Report confidently, report anonymously, report with Citizen Crime Reporting portal.
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default WhoAreWePage;
