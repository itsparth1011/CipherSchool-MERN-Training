import React, { useState } from "react";

function Slider({ imgsData }) {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNext() {
    setImageIndex((index) => {
      const lastIndex = imgsData.length - 1;
      if (index === lastIndex) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  function handlePrev() {
    setImageIndex((index) => {
      if (index === 0) {
        return imgsData.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <img src={imgsData[imageIndex]} alt="" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Slider;
