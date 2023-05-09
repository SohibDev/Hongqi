import React, { useState } from "react";
import Car5 from "../images/car5.jpg";
import "./card5.css";

const Card5 = () => {
  const handleMouseEnter = () => {
    const cartImage5 = document.getElementById("cart-image5");
    const shadow5 = document.getElementById("shadow5");
    const yearHeader51 = document.getElementById("year-header51");
    const carModel51 = document.getElementById("car-model51");
    const carDesc51 = document.getElementById("car-desc51");
    
    carDesc51.classList = "car-desc51";
    yearHeader51.classList = "year-header51";
    carModel51.classList = "car-model51";
    cartImage5.classList = "cart-image51";
    shadow5.classList = "shadow5";
  };

  const handleMouseLeave = () => {
    const cartImage5 = document.getElementById("cart-image5");
    const shadow5 = document.getElementById("shadow5");
    const yearHeader51 = document.getElementById("year-header51");
    const carModel51 = document.getElementById("car-model51");
    const carDesc51 = document.getElementById("car-desc51");
    
    carDesc51.classList = "d-none";
    yearHeader51.classList = "d-none";
    carModel51.classList = "d-none";
    cartImage5.classList = "cart-image5";
    shadow5.classList = "b";
  };

  return (
    <div className="container">
      <div className="d-flex flex-row-reverse cart5">
        <div className="position-relative">
          <div className="cart-image5" id="cart-image5">
            <div id="shadow5"></div>
            <div className="activeHover5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            <img src={Car5} alt="" id="img51" className="img5"/>
            <div className="cart-text51" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header51" className="year-header51 d-none">1998</h1>
              <p id="car-model51" className="car-model51 d-none">Hongi CA7460</p>
              <p id="car-desc51" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header5">1998</h1>
          <p className="car-model5">Hongi CA7460</p>
        </div>
      </div>
    </div>
  );
};

export default Card5;