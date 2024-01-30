import Header from "./Header";
import React from "react";
function App() {
  const firstName = "john";
  const x = 9;
  const styleObject = {
    border :"2px solid balck",
    backgroundColor: "blue",
    color: "white",
    padding: "1rem"
  };

  return (
    <div style={styleObject}>
      <h1>Hello {firstName} </h1>
      {/* {<h2>maths {4 + 5}</h2>
      <h2>Terniary  can be written: {x>10 ? "yes" : "NO"} </h2>} */}

      <Header />
    </div>


    // <React.Fragment>
    // <h1>Hello </h1>
    // <Header />
    // </React.Fragment>

    // We can export more than 1 heding;
    // <div>
    //   <h1>Hello </h1>
    //   <Header/>
    // </div>
  );
}

export default App;

