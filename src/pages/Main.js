// src/pages/Main.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainImages from "../components/MainImages";
import MainBrandDescription from "../components/MainBrandDescription";
import "../components/MainImages.css";
import "./Main.css";
import "../App.css";

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
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

      {/* 메인 페이지 사진 */}
      <div>
        <MainImages />
      </div>

      {/*메뉴 창*/}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/SS2025">2025 S/S</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 브랜드 정보 */}
      <div>
        <MainBrandDescription />
      </div>
    </div>
  );
}

export default Main;
