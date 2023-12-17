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
  

export default Entry;