import React, { useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import "./education.css"; // Import the CSS file

const Education = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []); 

    const scholarships = [
        {
          title: "Rythu Bandhu Scheme (AISS)",
          description: "Telangana Government has proposed a new scheme for providing investment support to Agriculture and Horticulture crops by way of a grant @ Rs.5000/- per Acre per Farmer in each season (Kharif & Rabi) for purchase of inputs like Seeds, Fertilizers, Pesticides, towards Labour and other Investments in the field operations of farmers choice for the crop season.",
          link: "Click here for details"
        },

        {
          title: "Rythu Bandhu - Farmers Group Life Insurance Scheme: (Rythu Bhima)",
          description: "Telangana Government decided to implement the prestigious scheme of 'Rythu Bandhu Group Life Insurance Scheme for Farmers' for the welfare of the farming community in the State. The main objective of the scheme is to provide immediate and adequate financial relief to bereaved family members/dependents of the farmer in case of his/her death due to any reason. Majority of the farmers are small and marginal farmers and farming is the sole source of livelihood to them. In the event of death of the bread earner, the dependent family members will land in distress due to financial problems. The sum assured Rs 5,00,000/- payable to the Nominee designated by the insured farmer.",
          link: "Click here for details"
        },
        {
          title: "Soil Health Card Scheme (SHC)",
          description: "National Mission for Sustainable Agriculture (NMSA) will be implemented during the 12th Plan with the following objectives: To make agriculture more productive, sustainable and climate-resilient; To conserve natural resources; To adopt comprehensive soil health management practices; To optimize utilization of water resources. Soil Health Management (SHM) is one of the most important interventions under NMSA, SHM aims at promoting Integrated Nutrient Management (INM) through judicious use of chemical fertilizers including secondary and micro nutrients in conjunction with organic manures and bio-fertilizers for improving soil health and its productivity; strengthening of soil and fertilizer testing facilities to provide soil test-based Agricultural related schemes in Telangana recommendations to farmers for improving soil fertility; ensuring quality control requirements of fertilizers, bio-fertilizers and organic fertilizers under Fertilizer Control Order, 1985; up-gradation of skill and knowledge of soil testing laboratory staff, extension staff and farmers through training and demonstrations; promoting organic farming practices etc.",
          link: "Click here for details"
        },
        {
          title: "Subsidy Seed Distribution",
          description: "The major objective of this scheme is to distribute various Crop Seeds like Paddy, Jowar, Maize, Redgram, Greengram, Blackgram, Bengalgram, Groundnut, Castor and Green manure on subsidy to Farmers. Subsidy pattern may vary from crop seed to crop seed.",
          link: "Click here for details"
        },
        {
          title: "Seed Village Programme",
          description: "The Seed Village Programme is one of the important components of the Sub Mission on Seed and Planting Material (SMSP) under National Mission on Agriculture Extension & Technology (NMAET) being implemented by the Government of India. The Seed Village programme ensures the supply of quality seed of notified varieties to the farmers in time at their places at affordable prices besides ensuring quick multiplication of new seed varieties in a shorter time in that mandal/district based on the crop situation. Objectives: The basic objectives of the Seed Village Programme are: A) To improve the quality of Farm saved Seeds. B) To increase the Seed Replacement Rate (SRR). C) To enhance the horizontal spread of high yielding varieties among farmers for improving the productivity of crops. Financial assistance @ 50% subsidy is available for distribution of Foundation/certified seeds of Cereals for 1 acre per farmer per crop each season. Financial assistance @ 60% subsidy is available for distribution of Foundation/certified seeds of Pulses, Oil seeds and Green manure seeds for 1 acre per farmer per crop each season.",
          link: "Click here for details"
        },
        {
          title: "Farm Mechanization",
          description: "Mechanization of agriculture will help in increasing productivity and reducing the cost of cultivation. Farm mechanization in the State is accentuated by the shortage in agriculture labor due to increased migration of rural workers to urban areas. Mechanization possibility is strongly influenced by the farm size, cost of farm labor, machines and energy. However, most of the farming is carried out on small holdings in the State, farming system continues to utilize manual power, animal power and tractor power. In order to bring more land under cultivation and to improve productivity per unit area it is necessary to introduce other sources of power like tractors, power tillers and renewable energy. Depending on the types of crops grown, soil conditions, local situations and requirements in the districts, the Department of Agriculture is contemplating to distribute various farm machinery and implements on subsidy basis. The Farm Mechanization Scheme is being implemented in the State for encouraging mechanization of farming by supplying various farm implements i.e. animal-drawn implements, tractor-drawn implements, high-cost machinery, mini tractors, post-harvest equipment, plant protection equipment, inter-cultivation equipment HDPE tarpaulins and establishment of Custom Hiring Centers for paddy land preparation package, CHC for cotton, maize, paddy harvesting & mini sugarcane package. The subsidy proposed under this scheme is 50% subject to a maximum ceiling limit indicated against each machinery.",
          link: "Click here for details"
        },
        {
          title: "Rastriya Krishi Vikas Yojana (RKVY)",
          description: "Introduce a new Additional Central Assistance scheme to incentivize States to draw up plans for their agriculture sector more comprehensively, taking agro-climatic conditions, natural resource issues and technology into account and integrating livestock, poultry and fisheries more fully. RKVY is to incentivize the states in enhancing more allocations for agriculture and allied sectors. It provides considerable flexibility and autonomy to states in planning and executing programmes for agriculture. Based on this principle, states prepare their own vision, strategy and annual work plan. Keeping in view the diverse agro-climatic conditions, cropping patterns, and socio-economic conditions, state-specific strategy and actions are identified. The funds under RKVY are provided to states as additional central assistance over and above their baseline expenditure.",
          link: "Click here for details"
        },
        {
          title: "Rainfed Area Development Scheme (RAD) under National Mission for Sustainable Agriculture",
          description: "Rainfed agriculture is complex, diverse and risk-prone activity. Activities proposed under RAD will act as a catalyst to accomplish the ultimate objective of enhanced productivity, minimizing the risk of crop losses due to uncertainties of weather conditions, Harnessing efficiency of resources. Rainfed Area Development (RAD) is one of the flagship programmes of National Mission for Sustainable Agriculture (NMSA), which is implemented in the state during 12th Plan with a focus on Integrated Farming System (IFS) approach. RAD aims at restoring the ecological balance by harnessing, conserving and developing rainfed areas, wherein the integrated farming system (IFS) is being promoted with the major objective of optimizing utilization of natural resources for enhancing agricultural productivity and livelihood security of the farmers. One of the components of RAD is setting up of model villages with the convergence of other line departments and promoting sustainable agricultural practices.",
          link: "Click here for details"
        },
        {
          title: "National Food Security Mission (NFSM)",
          description: "National Food Security Mission (NFSM) was launched in October 2007. The Mission is being continued during the 12th five-year plan with new targets of additional production of food grains comprising rice, wheat, and pulses. The mission aims at increasing the production of rice, wheat, and pulses through area expansion and productivity enhancement in a sustainable manner in the identified districts of the country having a low productivity of these crops.",
          link: "Click here for details"
        },
        {
          title: "Agriculture Technology Management Agency (ATMA)",
          description: "Agriculture Technology Management Agency (ATMA) Scheme is in implementation in 7 States and 33 districts in Telangana with 60:40 central and state share. The broad objectives of ATMA are: 1. To demonstrate location-specific technology on farmers' fields. 2. To enhance the capacity building of farmers and extension functionaries through extension reforms. 3. To promote the sustainability of agriculture through convergence of different sectors for resource conservation and livelihood security.",
          link: "Click here for details"
        },
        {
          title: "Pradhan Mantri Kisan Maan Dhan Yojana (PM-KMY)",
          description: "The Government of India has introduced an Old Age Pension Scheme for all landholding Small and Marginal Farmers (SMFs) in the country, namely, the 'Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)', as a voluntary and contributory pension scheme for the entry age group of 18 to 40 years. The Scheme is administered by the Ministry of Agriculture & Farmers Welfare, Government of India. Under the PM-KMY, a monthly pension of Rs. 3,000/- will be provided to the eligible Small and Marginal Farmer (SMF) on attaining the age of 60 years. The pension will be paid through Direct Benefit Transfer (DBT) mode to the bank account of the beneficiaries.",
          link: "Click here for details"}
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
