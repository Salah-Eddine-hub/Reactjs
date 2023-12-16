import React from "react";
import contacts from "../contact";
import Profile from "./profile";
import Detail from "./detail";

function Info(props){
    return (
    <div>
      <div className="card">
        <Profile name={props.name} img={props.img}/>
        <div className="bottom">
            <Detail info={props.name}/>
            <Detail info={props.email}/>
        </div>
      </div>
    </div>
  );
}
function Card(){
    return(
    <div>
        <h1 className="heading">My Contacts</h1>
        <Info name={contacts[0].name} img={contacts[0].imgURL} num={contacts[0].phone} email={contacts[0].email}/>
        <Info name={contacts[1].name} img={contacts[1].imgURL} num={contacts[1].phone} email={contacts[1].email}/>
        <Info name={contacts[2].name} img={contacts[2].imgURL} num={contacts[2].phone} email={contacts[2].email}/>
    </div>
    );
}

export default Card;