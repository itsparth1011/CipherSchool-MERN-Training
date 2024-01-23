import React, { useState } from "react";

 //setState with callback
 
 //setState
 //1. new state value
 //2. (preVal) => {return newState}

function SetStatewithCallback() {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    // setNum(num + 1);
    setNum((prevState) => {
      console.log("previous state value is", prevState);
      return prevState + 1;
    });
  };
  return (
    <>
      <h1>{num}</h1>
      <button onClick={handleClick}>increment</button>
    </>
  );
}

export default SetStatewithCallback;
