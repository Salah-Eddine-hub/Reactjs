import React, {useState} from "react";
import Todo from "./Todo";

function TodoItems(){

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

  function deleteItem(id){
    setItems(prevItem => {
        return (prevItem.filter((item, index) => {
            return index !== id;
        }))
    })
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
            {items.map((item, index) => <Todo key={index} id={index} text={item} onChecked={deleteItem}/>)}
        </ul>
        </div>
    </div>
    );
}

export default TodoItems;