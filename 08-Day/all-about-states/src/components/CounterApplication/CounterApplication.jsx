import React, { useState } from "react";
import styles from "./CounterApplication.module.css";

function CounterApplication() {
  const [counter, setCounter] = useState(0);
  function handleIncrement() {
    setCounter((counter) => counter + 1);
  }
  function handleReset() {
    setCounter(0);
  }
  function handleDecrement() {
    setCounter((counter) => counter - 1);
  }
  return (
    <div className={styles.counter}>
      <h1>Counter Application</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterApplication;
