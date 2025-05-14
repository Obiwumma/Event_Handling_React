import React, { useState } from "react";

function App() {
  const [headText, setHeadText] = useState("Hello");
  // const [btnColor, setBtnColor] = useState("white");
  const [isMousedOver, setMouseOver] = useState(false);

  // const handleClick = () => {
  //   setHeadText("Welcome");
  // };

  // const handleMouseOver = () => {
  //   setBtnColor("black");
  // };
  // const handleMouseOut = () => {
  //   setBtnColor("white");
  // };

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
