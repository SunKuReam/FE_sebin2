// src/pages/SS2025.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

import SS2025Images from "../components/SS2025Images";
import Header from "../components/Header";
import "../App.css";
import "./MainPage.css";

function SS2025Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {menuOpen && <div className="blur-background"></div>} {/* 블러 배경 */}
      <Header toggleMenu={toggleMenu} />
      <div>
        <SS2025Images />
      </div>
      {/*메뉴 창*/}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/" className="button-text">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SS2025Page;
