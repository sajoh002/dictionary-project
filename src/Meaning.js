import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}:</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="subsection">
              {props.meaning.definitions[0].definition}
            </p>
            <h4>example:</h4>
            <p className="subsection">{props.meaning.definitions[0].example}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
