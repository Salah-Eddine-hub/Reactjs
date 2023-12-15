import React from "react";
import ReactDOM from "react-dom";
import pi, {doubleYourPi, tripleYourPi} from "./Math.jsx";

ReactDOM.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doubleYourPi()}</li>
      <li>{tripleYourPi()}</li>
    </ul>
  </div>,
  document.getElementById("root"));
