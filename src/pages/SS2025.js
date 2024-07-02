// src/pages/SS2025.js
import React from "react";
import { Link } from "react-router-dom";
import SS2025Images from "../components/SS2025Images";
import "../App.css";

function SS2025() {
  return (
    <div>
      <header className="header">
        <Link to="/" className="home-link">
          SUN
        </Link>
      </header>
      <SS2025Images />
    </div>
  );
}

export default SS2025;
