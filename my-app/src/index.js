import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
const fname = "Salah";
const mname = " Eddine";
const lname = " Harrachmin"
const num = 7;
root.render(
  <div>
    <h1>Hello {fname + mname + lname}</h1>
    <p>Your lucky number is {num}</p>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
