import React, { useState } from "react";
import Car3 from "../images/car3.jpg";
import "./card3.css";

const Card3 = () => {
  const handleMouseEnter = () => {
    const cartImage3= document.getElementById("cart-image3");
    const shadow3 = document.getElementById("shadow3");
    const yearHeader31 = document.getElementById("year-header31");
    const carModel31 = document.getElementById("car-model31");
    const carDesc31 = document.getElementById("car-desc31");
    const img3 = document.getElementById("img31");
    const cart3 = document.getElementById("cart3");
    
    cart3.classList='cart31'
    img3.classList='img31'
    carDesc31.classList = "car-desc31";
    yearHeader31.classList = "year-header31";
    carModel31.classList = "car-model31";
    cartImage3.classList = "cart-image31";
    shadow3.classList = "shadow3";
  };

  const handleMouseLeave = () => {
    const cartImage3 = document.getElementById("cart-image3");
    const shadow3 = document.getElementById("shadow3");
    const yearHeader31 = document.getElementById("year-header31");
    const carModel31 = document.getElementById("car-model31");
    const carDesc31 = document.getElementById("car-desc31");
    const img3 = document.getElementById("img31");
    const cart3 = document.getElementById("cart3");
    
    cart3.classList='cart3'
    img3.classList='img3'
    carDesc31.classList = "d-none";
    yearHeader31.classList = "d-none";
    carModel31.classList = "d-none";
    cartImage3.classList = "cart-image";
    shadow3.classList = "b";
  };

  return (
    <div className="container position-absolute">
      <div className="d-flex flex-column cart3" id="cart3">
        <div className="">
          <div className="cart-image3" id="cart-image3" style={{ position: "relative" }}>
            <div id="shadow3"></div>
            <div className="activeHover3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            <img src={Car3} alt="" id="img31" className="img3" width="1300" height="700" />
            <div className="cart-text31" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header31" className="year-header31 d-none">1980</h1>
              <p id="car-model31" className="car-model31 d-none">Hongi CA630</p>
              <p id="car-desc31" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header3">1980</h1>
          <p className="car-model3">Hongi CA630</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;