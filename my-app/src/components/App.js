import React, { useState } from "react";


function App() {
  const [heading, setHeader] = useState("Hello");
  const [isHover, setStyle] = useState(false);
  
  function mouseEv(){
    setHeader("Submited");
  }


  function hovered(){
    console.log("you just hovered here");
    setStyle(true);
   }
   function unhovered(){
    console.log("you just hovered here");
    setStyle(false);
   }


  return (
      <div className="container">
        <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button  style={{backgroundColor: isHover ? "black" : "white"}} onClick={mouseEv} onMouseOver={hovered} onMouseOut={unhovered}>Submit</button>
    </div>
  );
}

export default App;
