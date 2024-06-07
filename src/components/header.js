import * as React from "react";
import "./Header.css";
import img from '../images/taskbg.jpeg';
import ActionAreaCard from "./Cards/Card";
import tooth from "../images/tooth.png"
import lungs from "../images/lungs.png"
import brain from "../images/brainstorm.png"
import report from "../images/report-card.png"
import doctor from "../images/medical-checkup.png"
import Innovative from "./Innovative/Innovative";
import Doctors from "./Doctors/Doctors";

const Header = () => (
  <div className="header-container">
    <header className="header">
      <div className="header-left">
        <h3>Welcome to MediCare+ Clinic</h3><br/>
        <h1>Best Specialist</h1>
        <h4>We are on the leading edge of cancer care.<br/> Providing the full continuum of cancer treatments <br/> and supportive care Services in a single convenient location.</h4>
        <div className="header-buttons">
          <button className="header-button">Make an Appointment</button>
          <button className="header-button">Departments</button>
        </div>
      </div>
      <div className="header-right">
        <img src={img} alt="Header Image" className="header-image" />
      </div>
    </header>

    <h1>Our Services</h1>
    <h3>We provide the most full medical services, so every person could heave the opportunity to recieve qualitative medical help</h3>
    <div className="card-container">
      <ActionAreaCard img ={tooth} title="Dental"/>
      <ActionAreaCard img ={lungs} title="Pulmonary"/>
      <ActionAreaCard img ={brain} title="Neurological"/>
      <ActionAreaCard img ={report} title="Prediatrics"/>
    </div>
    <div className="innovative-container">
      <Innovative img ={doctor} title="Qualified Doctors"/>
      {/* <Innovative img ={doctor} title="Qualified Doctors"/> */}
    </div>

    <h1  className="doctor">We Have The Best Specialist</h1>
    <h3>We have a wide experience in experience design and strategy, <br /> with locally-rooted knowledge.</h3>
    <div className="doctor-container">
      <Doctors name="Dr. Awaatif Al" title="Dental Care"/>
      <Doctors name="Dr. Filipa Gaspar" title="Cardiology"/>
      <Doctors name="Dr. Sukhmeet Gorae" title="Neurological"/>
      <Doctors name="Dr. Siri Jakobsson" title="Prediatrics"/>
    </div>
  </div>
);

export default Header;
