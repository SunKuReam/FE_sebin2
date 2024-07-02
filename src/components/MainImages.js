import React, { useState } from "react";
import "../App.css";
import "./MainImages.css";

const importAll = (requireContext) => requireContext.keys().map(requireContext);

// 이미지를 동적으로 가져옵니다
const images = importAll(
  require.context("../images/images_mainpage", false, /\.(png|jpe?g|svg)$/)
);

const MainImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="slider-button" onClick={prevImage}>
        &#10094;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Gallery Image ${currentIndex + 1}`}
        className="product-image"
      />
      <button className="slider-button" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default MainImages;
