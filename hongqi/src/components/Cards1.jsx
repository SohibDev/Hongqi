import React, { useState } from "react";
import Car1 from "../images/car1.jpg";
import "./card1.css";

const Card = () => {
  const handleMouseEnter = () => {
    const cartImage = document.getElementById("cart-image");
    const shadow = document.getElementById("shadow");
    const yearHeader1 = document.getElementById("year-header1");
    const carModel1 = document.getElementById("car-model1");
    const carDesc1 = document.getElementById("car-desc1");
    
    carDesc1.classList = "car-desc1";
    yearHeader1.classList = "year-header1";
    carModel1.classList = "car-model1";
    cartImage.classList = "cart-image1";
    shadow.classList = "shadow";
  };

  const handleMouseLeave = () => {
    const cartImage = document.getElementById("cart-image");
    const shadow = document.getElementById("shadow");
    const yearHeader1 = document.getElementById("year-header1");
    const carModel1 = document.getElementById("car-model1");
    const carDesc1 = document.getElementById("car-desc1");
    
    carDesc1.classList = "d-none";
    yearHeader1.classList = "d-none";
    carModel1.classList = "d-none";
    cartImage.classList = "cart-image";
    shadow.classList = "b";
  };

  return (
    <div className="container">
      <div className="d-flex cart">
        <div className="">
          <div className="cart-image" id="cart-image" style={{ position: "relative" }}>
            <div id="shadow"></div>
            <div className="activeHover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            <img src={Car1} alt="" id="img1" className="img" width="1300" height="700" />
            <div className="cart-text1" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header1" className="year-header1 d-none">1965</h1>
              <p id="car-model1" className="car-model1 d-none">Hongi CA770</p>
              <p id="car-desc1" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header">1965</h1>
          <p className="car-model">Hongi CA770</p>
        </div>
      </div>
    </div>
  );
};

export default Card;