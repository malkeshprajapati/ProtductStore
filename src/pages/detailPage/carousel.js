import React, { useState, useEffect } from "react";
import {
  CarouselContainer,
  NextButton,
  PrevButton,
} from "../../styles/carouselStyle";
import { ProductImage } from "../../styles/singleProductStyle";
import junkImage from "../../assets/junk.jpg";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <CarouselContainer>
        <ProductImage
          loading="lazy"
          src={images[currentIndex] ? images[currentIndex] : junkImage}
          alt={`Slide ${currentIndex + 1}`}
        />
        <PrevButton onClick={goToPrev}>&lt;</PrevButton>
        <NextButton onClick={goToNext}>&gt;</NextButton>
      </CarouselContainer>
    </div>
  );
};

export default ImageCarousel;
