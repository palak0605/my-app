import React, { useState } from "react";
// import { Button, Modal } from "@mui/material";
// import {ArrowBackIcon, ArrowForwardIcon} from '@mui/icons-material'

import "../styles/ImageSlider.css";
// Import images
import car_1 from "../assets/car_1/car-1.png";
import car_2 from "../assets/car_2/scorpio-1.png";
// import { render } from "@testing-library/react";

const ImageSlider = () => {
  const images = [car_1, car_2];



  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
   
  };

 




  return (
    <div style={{ marginTop: "100px" }}>
      <div className="show-image">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Car ${index}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>


      {selectedImage !== null && (

<div className="modal">

  <span className="close" onClick={closeModal}>

    &times;

  </span>

  <img

    src={images[selectedImage]}

    alt={`Car ${selectedImage}`}

    className="modal-content"

  />

</div>

)}

     
      </div>
     
  );
};

export default ImageSlider;
