// src/pages/ProductDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";
import "../App.css";

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <header className="header">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <h1>
          <Link to="/" className="home-link">
            SUN
          </Link>
        </h1>
      </header>

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="product-detail-container">
        <div className="product-detail-content">
          <div className="product-detail-image-container">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-detail-image"
            />
          </div>
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <p className="price">{product.price}</p>
            <div className="details">
              <h3>DETAILS</h3>
              <ul>
                {product.description.split("\n").map((line, index) => (
                  <li key={index}>{line.trim()}</li>
                ))}
              </ul>
            </div>
            <div className="size-select">
              <h3>SIZE</h3>
              <ul>
                {product.size.split("\n").map((line, index) => (
                  <li key={index}>{line.trim()}</li>
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

export default ProductDetail;
