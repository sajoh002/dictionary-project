import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms[0] === undefined) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        <h4>synonyms:</h4>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="synonyms" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  }
}
