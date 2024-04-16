import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Eligibility.css"; // Import your CSS file for styling

const Eligibility = () => {
  const navigate = useNavigate();

  const headingStyle = {
    textAlign: 'center',
    fontSize: '28px',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
  }; 
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    caste: "",
    income: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if age is greater than 18
    if (formData.age > 18) {
      try {
        // Send POST request to backend to save form data
        const response = await fetch("http://localhost:5000/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Navigate to schemes page upon successful submission
          navigate("/schemes");
        } else {
          // Handle error response
          const errorData = await response.json();
          alert("Error: " + JSON.stringify(errorData));
        }
      } catch (error) {
        // Handle network errors or server errors
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again later.");
      }
    } else {
      // Display alert if age is not greater than 18
      alert("You are too young Dear , Currently not Eligible .");
    }
  };
  

  return (
    <div className="eligibility-form-container ">
      <div className="eligibility-form">
        <h2 style= {headingStyle}>Check Eligibility</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Caste:</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Income:</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        
          {/* Your form fields */}
        </form>
      </div>
    </div>
  );
};

export default Eligibility;
