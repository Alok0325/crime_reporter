import React from 'react';
import Footer from '../components/Footer';

function SafetyPage() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Content Section */}
        <div style={{ flex: '1', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>
            Safety Guides and Precautions
          </h1>

          <ul style={{ lineHeight: '1.8' }}>
            <li>
              <strong>Personal Information Protection</strong>
              <p>Keep personal details private. Refrain from sharing personal information such as address, phone number, or identification numbers when reporting a crime. Use a pseudonym or remain anonymous to protect your identity.</p>
            </li>

            <li>
              <strong>Evidence Handling</strong>
              <p>Handle evidence with care. When collecting evidence, wear gloves and use a clean container to store items. Avoid touching or tampering with evidence to preserve its integrity for investigations.</p>
            </li>

            <li>
              <strong>Online Safety</strong>
              <p>Avoid engaging with suspicious individuals or websites. Keep your device's software up-to-date, use strong passwords, and enable two-factor authentication to protect your account.</p>
            </li>

            <li>
              <strong>Witness Safety</strong>
              <p>If you witness a crime, prioritize your safety first. Move to a secure location, and contact authorities immediately. Avoid confronting suspects or putting yourself in harm's way.</p>
            </li>

            <li>
              <strong>Verify Information</strong>
              <p>Ensure the accuracy of information before sharing it on our platform. Avoid spreading misinformation or speculation that could compromise investigations or cause harm.</p>
            </li>

            <li>
              <strong>Collaborate with Authorities</strong>
              <p>Our platform is designed to support law enforcement agencies. Collaborate with authorities, and provide any requested information to aid investigations and bring criminals to justice.</p>
            </li>
          </ul>
        </div>

        
      </div>
    </>
  );
}

export default SafetyPage;
