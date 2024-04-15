
import Navbar from "../Navbar/Navbar";
import "./education.css"; // Import the CSS file
import React, { useEffect } from 'react';


const Education = () => {

    
        useEffect(() => {
            // Scroll to the top of the page when the component mounts
            window.scrollTo(0, 0);
          }, []); 
    
          const scholarships = [
            {
              title: "Maha Lakshmi Scheme",
              description: [
                "Financial assistance of Rs. 2500 for women in Telangana who are heads of their families.",
                "Gas cylinders at Rs. 500.",
                "Free TSRTC bus travel across Telangana."
              ],
              link: "Click here for details"
            },
            {
              title: "Cheyutha Scheme",
              description: [
                "Provides free medical and healthcare up to Rs. 10 lakh under the Rajiv Arogyasri initiative.",
                "Economically backward sections in Telangana are provided with free corporate medical treatment in all empanelled hospitals.",
                "Each family gets Rs. 10 lakh financial coverage for medical treatment.",
                "90.10 lakh families below the poverty line are estimated to benefit from this scheme.",
                "1,672 different medical packages along with 21 specialty services for patients with physical ailments are available."
              ],
              link: "Click here for details"
            },
            {
              title: "Dr YSR Aarogyasri Scheme",
              description: [
                "Health Insurance Plan launched in 2007 by the then Chief Minister of Andhra Pradesh, Dr. Y. S. Rajasekhar Reddy.",
                "Managed by Aarogyasri Health Care Trust.",
                "Aimed at enabling low-income group families to access good quality healthcare.",
                "Provides per family annual coverage of Rs. 5 lakhs.",
                "Free medical care provided by public hospitals.",
                "Cashless care from the first day through 10 days after discharge.",
                "Cashless care for patients receiving therapies for up to 30 days after discharge.",
                "Covers transportation and food costs for patients."
              ],
              link: "Click here for details"
            },
            {
              title: "EHS - Employee Health Scheme by Government of Telangana",
              description: [
                "Formulated for serving/retired employees and their dependent family members to avail cashless treatment at several empanelled hospitals across Telangana.",
                "Replaces the current medical reimbursement facility.",
                "Features treatment of chronic diseases and post-hospitalisation care."
              ],
              link: "Click here for details"
            },
            {
              title: "Telangana Diagnostic Network",
              description: [
                "Aims to provide diagnostic services to patients at government health facilities.",
                "Facilitates timely diagnosis and treatment.",
                "Ensures accessibility of quality diagnostic services across Telangana."
              ],
              link: "Click here for details"
            },
            {
              title: "Telangana Dialysis Programme",
              description: [
                "Offers free dialysis services to economically backward sections of society.",
                "Accessible across government hospitals in Telangana.",
                "Provides relief to patients suffering from kidney-related ailments."
              ],
              link: "Click here for details"
            },
            {
              title: "Telangana Arogya Lakshmi Scheme",
              description: [
                "Aims to provide financial assistance to pregnant women for prenatal and postnatal care.",
                "Provides support for medical checkups, medications, and other necessary expenses.",
                "Ensures the well-being of both mother and child during pregnancy and childbirth."
              ],
              link: "Click here for details"
            },
            {
              title: "Telangana Free Eye Screening Programme",
              description: [
                "Offers free eye screening services to the citizens of Telangana.",
                "Facilitates early detection and treatment of eye-related disorders.",
                "Promotes eye health awareness and preventive measures."
              ],
              link: "Click here for details"
            }
          ];
          
          

  return (
    <div>
      <Navbar />
      <div className="education-container">
        {/* Render each education scheme as a card */}
        {scholarships.map((scheme, index) => (
          <div className="education-card" key={index}>
            {/* Scheme details */}
            <h3>{scheme.title}</h3>
            <p>{scheme.description}</p>
            <p>Eligibility: {scheme.eligibility}</p>
            {/* Link to details */}<button className="details-button">
                            <a href={scheme.link} target="_blank" rel="noopener noreferrer">Click here for details</a>
                        </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
