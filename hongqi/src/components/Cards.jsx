import React, { useState } from "react";
import Car1 from "../images/car1.jpg";
import "./card.css";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container pb-5">
      <div
        className="cart"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <div className="cart-image1" style={{ position: "relative" }}>
            <img src={Car1} alt="" className="img1" width="1300" height="700" />
            <div
              className="cart-text1"
              style={{ position: "absolute", top: "0", left: "0" }}
            >
              <h1 className="year-header1">1965</h1>
              <p className="car-model1">Hongi CA770</p>
            </div>
          </div>
        ) : (
          <div className="cart-image">
            <img src={Car1} alt="" />
            <div className={`cart-text`}>
              <h1 className="year-header">1965</h1>
              <p className="car-model">Hongi CA770</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
