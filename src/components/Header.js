// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // 필요한 경우 스타일 파일 임포트

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
