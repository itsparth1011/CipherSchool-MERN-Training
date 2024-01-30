import React, { useState } from "react";

//Hooks : these are use to change the UI
// useState
//useRef
//useEffect
// useContext
//useReducer

// Rules of Hooks
// All Hooks starts with "use"
//call hooks in component function directly;

// 1st hook : useState()

//Input
//1. Inital value of state

//Output
//2. array ---> 2 elements
//1st element ---> state value
//2nd element ---> function to update state value

function SimpleCounter() {
  // let arrayFromUseState = useState(1);
  // let stateValue = arrayFromUseState[0];
  // let functionToUpdateStateValue = arrayFromUseState[1];
  const [num, setValue] = useState(0);
  function handleClick() {
    setValue(num + 1);
  }

  //By this functin the value of num will change only in console not on UI to change value on UI we have to change the state in HOOKs
  // let num =1;
  // function handleClick(){
  //   console.log(num);
  //   num++
  //   console.log(num);
  // }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleClick}>Increment</button>

      {/* <h1>{num}</h1> */}
      {/* <button onClick={handleClick}>Increase</button> */}
    </div>
  );
}

export default SimpleCounter;
