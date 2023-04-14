import { gallery } from '../helper/photo';
import React, { useState, useEffect } from 'react';

const Photo = () => {
  const [shuffledImages, setShuffledImages] = useState(() => {
    // shuffle the images array using Fisher-Yates algorithm
    const shuffledArray = [...gallery];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  });

  // with the function up, everytimes the page is refreshed, images are mixed.

  return (
    <div className="p-2 p-md-3 p-lg-4 p-xl-5">
      <div className="p-2 bg-white rounded-2 d-flex flex-wrap justify-content-center gap-2">
        {shuffledImages.map((photo, index) => (
          <div key={index}>
            <div className='gallery-card rounded-4 overflow-hidden'>
            <img src={photo} alt='beautiful landscape from Sinop' />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo;
