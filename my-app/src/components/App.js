import React from "react";
import emojipedia from "./../imogiepedia"
import Entry from "./Entry";


function App() {
  return (
    <div>
    <h1>
      <span>emojipedia</span>
    </h1>
      {emojipedia.map(Entry)}
    </div>
  );
}

export default App;
