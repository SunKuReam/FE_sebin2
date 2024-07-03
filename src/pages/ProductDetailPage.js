// src/pages/ProductDetailPage.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";

import Header from "../components/Header";
import "../App.css";
import "./ProductDetailPage.css";

function ProductDetailPage() {
  //제품의 id값을 이용해서 동작
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!product) {
    return <div>제품 데이터가 없습니다.</div>;
  }

  const nextImage = () => { 
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.imageUrl.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-detail-page">
      <Header toggleMenu={toggleMenu} />
      {menuOpen && <div className="blur-background"></div>} {/* 블러 배경 */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/" className="button-text" >Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="product-detail-container">
        <div className="product-detail-content">
          <div className="slider">
            <button className="slider-button" onClick={prevImage}>
              &#10094;
            </button>
            <img
              src={product.imageUrl[currentImageIndex]}
              alt={product.name}
              className="product-detail-image"
            />
            <button className="slider-button" onClick={nextImage}>
              &#10095;
            </button>
          </div>
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <p className="price no-custom-font">{product.price}</p>
            <div className="details">
              <h3>DETAILS</h3>
              <ul>
                {product.description.split("\n").map((line, index) => (
                  <li key={index} className="no-custom-font">
                    {line.trim()}
                  </li>
                ))}
              </ul>
            </div>
            <div className="size-select">
              <h3>SIZE</h3>
              <ul>
                {product.size.split("\n").map((line, index) => (
                  <li key={index} className="no-custom-font">
                    {line.trim()}
                  </li>
                ))}
              </ul>
            </div>
            <div className="actions">
              <button>Buy now</button>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
