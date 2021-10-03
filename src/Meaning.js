import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}:</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="subsection">{definition.definition}</p>
            <h4>example:</h4>
            <p className="subsection">{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
