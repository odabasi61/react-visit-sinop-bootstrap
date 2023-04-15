import { gallery } from "../helper/photo";
import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Photo = () => {
  // const [shuffledImages, setShuffledImages] = useState(() => {
  //   // shuffle the images array using Fisher-Yates algorithm
  //   const shuffledArray = [...gallery];
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  //   }
  //   return shuffledArray;
  // });

  // with the function up, everytimes the page is refreshed, images are mixed. when using the function, (shuffledImages) must be mapped

  // with the function down, we make the selested images fullscreen.

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) {
        return null;
      }
      return prevIndex > 0 ? prevIndex - 1 : gallery.length - 1;
    });
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) {
        return null;
      }
      return prevIndex < gallery.length - 1 ? prevIndex + 1 : 0;
    });
  };

  return (
    <div className="p-2 p-md-3 p-lg-4 p-xl-5">
      <h3 className="pb-4">Beautiful Landscape Images From Sinop</h3>
      <div className="px-2 py-5 bg-white rounded-2 d-flex flex-wrap justify-content-center gap-2">
        {gallery.map((photo, index) => (
          <div key={index}>
            <div className="gallery-card rounded-4 overflow-hidden">
              <img
                onClick={() => handleImageClick(index)}
                src={photo}
                alt="beautiful landscape from Sinop"
              />
            </div>
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={gallery[selectedImageIndex]}
              alt="beautiful landscape from Sinop"
            />
            <button className="prev" onClick={handlePrevClick}>
              <BsChevronLeft size={40} />
            </button>
            <button className="next" onClick={handleNextClick}>
              <BsChevronRight size={40} />
            </button>
            <button className="close" onClick={handleCloseModal}>
              <AiFillCloseCircle size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
