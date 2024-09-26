import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import axios from "axios";

const RegisterComplain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    crime: "",
    image: null, // For the image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Get the selected file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("location", formData.location);
    formDataToSubmit.append("crime", formData.crime);
    formDataToSubmit.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://localhost:3000/crimeReport/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        crime: "",
        image: null, // Reset the image
      });
      alert("Case Registered!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      

      {/* Main Form Content */}
      <div className="container mt-5 mw-100">
        <h2 className="mb-4">Crime Reporting Form</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Form Fields */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              name="location"
              className="form-control"
              id="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter the location"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="crime" className="form-label">
              Type of Crime:
            </label>
            <select
              name="crime"
              className="form-select"
              id="crime"
              value={formData.crime}
              onChange={handleChange}
            >
              <option value="">Select Crime</option>
              <option value="Accident">Accident</option>
              <option value="Theft">Theft</option>
              <option value="Robbery">Robbery</option>
              <option value="Mob Lynching">Mob Lynching</option>
              <option value="Vandalism">Vandalism</option>
              <option value="Assault">Assault</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Upload Evidence (Image):
            </label>
            <input
              type="file"
              name="image"
              className="form-control"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <br />

      {/* Footer Outside of Container */}
      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </>
  );
};

export default RegisterComplain;
