import React from "react";
import emojipedia from "./../imogiepedia"
import Entry from "./Entry";


function App() {
  return (
    <div>
    <h1>
      <span>emojipedia</span>
    </h1>
      {emojipedia.map(not => {
          <dl className="dictionary">
            <Display 
              key={not.id}
              emoji={not.emoji}
              name={not.name}
              meaning={not.meaning}/>
          </dl>
  })}
    </div>
  );
}

export default App;
