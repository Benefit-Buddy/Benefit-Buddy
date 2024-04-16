import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Eligibility from "./Components/Landing/Eligibility";
import Schemes from "./Components/Landing/Schemes";
import Education from "./Components/Landing/education"; 
import Agriculture from "./Components/Landing/agriculture"; 
import Health from "./Components/Landing/health"; 
import Housing from "./Components/Landing/housing"; 
import StateSchemes from "./Components/Landing/StateSchemes"; 
import Feedback from "./Components/Landing/Feedback"; 
import SchemesTelangana from "./Components/Landing/schemesTelangana"; 

import Otherstates from "./Components/Landing/Otherstates"; 
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/eligibility" element={<Eligibility />} />
      <Route path="/schemes" element={<Schemes />} />
      
      <Route path="/education" element={<Education />} />
      <Route path="/agriculture" element={<Agriculture />} />
      <Route path="/health" element={<Health />} />
      <Route path="/housing" element={<Housing />} />
      <Route path="/StateSchemes" element={<StateSchemes />} />
      <Route path="/housing" element={<Housing />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path="/schemesTelangana" element={<SchemesTelangana />} />
      <Route path="/Otherstates" element={<Otherstates/>} />

    </Routes>
  </Router>,
  document.getElementById("root")
);
