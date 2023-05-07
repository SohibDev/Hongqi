import React, { useState } from "react";
import Car2 from "../images/car2.jpg";
import "./card2.css";

const Card2 = () => {
  const handleMouseEnter = () => {
    const cartImage2= document.getElementById("cart-image2");
    const shadow2 = document.getElementById("shadow2");
    const yearHeader21 = document.getElementById("year-header21");
    const carModel21 = document.getElementById("car-model21");
    const carDesc21 = document.getElementById("car-desc21");
    const img2 = document.getElementById("img21");
    
    img2.classList='img21'
    carDesc21.classList = "car-desc21";
    yearHeader21.classList = "year-header21";
    carModel21.classList = "car-model21";
    cartImage2.classList = "cart-image21";
    shadow2.classList = "shadow2";
  };

  const handleMouseLeave = () => {
    const cartImage2 = document.getElementById("cart-image2");
    const shadow2 = document.getElementById("shadow2");
    const yearHeader21 = document.getElementById("year-header21");
    const carModel21 = document.getElementById("car-model21");
    const carDesc21 = document.getElementById("car-desc21");
    const img2 = document.getElementById("img21");
    
    img2.classList='img2'
    carDesc21.classList = "d-none";
    yearHeader21.classList = "d-none";
    carModel21.classList = "d-none";
    cartImage2.classList = "cart-image";
    shadow2.classList = "b";
  };

  return (
    <div className="container position-absolute">
      <div className="d-flex flex-column cart2">
        <div className="">
          <div className="cart-image2" id="cart-image2" style={{ position: "relative" }}>
            <div id="shadow2"></div>
            <div className="activeHover2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            <img src={Car2} alt="" id="img21" className="img2" width="1300" height="700" />
            <div className="cart-text21" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header21" className="year-header21 d-none">1968</h1>
              <p id="car-model21" className="car-model21 d-none">Hongi CA773</p>
              <p id="car-desc21" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header2">1968</h1>
          <p className="car-model2">Hongi CA773</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;