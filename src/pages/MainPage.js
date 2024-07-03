// src/pages/Main.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import MainImages from "../components/MainImages";
import MainBrandDescription from "../components/MainBrandDescription";

import "../App.css";
import "../components/MainImages.css";
import "./MainPage.css";

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* 블러 */}
      {menuOpen && <div className="blur-background"></div>} 
      {/* 헤더 */}
      <Header toggleMenu={toggleMenu} />
      {/* 메인 페이지 사진 */}
      <div>
        <MainImages  />
      </div>
      {/*메뉴 창*/}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/SS2025" className="button-text">
                2025 S/S
              </Link>
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

export default MainPage;
