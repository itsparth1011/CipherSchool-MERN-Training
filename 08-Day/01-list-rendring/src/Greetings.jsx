import React from "react";

function Greetings({ firstName, lastName }) {
  // destructuring
  // let { firstName, lastName } = props;
  return (
    // <h1>Greetings </h1>
    <h2>
      Hello, {firstName} {lastName}
    </h2>
  );
}

export default Greetings;
