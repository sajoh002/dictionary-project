import React from "react";

export default function Example(props) {
  if (props.example === undefined) {
    return null;
  } else {
    return (
      <div className="Example">
        <h4>example:</h4>
        <p className="subsection">{props.example}</p>
      </div>
    );
  }
}
