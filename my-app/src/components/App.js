import React from "react";
import contacts from "../contact";

function Info(props){
    return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img src={props.img} className="circle-img" alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.num}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Info name={contacts[0].name} img={contacts[0].imgURL} num={contacts[0].phone} email={contacts[0].email}/>
      <Info name={contacts[1].name} img={contacts[1].imgURL} num={contacts[1].phone} email={contacts[1].email}/>
      <Info name={contacts[2].name} img={contacts[2].imgURL} num={contacts[2].phone} email={contacts[2].email}/>
   </div>
  );
}

export default App;
