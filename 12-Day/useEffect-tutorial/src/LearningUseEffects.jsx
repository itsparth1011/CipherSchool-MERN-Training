import React, { useEffect, useState } from "react";


//hooks
// 2. useEffect

// useEffect
// 2 inputs
// 1st --> callback Function
// 2nd --> dependency array(optional)

// useEffect : 3 ways to use
// 1. w/o Array
// 2. array with some state value
// 3. useEffect with empty dependency  array

// useEffect(() => {},[]) callback runs after initial mount

//useEffect with empty dependency array: [] ---> for data fetching

function LearningUseEffects() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log("app render...");
  }, []);

  return (
    <div>
      <h1>Counter app 1</h1>
      <h1>{count1}</h1>
      <button onClick={() => setCount1((count1) => count1 + 1)}>
        Increase count1
      </button>

      {/* <h1>Counter app 2</h1>
      <h1>{count2}</h1>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        Increase count2
      </button> */}
    </div>
  );
}

export default LearningUseEffects;
