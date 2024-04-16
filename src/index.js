import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginDashboard from './Components/main_login_page/LoginDashboard';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import Signup from "./Components/Register_login_page/Signup";
import Login from "./Components/Register_login_page/Login";
import Dashboard from "./Components/Register_login_page/Dashboard";
import ChangePassword from "./Components/Register_login_page/ChangePassword";
import UserDetails from "./Components/Register_login_page/UserDetails";
import DeapartDashboard from './Components/DepartmentDashboard/DeapartDashboard';
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
      <Route path="/Login" element={<Login />} />
      <Route path="/LoginDashboard" element={<LoginDashboard />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Dashboard/UserDetails" element={<UserDetails />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Dashboard/ChangePassword" element={<ChangePassword />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route path="/DeapartDashboard" element={<DeapartDashboard />} />
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
