import React from "react";

export default function Example(props) {
  if (props.example === undefined) {
    return null;
  } else {
    return (
      <div className="Example">
        <h4>example:</h4>
        <div className="example subsection">"{props.example}"</div>
      </div>
    );
  }
}
