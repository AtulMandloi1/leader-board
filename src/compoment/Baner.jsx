import React, { useState } from 'react';
import './Baner.css';
import BanerImg from '../assest/BanerImg.png'; 
import Images from '../assest/images.png'; 

const Baner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); // Track slide direction

  const images = [Images, BanerImg]; 

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='banerContainer'>
      <div className='imageWrapper'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Banner"
            className={`fade-in ${index === currentIndex ? 'active' : ''} ${index === currentIndex && direction === 'left' ? 'slide-left-enter' : ''} ${index === currentIndex && direction === 'right' ? 'slide-right-enter' : ''} ${index !== currentIndex && direction === 'left' ? 'slide-left-exit' : ''} ${index !== currentIndex && direction === 'right' ? 'slide-right-exit' : ''}`}
          />
        ))}
      </div>
      <button className='navButton left' onClick={handlePrevious}>‹</button>
      <button className='navButton right' onClick={handleNext}>›</button>
    </div>
  );
}

export default Baner;
