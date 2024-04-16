
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
          title: "Central Sector Scholarship Scheme of Top Class Education for SC Students",
          sponsor: "Government of India",
          ministry: "Ministry of Social Justice & Empowerment",
          department: "Department of Social Justice & Empowerment",
          description: "The Scheme aims at recognizing and promoting quality education amongst students belonging to SCs, by providing full financial support. The scheme will cover SC students for pursuing studies beyond 12th class. The scheme will operate in all institutions notified by the Ministry of Social Justice and Empowerment.",
          targetGroup: "SC student",
          benefits: [
            "Full tuition fee and non-refundable charges",
            "Living expenses at Rs. 2220 per month per student",
            "Books and stationery at Rs. 3000 per annum per student",
            "One-time assistance for a computer and accessories limited to Rs. 45,000"
          ],
          eligibility: "SC students admitted to notified institutions.",
          link: "https://google.com "
        },
        {
          title: "Central Sector Scheme of Free Coaching for SC and OBC Students",
          sponsor: "Government of India",
          ministry: "Ministry of Social Justice & Empowerment",
          department: "Department of Social Justice & Empowerment",
          description: "Ministry Of Social Justice And Empowerment is inviting the students belonging to the caste of SC and OBC so that they can provide the new free coaching to them. Under this Free Coaching scheme, around 3000 rupees will be provided to the local students and 6000 rupees will be provided to the students who belong to other cities. Also, 2000 rupees will be provided as an allowance so that the students can stay in the city till the end of the course. This will be a very great opportunity for all of the people who want to get a good education but cannot because of the financial differences that they are facing because of the pandemic or any other situation in their family.",
          targetGroup: "SC and OBC Students",
          benefits: [
            "Free Coaching scheme with financial assistance",
            "Local students: Rs. 3000; students from other cities: Rs. 6000",
            "Additional allowance of Rs. 2000 for accommodation"
          ],
          eligibility: "SC and OBC Students",
          link: "Click here for details"
        },
        {
          title: "National Fellowship for Persons with Disabilities for pursuing higher education",
          sponsor: "Government of India",
          ministry: "Ministry of Social Justice & Empowerment",
          description: "To support students with disabilities for pursuing higher education leading to degrees such as M. Phil. and Ph.D. in India.",
          targetGroup: "Students with Disabilities",
          benefits: [
            "Reimbursement of tuition fees and non-refundable charges",
            "Maintenance Allowance",
            "Special Allowances related to types of disabilities",
            "Books & Stationery allowance",
            "Reimbursement for computer and accessories, aids, and assistive devices"
          ],
          eligibility: "Students with Disabilities",
          link: "Click here for details"
        },
        {
          title: "Post-Matric Financial Assistance for Education of the Wards of Beedi/Cine/IOMC/LSDM Workers",
          sponsor: "Government of India",
          ministry: "Ministry of Labour and Employment",
          description: "Ministry of Labour and Employment, Government of India offers Post Matric Financial Assistance for Education of the Wards of Beedi/ Cine/ IOMC/ LSDM Workers 2021-22. This scholarship is available for the students of the post-matric level i.e. for the students who have successfully pursuing Class 11th to post-graduation Courses and diploma courses. The main objective of this scholarship is to provide financial assistance to the needy and poor students for higher studies in India.",
          targetGroup: [
            "Children of Beedi Workers",
            "Children of Iron Ore, Manganese Ore & Chrome Ore Mine (IOMC) Workers",
            "Children of Limestone & Dolomite Mine (LSDM) Workers",
            "Children of Cine Workers"
          ],
          benefits: [
            "Financial assistance for various levels of education"
          ],
          eligibility: "Children of workers in specified industries",
          link: "Click here for details"
        },
        {
          title: "Pre-Matric Financial Assistance for Education of the Wards of Beedi/Cine/IOMC/LSDM Workers",
          sponsor: "Government of India",
          ministry: "Ministry of Labour and Employment",
          description: "Ministry of Labour and Employment, Government of India offers Post Matric Financial Assistance for Education of the Wards of Beedi/ Cine/ IOMC/ LSDM Workers 2021-22. This scholarship is available for the students of the post-matric level i.e. for the students who have successfully pursuing Class 11th to post-graduation Courses and diploma courses. The main objective of this scholarship is to provide financial assistance to the needy and poor students for higher studies in India.",
          targetGroup: [
            "Children of Beedi Workers",
            "Children of Iron Ore, Manganese Ore & Chrome Ore Mine (IOMC) Workers",
            "Children of Limestone & Dolomite Mine (LSDM) Workers",
            "Children of Cine Workers"
          ],
          benefits: [
            "Financial assistance for various levels of education"
          ],
          eligibility: "Children of workers in specified industries",
          link: "Click here for details"
        },
        {
          title: "National Fellowship and Scholarship for Higher Education of ST students",
          sponsor: "Government of India",
          ministry: "Ministry of Tribal Affairs",
          description: "The Rajiv Gandhi National Fellowship (RGNF) scheme for Scheduled Tribes has been renamed as National Fellowship for Higher Education of ST Students and is formulated and funded by Ministry of Tribal Affairs. The scheme is open to candidates who belong to Scheduled Tribe and are pursuing higher studies such as regular and full time M.Phil and Ph.D degree in Sciences, Humanities, Social Sciences and Engineering & Technology. There are 750 slots for Scheduled Tribe candidates every year for all the subjects. Under the scheme, Fellowships are provided to ST students to take up higher studies after completing Post Graduation, such as M.Phil and Ph.D courses. The objective of the scheme is to encourage the ST students, a section of society with the lowest literacy level s in the country, to acquire higher education in the form of fellowships to pursue M. Phil and Ph. D. Courses, with a view to create qualified professionals to hold posts of teachers /professionals and other higher stages of employment.",
          targetGroup: "ST Candidates",
          benefits: [
            "Fellowship in Science, Humanities and Social Science",
            "Rs.25,000/-pa for initial two yea – JRF",
            "Rs.28,000/-pa for remaining tenure - SRF"
          ],
          eligibility: "ST Candidates who have passed the Post Graduate examination in concerned subject and who desire to pursue research without JRF of UGC-NET or UGC-CSIR NET.",
          link: "Click here for details"
        },
        {
          title: "National Scholarship for Higher Education of ST students",
          sponsor: "Government of India",
          ministry: "Ministry of Tribal Affairs",
          description: "ST Students is intended to encourage meritorious ST students to pursue courses at Graduate/Post Graduate level in identified Institutions of excellence, Government and Private, in professional fields such as Management, Medicine, Engineering, Information Technology, Law etc. In order to remove layers resulting in time lag and to facilitate proper control over the implementation and monitoring of the Central sector scholarship schemes for ST students for Top Class Education, the Ministry merged this schemes into a single Central Sector Scheme called 'National Scholarship for Higher Education of ST students'. Guidelines were issued on 20th April, 2015.",
          targetGroup: "ST students",
          benefits: [
            "Full tuition fee and other non-refundable dues in respect of Government/Government-funded institutions.",
            "Books & Stationery - @ Rs.3000/- per annum per student without bills/vouchers",
            "Living expenses - 2200/- per month (Amount will be provided as per actuals subject to maximum ceiling 26400/- per annum",
            "Computer & Accessories - Rs.45000/- (One time assistance during the tenure)"
          ],
          eligibility: "ST students",
          link: "Click here for details"
        },
        {
          title: "Apprenticeship Training under the Apprentices Act, 1961",
          sponsor: "Government of India",
          department: "प्रशिक्षण महानिदेशालय",
          description: "The Apprentices Act, 1961 was enacted with the objective of regulating the programme of training of apprentices in the industry by utilizing the facilities available therein for imparting on-the-job training. The Act makes it obligatory for employers in specified industries to engage apprentices in designated trades to impart Apprenticeship Training on the job in industry to youth and person having National Trade certificate issued by National Council for Vocational Training (NCVT) to develop skilled manpower for the industry.",
          targetGroup: "Any individual, who has completed 14 years of age, is physically fit and having minimum educational qualification prescribed for a trade can undergo apprenticeship training.",
          benefits: 
            "Monthly stipends based on educational qualifications and courses"
          ,
          eligibility: "School pass-outs (class 5th - class 9th) to graduates",
          location: "Telangana State",
          organization: "The Telangana State Council of Higher Education",
          link: "Click here for details"
        } ,
        
        { 
            title: "TS DOST Admission",
          programDescription: "Telangana State Council of Higher Education has started Degree Online Services Telangana (DOST) 2021 for students who have cleared TS Inter Exams. Now students can apply for undergraduate courses by filling TS DOST Admission 2021 Online Registration / Application Form at dost.cgg.gov.in. Candidate can register themselves at the TS DOST Admission 2021 website by logging in by with their intermediate hall ticket number. Through this Degree Online Services Telangana portal, students will be able to apply for courses and colleges of their preference. Accordingly, seats will be allotted as per their choice and merit.",
          programEligibility: "All those students who have cleared their TS Inter exams can apply",
          programDetails: "All those students who have cleared their TS Inter exams can apply for admissions to any state-based university by applying at the official website. Check important dates, notification, fees and complete details here.",
        
          sponsor: "Telangana Minority Residential Educational Institutions Society (TMREIS)",
          description: "The objective of having a fully residential school is to focus on the child's overall development. These schools are home away from home where traditional values and complete family atmosphere is maintained 24x7 by trained and caring professionals. It is envisioned that there would be one school in each constituency of state. It comes to 120 schools in the state. 71 residential schools (39 BOYS and 32 GIRLS) will be established in the first phase. Remaining schools will be established in the second phase.",
          targetGroup: "Minority Student",
          scholarships: true,
          link: "Click here for details"
        },

        {
          title: "Telangana Minority Residential Junior College",
          sponsor: "Telangana Minority Residential Educational Institutions Society (TMREIS)",
          description: "The objective of having a fully residential school is to focus on the child's overall development. These schools are home away from home where traditional values and complete family atmosphere is maintained 24x7 by trained and caring professionals. It is envisioned that there would be one school in each constituency of state. It comes to 120 schools in the state. 71 residential schools (39 BOYS and 32 GIRLS) will be established in the first phase. Remaining schools will be established in the second phase.",
          targetGroup: "Minority Student",
          scholarships: true,
          link: "Click here for details"
        },
        {
          title: "Telangana Minority Residential School",
          sponsor: "Telangana Minority Residential Educational Institutions Society (TMREIS)",
          description: "The objective of having a fully residential school is to focus on the child's overall development. These schools are home away from home where traditional values and complete family atmosphere is maintained 24x7 by trained and caring professionals.",
          targetGroup: "Minority Student",
          scholarship: true,
          livingArrangements: true,
          link: "Click here for details"
        },
        {
          title: "Vocational Training in Urdu Computer Education",
          sponsor: "Telangana State Minority Welfare Department",
          description: "Under this program Unemployed Minority Youth from Minority Community. (Muslims, Buddhists, Parsis, Sikhs & Jains) will be Provides training in the followed courses to enable them to secure suitable jobs in various companies",
          targetGroup: "Youth from Minority Community. (Muslims, Buddhists, Parsis, Sikhs & Jains)",
          courses: [
            "Fundamentals of Computers",
            "MS Office",
            "Internet concepts",
            "HTML",
            "CSS",
            "Tally",
            "GST",
            "C, C++ & Java",
            "E-Seva programme",
            "Android",
            "Web Designing",
            "DTP",
            "Multimedia",
            "Hardware",
            "Networking"
          ],
          link: "Click here for details"
        },
        {
          title: "Mahatma Jyothiba Phule BC Overseas Vidya Nidhi",
          sponsor: "BC WELFARE DEPARTMENT GOVERNMENT OF TELANGANA",
          description: "Government of Telangana is implementing a prestigious programme called “Mahatma Jyotiba Phule Overseas Vidya Nidhi Financial assistance for the benefit of poor BC & EBC students for higher education in foreign universities. “Mahatma Jyothiba Phule BC Overseas Vidya Nidhi” will be initially sanctioned to (300) BC Students every year and is open to all eligible graduates to pursue Post Graduate studies abroad. He/She should have a valid TOEFL/IELTS and GRE/GMAT scores with a age limit of less than (35) years and family income shall be less than Rs.5.00 lakhs per annum from all sources.",
          targetGroup: "Poor BC & EBC students",
          benefits: [
            "Living expenses",
            "Educational loan",
            "Processing fee",
            "Airfare"
          ],
          eligibility: "Eligible graduates to pursue Post Graduate studies abroad",
          link: "Click here for details"
        },
        {
          title: "Merit-cum-Means Scholarship Scheme",
          sponsor: "Government of India",
          ministry: "Ministry of Minority Affairs",
          description: "This scholarship is awarded to students of minority communities who are pursuing technical or professional courses at undergraduate or postgraduate level. The objective of the Scheme is to provide financial assistance to the poor and meritorious students belonging to minority communities to enable them to pursue professional and technical courses.",
          targetGroup: "Students belonging to minority communities",
          benefits: [
            "Full reimbursement of tuition fee",
            "Maintenance allowance of up to Rs. 20,000 per annum",
            "Renewal for subsequent years"
          ],
          eligibility: "Students belonging to minority communities with a family income not exceeding Rs. 2.50 lakh per annum",
          link: "Click here for details"
        },
        {
          title: "The Lalit Kala Akademi Scholarships",
          sponsor: "Lalit Kala Akademi, Ministry of Culture, Government of India",
          description: "Lalit Kala Akademi, Ministry of Culture, Government of India invites applications for Lalit Kala Akademi Scholarships 2021-22 from young and budding artists in the field of visual arts such as painting, sculpture, graphics, ceramics, design, etc. The aim of the scholarship is to encourage young artists of outstanding promise to pursue higher studies/ specialized training in the field of visual arts within India.",
          targetGroup: "Young artists",
          benefits: [
            "A scholarship amount of up to Rs. 10,000 per month for a year"
          ],
          eligibility: "Young and budding artists",
          link: "Click here for details"
        },
        {
          title: "National Overseas Scholarship Scheme",
          sponsor: "Government of India",
          ministry: "Ministry of Social Justice & Empowerment",
          department: "Department of Social Justice & Empowerment",
          description: "The Scheme provides financial assistance to the selected candidates for pursuing Master level courses and Ph.D abroad in the field of Engineering, Management, Applied Sciences, Pure Sciences, Agricultural Sciences, Medicine, Social Science, Humanities, Fine Arts, and any other specialized courses at the Master level, Ph.D. level which are not available in the Indian Universities.",
          targetGroup: "SC students",
          benefits: [
            "Maintenance allowance",
            "Reimbursement of the fee",
            "Contingency allowance"
          ],
          eligibility: "SC students",
          link: "https://example.com/details1"
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
