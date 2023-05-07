import React from "react";
import Logo from "../images/Logo.png";
import arrow from "../images/footer-arrow.svg";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footerLogo">
          <img src={Logo} alt="logo" />
          <h1 className="text-white mt-5">HONGQI</h1>
        </div>
        <div className="footerMiddle">
          <hr />
          <div className="container d-flex justify-content-between align-items-center">
            <ul className="nav-links" style={{ fontSize: "15px" }}>
              <li className="text-white">
                <a href="">News</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Investors</a>
              </li>
              <li>
                <a href="">Confidence</a>
              </li>
            </ul>
            <div className="d-flex">
              <p className="text-secondary" style={{ fontSize: "11px" }}>
                EN | <span className="text-white">RU</span>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <img className="my-5" src={arrow} alt="footer arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
