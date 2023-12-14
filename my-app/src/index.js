import React from "react";
import ReactDOM from "react-dom";


const myName = "Salah-Eddine Harrachmin";
const cYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {cYear}</p>
  </div>,
  document.getElementById('root'));

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
