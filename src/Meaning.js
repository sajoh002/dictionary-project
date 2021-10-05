import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition subsection">{definition.definition}</div>
            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
