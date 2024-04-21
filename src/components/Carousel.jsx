/** @format */

import { useEffect } from "react";

import "../styles/Carousel.css";

const Carousel = () => {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Hide slides
    slides.forEach((slide) => {
      slide.classList.remove("display");
    });

    // Show the current slide and mark it as active
    slides[slideIndex - 1].classList.add("display");
  }

  return (
    <>
      <div className="carousel">
        <div className="mySlides fade">
          <img className="full-width" src="src/assets/image1.webp" />
        </div>
        <div className="mySlides fade">
          <img className="full-width" src="src/assets/image2.webp" />
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
        <div className="dot"></div>
      </div>
    </>
  );
};

export default Carousel;
