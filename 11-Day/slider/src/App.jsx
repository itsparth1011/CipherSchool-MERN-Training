import React from "react";
import Slider from "./components/Slider";
import { images } from "./Data/images";
function App() {
  return (
    <>
      <Slider imgsData={images} />
    </>
  );
}

export default App;
