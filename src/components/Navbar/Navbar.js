import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-itens">
          <div className="logo">
            <img src="/path/to/logo.png" alt="Logo" />
          </div>
          <ul className="menu">
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Coming Soon</a>
            </li>
            <li>
              <a href="#">Ranking</a>
            </li>
            <li>
              <a href="#">Roulette</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="icons">
            <a href="#">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
