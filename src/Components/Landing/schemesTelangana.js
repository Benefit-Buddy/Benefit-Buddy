import React, { useState } from "react";
import "./Schemes.css";
import Navbar from "../Navbar/Navbar";

const Schemes = () => {
  const [showEligibilityCheck, setShowEligibilityCheck] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isEligible, setIsEligible] = useState(null);
  const [selectedScheme, setSelectedScheme] = useState(null);

  const questions = [
    "Are you a resident of Telangana?",
    "Are you above 18 years of age?",
    "Do you belong to the specified category?",
    "Do you meet the income criteria?"
  ];

  const handleEligibilityCheck = () => {
    const allYes = answers.every(answer => answer === "Yes");
    setIsEligible(allYes);
  };

  const handleAnswerSelect = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const toggleEligibilityCheck = (scheme) => {
    setShowEligibilityCheck(!showEligibilityCheck);
    setCurrentQuestion(0);
    setAnswers([]);
    setIsEligible(null);
    setSelectedScheme(scheme);
  };

  const schemes = [
    {
      name: "Double Bedroom Housing Scheme (2BHK Scheme)",
      description: "The government of Telangana formulated the double bedroom housing scheme in the month of October 2015 with a view to providing dignity to the poor by providing 100% subsidized housing. There is no beneficiary contribution under this scheme which is one of its kind. In rural areas, beneficiaries solely depend on seasonal conditions for their earnings, the 2BHK housing helped in protecting them from debt traps as was the case in the past.",
      questions: questions[0]
    },
    // Add other schemes
  ];

  const EligibilityCheck = () => (
    <div className="eligibility-check">
      <h2>Am I Eligible for {selectedScheme.name}?</h2>
      <div className="question">{questions[currentQuestion]}</div>
      <div className="answer-buttons">
        {currentQuestion !== questions.length  && (
          <>
            <button onClick={() => handleAnswerSelect("Yes")}>Yes</button>
            <button onClick={() => handleAnswerSelect("No")}>No</button>
          </>
        )}
      </div>
      {currentQuestion === questions.length  && (
        <div className="answer-buttonss">
          <button onClick={handleEligibilityCheck}>Submit</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="schemes-container">
      <Navbar />
      <div className="scheme-cards">
        {schemes.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
            <button className="apply-button" onClick={() => toggleEligibilityCheck(scheme)}>
              Check Eligibility
            </button>
            {showEligibilityCheck && <EligibilityCheck />}
            {isEligible !== null && (
              <div className="eligibility-status">
                {isEligible ? (
                  <p>You are eligible! Proceed to apply and get benefits from Benefit Buddy.</p>
                ) : (
                  <p>Sorry, you are not eligible for this scheme.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
