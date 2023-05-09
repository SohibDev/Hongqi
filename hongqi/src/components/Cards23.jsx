import React, { useState } from "react";
import Car2 from "../images/car21.jpg";
import Car3 from "../images/car3.jpg";
import "./card23.css";

const Card23 = () => {
  const handleMouseEnter2 = () => {
    const cartImage2 = document.getElementById("cart-image2");
    const shadow2 = document.getElementById("shadow2");
    const yearHeader21 = document.getElementById("year-header21");
    const carModel21 = document.getElementById("car-model21");
    const carDesc21 = document.getElementById("car-desc21");
    const cart3 = document.getElementById("cart3");
    console.log(cart3);
    cart3.classList = "cart31";
    carDesc21.classList = "car-desc21";
    yearHeader21.classList = "year-header21";
    carModel21.classList = "car-model21";
    cartImage2.classList = "cart-image21";
    shadow2.classList = "shadow2";
  };

  const handleMouseLeave2 = () => {
    const cartImage2 = document.getElementById("cart-image2");
    const shadow2 = document.getElementById("shadow2");
    const yearHeader21 = document.getElementById("year-header21");
    const carModel21 = document.getElementById("car-model21");
    const carDesc21 = document.getElementById("car-desc21");
    const cart3 = document.getElementById("cart3");
    console.log(cart3);
    cart3.classList = "cart3";
    carDesc21.classList = "d-none";
    yearHeader21.classList = "d-none";
    carModel21.classList = "d-none";
    cartImage2.classList = "cart-image2";
    shadow2.classList = "b";
  };

  const handleMouseEnter3 = () => {
    const cartImage3 = document.getElementById("cart-image3");
    const shadow3 = document.getElementById("shadow3");
    const yearHeader31 = document.getElementById("year-header31");
    const carModel31 = document.getElementById("car-model31");
    const carDesc31 = document.getElementById("car-desc31");
    const cart2 = document.getElementById("cart2");
    console.log(cart2);
    cart2.classList = "cart21";
    carDesc31.classList = "car-desc31";
    yearHeader31.classList = "year-header31";
    carModel31.classList = "car-model31";
    cartImage3.classList = "cart-image31";
    shadow3.classList = "shadow3";
  };

  const handleMouseLeave3 = () => {
    const cartImage3 = document.getElementById("cart-image3");
    const shadow3 = document.getElementById("shadow3");
    const yearHeader31 = document.getElementById("year-header31");
    const carModel31 = document.getElementById("car-model31");
    const carDesc31 = document.getElementById("car-desc31");
    const cart2 = document.getElementById("cart2");
    console.log(cart2);
    cart2.classList = "cart2";
    carDesc31.classList = "d-none";
    yearHeader31.classList = "d-none";
    carModel31.classList = "d-none";
    cartImage3.classList = "cart-image3";
    shadow3.classList = "b";
  };

  return (
    <div className="container d-flex justify-content-between position-relative overflow-hidden" style={{marginBottom: '-700px'}}>
      <div className="d-flex flex-column cart2" id="cart2">
        <div className="">
          <div className="cart-image2 position-relative" id="cart-image2">
            <div id="shadow2"></div>
            <div className="activeHover2" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}></div>
            <img src={Car2} alt="" id="img2" className="img2" width="1300" height="700" />
            <div className="cart-text21" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header21" className="year-header21 d-none">1965</h1>
              <p id="car-model21" className="car-model21 d-none">Hongi CA770</p>
              <p id="car-desc21" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header2">1965</h1>
          <p className="car-model2">Hongi CA770</p>
        </div>
      </div>
      <div className="d-flex flex-column cart3" id="cart3">
        <div className="">
          <div className="cart-image3" id="cart-image3">
            <div id="shadow3"></div>
            <div className="activeHover3" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}
            >
              
            </div>
            <img src={Car3} alt="" id="img3" className="img3" width="1300" height="700" />
            <div className="cart-text31" style={{ position: "absolute", top: "0", left: "0" }}>
              <h1 id="year-header31" className="year-header31 d-none">1965</h1>
              <p id="car-model31" className="car-model31 d-none">Hongi CA770</p>
              <p id="car-desc31" className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima voluptatem sapiente. Perferendis sit error vero illum omnis debitis inventore?</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="year-header3">1965</h1>
          <p className="car-model3">Hongi CA770</p>
        </div>
      </div>
    </div>
  );
};

export default Card23;