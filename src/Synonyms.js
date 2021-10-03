import React from "react";

export default function Synonyms(props) {
  if (props.synonyms[0] === undefined) {
    return null;
  } else {
    return (
      <ul className="Synonyms">
        <h4>synonyms:</h4>
        {props.synonyms.map(function (synonym, index) {
          return (
            <li className="subsection" key={index}>
              {synonym}{" "}
            </li>
          );
        })}
      </ul>
    );
  }
}
