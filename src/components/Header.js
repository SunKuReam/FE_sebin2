// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

import "./Header.css"; 

function Header({ toggleMenu }) {
  return (
    <header className="header">
      <button className="open-button" onClick={toggleMenu}>
        ☰
      </button>
      <h1>
        <Link to="/" className="Main-link">
          SUN
        </Link>
      </h1>
    </header>
  );
}

export default Header;
