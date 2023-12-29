import React from "react";

function Todo(props){

    return (
        <div>
            <li onClick={() => {
                props.onChecked(props.id);
            }} >{props.text}</li>
        </div>
    );
}

export default Todo;