import React from 'react';
import facebook from "../../images/facebook.png"
import google from "../../images/social.png"
import twitter from "../../images/twitter.png"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
      <img src={facebook} alt="Header Image" className="fb" />
      <img src={google} alt="Header Image" className="gg" />
      <img src={twitter} alt="Header Image" className="tw" />
      </div>
    </div>
  );
}

export default Footer;
