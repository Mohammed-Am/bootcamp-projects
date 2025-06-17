import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Images = ({ images, onSlideChange, currentIndex }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={false}
      interval={3000}
      selectedItem={currentIndex}
      onChange={onSlideChange}
      className="carousel-container"
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-slide">
          <img 
            src={image.imageURL} 
            alt={image.name} 
            className="w-full h-[400px] object-cover"
          />
          <p className="legend">{image.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Images; 