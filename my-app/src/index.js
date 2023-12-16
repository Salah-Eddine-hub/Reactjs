import React from "react";
import ReactDOM from "react-dom";
import me from "./images/me.png"
import him from "./images/him.png"
import she from "./images/she.png"
import trash from "./images/trash.png"

function Contacts(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.image} alt="avatar_img" />
            <p>{props.num}</p>
            <p>{props.email}</p>
        </div>
    );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Contacts name="me" image={me} num="0662225695" email="myemail@gmail.com" />
    <Contacts name="him" image={him} num="0662225692" email="hismemail@gmail.com" />
    <Contacts name="she" image={she} num="0662225693" email="she'semail@gmail.com" />
    <Contacts name="none" image={trash} num="000000000" email="noneemail@gmail.com" />
  </div>,
  document.getElementById("root")
);
