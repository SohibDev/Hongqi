import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import "./main.css";
import Cart from "../images/cart.svg";
import Account from "../images/account.svg";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg my-4">
        <div className="container justify-content-between align-items-center">
          <div className="d-flex">
            <p className="text-secondary" style={{ fontSize: "11px" }}>
              EN | <span className="text-white">RU</span>
            </p>
          </div>

          <ul className="nav-links" style={{ fontSize: "14px" }}>
            <li className="text-white">
              <a href="">Модели</a>
            </li>
            <li>
              <a href="">О компании</a>
            </li>
            <li>
              <a href="">Главная</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
            <li>
              <a href="">Помощь и поддрежка</a>
            </li>
            <li>
              <a href="">3D Комната</a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <img src={Cart} alt="cart" class="img-small" />
            <div class="stick"></div>
            <img src={Account} alt="" class="img-small" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
