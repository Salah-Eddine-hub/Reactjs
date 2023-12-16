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

function createCard(contacts){
  return (
    <Info 
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.tel}
      email={contacts.email}/>
  );
}
function Card(){
    return(
    <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(createCard)}
    </div>
    );
}

export default Card;