import React from "react";
import ReactDOM from "react-dom";


const newstyle = {
  color : ""
};

const cTime = new Date(2022,1,1,19);
const hours = cTime.getHours();
let date = "";

if (hours < "12"){
  date = "moring";
  newstyle.color = "red";
}
else if (hours < "18"){
  date = "Afternoon";
  newstyle.color = "green";
}
else{
  date = "evening";
  newstyle.color = "blue";
}

ReactDOM.render(<div>
  <h1 className="heading" style={newstyle}>Good {date}</h1>
  <p>current time is {hours}</p>
</div>,
document.getElementById("root"));

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
