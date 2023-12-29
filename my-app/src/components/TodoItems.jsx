import React, {useState} from "react";
import Todo from "./Todo";
import InputArea from "./InputArea";

function TodoItems(){

  const [items, setItems] = useState([]);


  function addToArray(inputText){
    setItems(prevItem => {
      return [...prevItem, inputText];
    });
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
        <InputArea addToArray={addToArray} />
        <div>
        <ul>
            {items.map((item, index) => <Todo key={index} id={index} text={item} onChecked={deleteItem}/>)}
        </ul>
        </div>
    </div>
    );
}

export default TodoItems;