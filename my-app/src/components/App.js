import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function saveChange(event){
    const todoke = event.target.value;
    // console.log(event.target.value);
    setInput(todoke)
  }

  function addToArray(){
    // const value = event.target.value;
    setItems(prevItem => {
      return [...prevItem, input];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={input} onChange={saveChange} />
        <button onClick={addToArray} >
          <span name="button" >Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index)=>{return <li key={index}>{item}</li>})}
        </ul>
      </div>
    </div>
  );
}

export default App;
