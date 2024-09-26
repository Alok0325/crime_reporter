import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './navbar'
const Footer = () => {
  return (
    <footer className="custom-bg text-white pt-5 pb-4 ">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">

          {/* Company Info Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
            <p>
            Stay informed and help keep your community safe. Our platform allows you to report and track crime incidents easily and anonymously. 
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
            <p><a href="/about" className="text-white" style={{ textDecoration: 'none' }}>About Us</a></p>
            <p><a href="/services" className="text-white" style={{ textDecoration: 'none' }}>Services</a></p>
            <p><a href="/contact" className="text-white" style={{ textDecoration: 'none' }}>Contact Us</a></p>
            <p><a href="/faq" className="text-white" style={{ textDecoration: 'none' }}>FAQ</a></p>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> Jankipuram, Lucknow, Uttar Pradesh</p>
            <p><i className="fas fa-envelope mr-3"></i> info@company.com</p>
            <p><i className="fas fa-phone mr-3"></i>7054279700</p>
            <p><i className="fas fa-print mr-3"></i>7054279790</p>
          </div>

          {/* Social Section */}
          <div className="col-md-4 dcol-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
            <a href="https://facebook.com" className="text-white mr-4"><i class="bi bi-facebook fs-1"></i></a>
            <br />
            <a href="https://twitter.com" className="text-white mr-4"><i className="bi bi-twitter fs-2"></i></a>
            <br />
            <a href="https://instagram.com" className="text-white mr-4"><i className="bi bi-instagram fs-3"></i></a>
          </div>
          <br />

          <br />

        </div>

        {/* Footer Bottom */}
        <hr className="mb-4" />
        <div className="row align-items-center">

          <div className="col-md-7 col-lg-8">
            <p className="text-white">© 2024 Crime Reporter All Rights Reserved.</p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <a href="/" className="text-white">
                <i className="fab fa-cc-visa fa-lg"></i>
              </a>
              <a href="/" className="text-white">
                <i className="fab fa-cc-mastercard fa-lg"></i>
              </a>
              <a href="/" className="text-white">
                <i className="fab fa-cc-paypal fa-lg"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
