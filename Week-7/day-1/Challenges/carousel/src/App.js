import React, { useState } from 'react';
import Images from './Images';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    name: 'Hong Kong',
    imageURL: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg',
  },
  {
    name: 'Macao',
    imageURL: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp',
  },
  {
    name: 'Japan',
    imageURL: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp',
  },
  {
    name: 'Las Vegas',
    imageURL: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp',
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">

          <div className="rounded-lg shadow-lg overflow-hidden">
            <Images 
              images={images} 
              onSlideChange={handleSlideChange}
              currentIndex={currentIndex}
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-lg">
            {images.map((image, index) => (
              <div 
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`
                  cursor-pointer overflow-hidden rounded-lg
                  ${currentIndex === index ? 'ring-2 ring-blue-500' : ''}
                  transition-all duration-300 transform hover:scale-105
                `}
              >
                <img 
                  src={image.imageURL} 
                  alt={image.name}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 