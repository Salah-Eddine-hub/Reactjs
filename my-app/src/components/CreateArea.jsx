import React, { useState } from "react";

function CreateArea() {

  const [note, setNote] = useState({
    noteTitle: "",
    noteContent: ""
  });

  function saveChange(event){
    const {name, value} = event.target;
    setNote((prevValue)=>{
      return {
        ...prevValue, 
        [name]: value
      };
    });
  }
  
  function 


  return (
    <div>
      <form>
        <input  name="noteTitle" onChange={saveChange} placeholder="Title" value={note.noteTitle} />
        <textarea name="noteContent" onChange={saveChange} placeholder="Take a note..." rows="3" value={note.noteContent} />
        <button onClick={}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
