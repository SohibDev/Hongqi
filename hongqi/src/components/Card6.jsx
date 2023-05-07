import React, { useState } from "react";
import Car6 from "../images/car6.jpg";
import "./card6.css";

const Card6 = () => {
  const handleMouseEnter = () => {
    const cartImage6 = document.getElementById("cart-image6");
    const shadow6 = document.getElementById("shadow6");
    const yearHeader61 = document.getElementById("year-header61");
    const carModel61 = document.getElementById("car-model61");
    const carDesc61 = document.getElementById("car-desc61");
    
    carDesc61.classList = "car-desc61";
    yearHeader61.classList = "year-header61";
    carModel61.classList = "car-model61";
    cartImage6.classList = "cart-image61";
    shadow6.classList = "shadow6";
  };

  const handleMouseLeave = () => {
    const cartImage6 = document.getElementById("cart-image6");
    const shadow6 = document.getElementById("shadow6");
    const yearHeader61 = document.getElementById("year-header61");
    const carModel61 = document.getElementById("car-model61");
    const carDesc61 = document.getElementById("car-desc61");
    
    carDesc61.classList = "d-none";
    yearHeader61.classList = "d-none";
    carModel61.classList = "d-none";
    cartImage6.classList = "cart-image6";
    shadow6.classList = "b";
  };

  return (
    <div className="container">
      <div className="d-flex cart6">
        <div className="">
          <div className="cart-image6" id="cart-image6" style={{ position: "relative" }}>
            <div id="shadow6"></div>
            <div className="activeHover6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            <img src={Car6} alt="" id="img61" className="img6" width="1300" height="700" />
            <div className="cart-text61" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header61" className="year-header61 d-none">1986</h1>
              <p id="car-model61" className="car-model61 d-none">Hongi CA760</p>
              <p id="car-desc61" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header6">1986</h1>
          <p className="car-model6">Hongi CA760</p>
        </div>
      </div>
    </div>
  );
};

export default Card6;