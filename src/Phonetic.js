import React from "react";

export default function Phonetic(props) {
  let audio = props.phonetic.audio;

  function playAudio(event) {
    event.preventDefault();
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  if (audio === undefined) {
    return <h4 className="Phonetic mt-3">{props.phonetic.text}</h4>;
  } else {
    return (
      <h4 className="Phonetic mt-3">
        <a href="/" className="text-decoration-none me-2" onClick={playAudio}>
          🔉
        </a>
        {props.phonetic.text}
      </h4>
    );
  }
}
