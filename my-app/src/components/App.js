import React from "react";
import Login from "./login";


var isLogIn = true;

function checkLogin(){
return (
  isLogIn ? <h1>Hello</h1> : <Login />
  //and there is the && operator that checks only the left side if it true than execute the right side
)
}


function App() {
  return (
    <div className="container">
      {checkLogin()}
    </div>
  );
}

export default App;
