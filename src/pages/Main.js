// src/pages/Main.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainImages from "../components/MainImages";
import "../App.css";

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <button className="menu-button" onClick={toggleMenu}>
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
        <p>
          MON - FRI AM 10:00 - PM 18:00
          <br />
          LUNCH TIME PM 12:00 - PM 13:00
          <br />
          SAT, SUN, HOLIDAY OFF
        </p>
        <p>
          COMPANY SUN OFFICE
          <br />
          OWNER | BAE SEO HYEON
          <br />
          TEL 010-8820-4903 | E-MAIL SUNOFFICE@NAVER.COM
          <br />
          INSTAGRAM | {"  "}
          <a
            href="https://www.instagram.com/sun_office__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sun_office__
          </a>
        </p>
      </div>
    </div>
  );
}

export default Main;
