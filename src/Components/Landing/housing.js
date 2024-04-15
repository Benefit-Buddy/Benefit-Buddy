
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
                title: "2BHK Housing Scheme",
                sponsor: "Government of Telangana",
                description: "The 2BHK Housing Scheme is a flagship initiative by the Government of Telangana aimed at providing affordable housing to eligible beneficiaries. Under this scheme, eligible households are provided with a 2-bedroom, hall, and kitchen (2BHK) house free of cost.",
                eligibility: "Low-income families without pucca houses",
                benefits: [
                    "Free 2BHK house with basic amenities",
                    "Improved living conditions",
                    "Enhanced quality of life"
                ],
                link: "https://example.com/2bhk-scheme-details"
            },
            {
                title: "Basement Cellar Policy",
                sponsor: "Government of Telangana",
                description: "The Basement Cellar Policy aims to regulate the construction of basements in residential buildings. It specifies guidelines and regulations regarding the construction, usage, and safety measures of basements in buildings.",
                eligibility: "Builders and developers constructing residential buildings with basements",
                benefits: [
                    "Regulated construction of basements",
                    "Enhanced safety measures",
                    "Optimal utilization of space"
                ],
                link: "https://example.com/basement-cellar-policy-details"
            },
            {
                title: "Ambedkar Overseas Vidya Nidhi Scheme",
                sponsor: "Government of Telangana",
                description: "The Ambedkar Overseas Vidya Nidhi Scheme provides financial assistance to Scheduled Caste (SC) students for pursuing higher education abroad. Under this scheme, eligible SC students are provided financial support to cover tuition fees, living expenses, and other related costs.",
                eligibility: "Scheduled Caste (SC) students pursuing higher education abroad",
                benefits: [
                    "Financial assistance for tuition fees",
                    "Living expenses support",
                    "Other related costs covered"
                ],
                link: "https://example.com/ambedkar-vidya-nidhi-details"
            },
            {
                title: "Telangana Housing Board (THB) Scheme",
                sponsor: "Telangana Housing Board (THB)",
                description: "The Telangana Housing Board (THB) Scheme aims to provide affordable housing to economically weaker sections of society. THB constructs residential complexes and apartments at various locations in Telangana, offering them at affordable prices to eligible beneficiaries.",
                eligibility: "Economically weaker sections of society",
                benefits: [
                    "Affordable housing options",
                    "Residential complexes with basic amenities",
                    "Improved living conditions"
                ],
                link: "https://example.com/thb-scheme-details"
            },
            {
                title: "Rural Housing Scheme",
                sponsor: "Government of Telangana",
                description: "The Rural Housing Scheme focuses on providing housing facilities to rural households in Telangana. Under this scheme, eligible beneficiaries are provided financial assistance or housing units to construct or repair their houses.",
                eligibility: "Rural households in Telangana",
                benefits: [
                    "Financial assistance for house construction/repair",
                    "Improved housing facilities",
                    "Enhanced living conditions"
                ],
                link: "https://example.com/rural-housing-scheme-details"
            },
            {
                title: "Integrated Township Policy",
                sponsor: "Government of Telangana",
                description: "The Integrated Township Policy aims to promote the development of integrated townships in Telangana. It provides guidelines and incentives for developers to plan and construct integrated townships that offer residential, commercial, recreational, and other facilities.",
                eligibility: "Builders and developers planning integrated townships",
                benefits: [
                    "Guidelines and incentives for integrated township development",
                    "Well-planned residential and commercial spaces",
                    "Enhanced infrastructure and facilities"
                ],
                link: "https://example.com/integrated-township-policy-details"
            },
            {
                title: "Telangana State Housing Corporation (TSHC) Scheme",
                sponsor: "Telangana State Housing Corporation (TSHC)",
                description: "The Telangana State Housing Corporation (TSHC) Scheme aims to provide housing solutions to various sections of society. TSHC constructs residential complexes and apartments, offering them at affordable rates or through housing loans.",
                eligibility: "Various sections of society",
                benefits: [
                    "Affordable housing options",
                    "Residential complexes with basic amenities",
                    "Housing loans for eligible beneficiaries"
                ],
                link: "https://example.com/tshc-scheme-details"
            },
            {
                title: "Land Acquisition and Land Development Scheme",
                sponsor: "Government of Telangana",
                description: "The Land Acquisition and Land Development Scheme aims to acquire land for various developmental projects and initiatives. It involves the acquisition of land for public infrastructure, housing projects, industrial development, and other purposes.",
                eligibility: "Government agencies and departments",
                benefits: [
                    "Land acquisition for developmental projects",
                    "Expansion of infrastructure",
                    "Support for housing and industrial development"
                ],
                link: "https://example.com/land-acquisition-scheme-details"
            },
            {
                title: "Rajiv Swagruha Corporation Limited (RSCL) Scheme",
                sponsor: "Rajiv Swagruha Corporation Limited (RSCL)",
                description: "The Rajiv Swagruha Corporation Limited (RSCL) Scheme aims to provide affordable housing to middle-income groups in Telangana. RSCL constructs residential complexes and apartments, offering them at reasonable rates to eligible beneficiaries.",
                eligibility: "Middle-income groups in Telangana",
                benefits: [
                    "Affordable housing options",
                    "Residential complexes with basic amenities",
                    "Housing loans for eligible beneficiaries"
                ],
                link: "https://example.com/rscl-scheme-details"
            },
            {
                title: "Jawaharlal Nehru National Urban Renewal Mission (JNNURM) Scheme",
                sponsor: "Government of India",
                description: "The Jawaharlal Nehru National Urban Renewal Mission (JNNURM) Scheme aims to promote sustainable urban development across India, including Telangana. It provides funding and support for various urban infrastructure and housing projects.",
                eligibility: "Urban local bodies and development authorities",
                benefits: [
                    "Funding for urban infrastructure and housing projects",
                    "Support for sustainable urban development",
                    "Enhanced living conditions in urban areas"
                ],
                link: "https://example.com/jnnurm-scheme-details"
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
            {/* Link to details */}
            <button className="details-button">
                            <a href={scheme.link} target="_blank" rel="noopener noreferrer">Click here for details</a>
                        </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
