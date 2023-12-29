import React, {useState} from "react";

function InputArea(props){
    const [input, setInput] = useState("");
    
    function saveChange(event){
        const todoke = event.target.value;
        setInput(todoke)
      }
   return ( 
    <div className="form">
            <input type="text"  onChange={saveChange} value={input} />
            <button onClick={() =>{
                console.log(input);
                setInput("");
            }} 
            >
                <span name="button" >Add</span>
            </button>
    </div>);
}

export default InputArea;