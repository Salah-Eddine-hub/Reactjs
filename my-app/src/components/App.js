import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function applyChanges(event){

    const {value, name} = event.target;
    // console.log(value);
    // console.log(name);
    setContact(preValue =>{
      return {
        ...preValue,
        [name] : value
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={applyChanges} placeholder="First Name" />
        <input name="lName" onChange={applyChanges} placeholder="Last Name" />
        <input name="email" onChange={applyChanges} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
