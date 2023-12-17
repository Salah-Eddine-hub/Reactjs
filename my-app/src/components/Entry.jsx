import React from "react";

function Display(props){
    return (
        <dl className="dictionary">
          <div className="term">
            <dt>
              <span className="emoji" rol="img" aria-label="Tense Biceps">
                {props.emoji}
              </span>
              <span>
                {props.name}
              </span>
            </dt>
            <dd>{props.meaning}</dd>
          </div>
        </dl>
    );
  }
  
  function Entry(not){
    return(
        
    <dl className="dictionary">
      <Display 
        key={not.id}
        emoji={not.emoji}
        name={not.name}
        meaning={not.meaning}/>
    </dl>
    );
  }

export default Entry;