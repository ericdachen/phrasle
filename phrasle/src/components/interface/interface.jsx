import PhraseBoard from "../word/phrase/phrase";
import styled, { css } from "styled-components";
import React, { useState } from "react";
import Key from "../letterbox/key";

const Row = styled.div`
  text-align: center;
`;

function Interface() {
  const [guess, setGuess] = useState("");

  const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const botRow = ["Z", "X", "C", "V", "N", "M"];

  function handleKey(e) {
    setGuess((guess) => guess.concat(e));
    console.log(guess);
  }

  function handleEnter(e) {
    //Logic left for later once we can map to the phraseboard component
  }

  function handleDelete(e) {
    setGuess((guess) => guess.slice(0, -1));
    console.log(guess);
  }

  const listTop = topRow.map((val) => (
    <span key={val} data-key={val} onClick={() => handleKey(val)}>
      <Key letter={val}></Key>
    </span>
  ));
  const listMid = midRow.map((val) => (
    <span key={val} data-key={val} onClick={() => handleKey(val)}>
      <Key letter={val}></Key>
    </span>
  ));
  const listBot = botRow.map((val) => (
    <span key={val} data-key={val} onClick={() => handleKey(val)}>
      <Key letter={val}></Key>
    </span>
  ));

  return (
    <div>
      <PhraseBoard />
      <Row>{listTop}</Row>
      <Row>{listMid}</Row>
      <Row>
        <span key="Enter" onClick={handleEnter}>
          <Key letter="Enter" />
        </span>
        {listBot}
        <span key="Delete" onClick={handleDelete}>
          <Key letter="Delete" />
        </span>
      </Row>
    </div>
  );
}

export default Interface;
