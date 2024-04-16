import React,  { useEffect } from "react";
import "./Schemes.css"; // Import your CSS file for styling

import Navbar from "../Navbar/Navbar";



const Schemes = () => {

  

  const handleApplyClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  //
    const headingStyle = {
      textAlign: 'center',
      fontSize: '28px',
      color: '#333',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
    }; 
  // Data for 11 schemes
  const schemes = [
    {
      name: "Double Bedroom Housing Scheme (2BHK Scheme)",
      description: "The government of Telangana formulated the double bedroom housing scheme in the month of October 2015 with a view to providing dignity to the poor by providing 100% subsidized housing. There is no beneficiary contribution under this scheme which is one of its kind. In rural areas, beneficiaries solely depend on seasonal conditions for their earnings, the 2BHK housing helped in protecting them from debt traps as was the case in the past.",
      eligibility: "The applicant should belong to Below Poverty Line (BPL) Category.",
      reservation: "Rural: SC/ST: 50%, Minorities: 7%, and balance 43% for others. Urban: SC: 17%, ST: 6%, Minorities: 12%, and balance 65% for others.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "KANTI VELUGU",
      description: "The State Government has embarked on a Noble Project of achieving “avoidable blindness-free Telangana” status by conducting a Comprehensive and Universal Eye Screening for the entire population of the State under the title ‘Kanti Velugu’.",
      eligibility: "All the citizens of Telangana are eligible for Universal Eye Screening.",
      link: "https://example.com/double-bedroom-housing"
      
    },
    {
      name: "Rs 5 Lakh Insurance Cover To Farmers",
      description: "All the farmers in Telangana, who are aged between 18 and 60 years, will get 5 lakh insurance coverage from 15 August 2018.",
      eligibility: "All the farmers in Telangana, who are aged between 18 and 60 years.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "Chief Minister's Overseas Scholarship Scheme for Minorities",
      description: "The scheme “Chief Minister's Overseas Scholarship Scheme for Minorities” was launched by the Minorities Welfare Department, Government of Telangana in the year 2015-16 for students belonging to the Minority community to pursue Higher Studies in Post Graduate Courses in Foreign Universities.",
      eligibility: "The applicant should be a resident of Telangana and belong to the minority community.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "Rythu Bima Scheme",
      description: "In order to ensure the economic and social security of the farmers, the Government of Telangana has conceptualized and implementing an innovative scheme named as Farmers Group Life Insurance Scheme (Rythu Bima) in addition to other initiatives in the agriculture sector.",
      eligibility: "The scheme is applicable to all farmers in the state of Telangana.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "Kalyana Lakshmi Pathakam",
      description: "The Government of Telangana envisions the overall development of the Scheduled Castes/Scheduled Tribes/Backward Classes/Economically Backward Classes (SC, ST, BC & EBC) and in particular, the unmarried Girls belonging to these communities who are the disadvantaged section of the society.",
      eligibility: "The unmarried girl shall belong to the SC/ST/BC/EBC community and be a resident of Telangana State.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "DALIT BANDHU",
      description: "The Dalit Bandhu Scheme is a unique initiative launched by the government of Telangana to promote the economic development of families belonging to the Scheduled Caste (SC) community.",
      eligibility: "The scheme is applicable only to families belonging to the SC community and the applicant must be a resident of Telangana.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "GRAMA JYOTHI",
      description: "The Government of Telangana launched the “Grama Jyothi” Program as a logical continuation of Mana Ooru-Mana Pranalika.",
      eligibility: "Grama Jyothi is a government initiative in India aimed at providing basic amenities to rural areas.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "Shaadi Mubarak Scheme",
      description: "In order to prevent child marriages and support the marriage expense of financially distressed families, on 02nd October 2014, Government of Telangana introduced a welfare scheme called “Shaadi Mubarak’’.",
      eligibility: "The unmarried girl should belong to the minority community and be a resident of Telangana state.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "KCR Nutrition KIT",
      description: "Telangana Government launched yet another pioneering initiative ‘KCR Nutrition Kits’, which is aimed at reducing Anemia and improving hemoglobin levels in pregnant women.",
      eligibility: "Pregnant women with a monthly income of less than Rs. 10,000 are eligible to receive the nutrition kit under the scheme.",
      link: "https://example.com/double-bedroom-housing"
    },
    {
      name: "Arogya Lakshmi",
      description: "Telangana government provides one nutritious meal every day to pregnant and lactating women and children below the age of six through Anganwadi centers.",
      eligibility: "The pregnant woman or the family with a newborn must be a resident of Telangana.",
      link: "https://example.com/double-bedroom-housing"
    }
  ];

  return (
    <div className="schemes-container">
      <Navbar />
      {/* <h2>Schemes Page</h2> */}
      <br>
      </br>
      <h2 style={headingStyle}> "Below are the Suggested Schemes - Apply Now and Embrace Benefits!"</h2>
      <div className="scheme-cards">
        {schemes.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
            <div className="scheme-details">
              <span className="date">{scheme.date}</span>
              <span className="time">{scheme.time}</span>
            </div>
            <button className="apply-button" onClick={() => handleApplyClick(scheme.link)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
