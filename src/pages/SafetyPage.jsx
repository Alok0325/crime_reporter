import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

function SafetyPage() {
  const navigate=useNavigate();
  return (
    <>  
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Content Section */}
        <div style={{ flex: '1', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>
            Safety Guides and Precautions
          </h1>

          {/*Go to Home Button*/}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <button 
              onClick={() => navigate('/')}  // Navigate to home page
              style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px' }}
            >
              Go to Home
            </button>
          </div>

          <ul style={{ lineHeight: '1.8' }}>
            <li>
              <strong>Personal Information Protection</strong>
              <p>When reporting a crime, it's essential to keep your personal information private. Avoid sharing details such as your home address, phone number, or any form of identification. Use a pseudonym or opt to remain anonymous to safeguard your identity. This protects you from potential retaliation or unwanted attention. Anonymity ensures that your report remains focused on the crime without putting your privacy at risk..</p>
            </li>

            <li>
              <strong>Evidence Handling</strong>
              <p>Proper handling of evidence is crucial for its integrity in investigations. Always wear gloves to prevent contamination, and store the items in clean, secure containers. Avoid touching or tampering with the evidence, as this could compromise its authenticity or value. Whether it's a physical object, document, or digital file, treat evidence with care to ensure it can be used effectively during the investigation process.</p>
            </li>

            <li>
              <strong>Online Safety</strong>
              <p>Maintaining online safety is vital when interacting in digital spaces, especially when reporting crimes or suspicious activities. Stay cautious of unknown individuals and avoid engaging with untrustworthy websites. Ensure your device's software is regularly updated, use strong and unique passwords, and enable two-factor authentication (2FA) to enhance account security. This reduces the risk of cyber threats and identity theft.</p>
            </li>

            <li>
              <strong>Witness Safety</strong>
              <p>If you witness a crime, prioritize your own safety above all else. Move to a secure area where you can observe without being in immediate danger, and contact authorities as soon as possible. Do not attempt to confront the suspect or place yourself in a risky situation. Your safety ensures you can provide valuable information to law enforcement without jeopardizing your well-being.</p>
            </li>

            <li>
              <strong>Verify Information</strong>
              <p>Before sharing any information, especially on public platforms, verify the facts. Sharing incorrect details or unverified information can mislead authorities and the public, potentially hindering an investigation or causing unnecessary panic. Always double-check your sources and ensure what you're reporting is accurate to maintain credibility and assist in the justice process.</p>
            </li>

            <li>
              <strong>Collaborate with Authorities</strong>
              <p>Our platform is designed to facilitate collaboration with law enforcement agencies. When necessary, provide any requested information or evidence to aid in investigations. Working closely with authorities helps expedite the justice process, ensuring that criminals are brought to account. Your cooperation can make a significant difference in resolving cases efficiently.</p>
            </li>
          </ul>
        </div>

        
      </div>
      <Footer/>
    </>
  );
}

export default SafetyPage;
