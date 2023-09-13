import React from "react";
import "./footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
// import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Company instigated in the year 2002 with a novel idea of environment
            conservation through recycling.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text"> New Delhi, 1224201</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0231 345 0278</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email:greenguardian@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Quick Links</div>
          <span className="text">About Us </span>
          <span className="text">Careers</span>
          <span className="text"> Event</span>
          <span className="text">Gallery</span>
          <span className="text">Contact us</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            © Copyright 2023 , All rights reserved Green Guardians
          </span>
          {/* <img src="" /> alt="" */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
