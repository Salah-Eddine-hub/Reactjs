import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">My Favourite Foods</h1>
    <img alt="random" src={img + "?grayscale"}/>
    <img alt="nuget" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"/> 
    <img alt="nuget" src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"/>
    <img alt="nuget" src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"/>
  </div>,
  document.getElementById("root")
);
