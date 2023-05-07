import React, { useState } from "react";
import Car7 from "../images/car7.jpg";
import "./card7.css";

const Card7 = () => {
  const handleMouseEnter = () => {
    const cartImage7 = document.getElementById("cart-image7");
    const shadow7 = document.getElementById("shadow7");
    const yearHeader71 = document.getElementById("year-header71");
    const carModel71 = document.getElementById("car-model71");
    const carDesc71 = document.getElementById("car-desc71");
    
    carDesc71.classList = "car-desc71";
    yearHeader71.classList = "year-header71";
    carModel71.classList = "car-model71";
    cartImage7.classList = "cart-image71";
    shadow7.classList = "shadow7";
  };

  const handleMouseLeave = () => {
    const cartImage7 = document.getElementById("cart-image7");
    const shadow7 = document.getElementById("shadow7");
    const yearHeader71 = document.getElementById("year-header71");
    const carModel71 = document.getElementById("car-model71");
    const carDesc71 = document.getElementById("car-desc71");
    
    carDesc71.classList = "d-none";
    yearHeader71.classList = "d-none";
    carModel71.classList = "d-none";
    cartImage7.classList = "cart-image7";
    shadow7.classList = "b";
  };

  return (
    <div className="container">
      <div className="d-flex flex-column cart7">
        <div className="">
          <div className="cart-image7" id="cart-image7" style={{ position: "relative" }}>
            <div id="shadow7"></div>
            <div className="activeHover7" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            <img src={Car7} alt="" id="img71" className="img7" width="1300" height="700" />
            <div className="cart-text71" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header71" className="year-header71 d-none">1987</h1>
              <p id="car-model71" className="car-model71 d-none">Hongi CA770</p>
              <p id="car-desc71" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header7">1987</h1>
          <p className="car-model7">Hongi CA770</p>
        </div>
      </div>
    </div>
  );
};

export default Card7;