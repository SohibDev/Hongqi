import React, { useState } from "react";
import Car4 from "../images/car4.jpg";
import "./card4.css";

const Card4 = () => {
  const handleMouseEnter = () => {
    const cartImage4 = document.getElementById("cart-image4");
    const shadow4 = document.getElementById("shadow4");
    const yearHeader41 = document.getElementById("year-header41");
    const carModel41 = document.getElementById("car-model41");
    const carDesc41 = document.getElementById("car-desc41");
    
    carDesc41.classList = "car-desc41";
    yearHeader41.classList = "year-header41";
    carModel41.classList = "car-model41";
    cartImage4.classList = "cart-image41";
    shadow4.classList = "shadow4";
  };

  const handleMouseLeave = () => {
    const cartImage4 = document.getElementById("cart-image4");
    const shadow4 = document.getElementById("shadow4");
    const yearHeader41 = document.getElementById("year-header41");
    const carModel41 = document.getElementById("car-model41");
    const carDesc41 = document.getElementById("car-desc41");
    
    carDesc41.classList = "d-none";
    yearHeader41.classList = "d-none";
    carModel41.classList = "d-none";
    cartImage4.classList = "cart-image4";
    shadow4.classList = "b";
  };

  return (
    <div className="container">
      <div className="d-flex cart4">
        <div className="">
          <div className="cart-image4" id="cart-image4" style={{ position: "relative" }}>
            <div id="shadow4"></div>
            <div className="activeHover4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            <img src={Car4} alt="" id="img41" className="img4" width="1300" height="700" />
            <div className="cart-text41" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header41" className="year-header41 d-none">1984</h1>
              <p id="car-model41" className="car-model441 d-none">Hongi CA760</p>
              <p id="car-desc41" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header4">1984</h1>
          <p className="car-model4">Hongi CA760</p>
        </div>
      </div>
    </div>
  );
};

export default Card4;