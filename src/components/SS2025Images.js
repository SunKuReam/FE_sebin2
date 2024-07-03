// src/components/SS2025Images.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import "../App.css";
import "./SS2025Images.css";

import MainBrandDescription from "./MainBrandDescription";
import products from "../data/products";

// 상품 id, 이름, Url, 가격 및 설명을 저장하는 Array

function SS2025Images() {
  return (
    <div className="App">
      <div className="product-container">
        {products.map((products) => (
          <div className="product-card" key={products.id}>
            <Link to={`/product/${products.id}`}>
              <img
                src={products.imageUrl[0]}
                alt={products.name}
                className="product-image"
              />
            </Link>
            <Link to={`/product/${products.id}`} className="product-name">
              {products.name}
            </Link>
          </div>
        ))}
      </div>
      <MainBrandDescription />
    </div>
  );
}

export default SS2025Images;
