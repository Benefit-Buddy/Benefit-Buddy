import React, { useState } from 'react';
import './Feedback.css';

import Navbar from "../Navbar/Navbar";


const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the feedback
    console.log('Feedback submitted:', feedback);
    // Optionally, you can clear the feedback input after submission
    setFeedback('');
  };

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div>
    <Navbar/>
    <div className="feedback-container">

      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="feedback-input"
          placeholder="Type your feedback here..."
          value={feedback}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
};

export default Feedback;
