import React, { useState } from "react";

function App() {

  const [text, setname] = useState("");
  const [sub, checkIt] = useState("");

  // function fillText(){
  //   setname();
  // }

  function handleChange(event){
    console.log(event.target.value);
    setname(event.target.value);
    // event.preventDefault();
  }

  function addText(event){
    checkIt(text);
    event.preventDefault();
    
  }

  return (
    <div className="container">
      <h1>Hello {sub}</h1>
      <form>
        <input onChange={handleChange}
                type="text" 
                placeholder="What's your name?" 
                value={text}/>
        
      <button onClick={addText}>Submit</button>
      </form>
    </div>
  );
}

export default App;
