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
    setGuess(guess.concat(e.target.value));
    //Still need to fix this to actually take the value
  }

  function handleEnter(e) {
    console.log("Wassup");
  }

  function handleDelete(e) {}

  const listTop = topRow.map((val) => (
    <span onClick={handleKey}>
      <Key key={val} letter={val}></Key>
    </span>
  ));
  const listMid = midRow.map((val) => (
    <span onClick={handleKey}>
      <Key key={val} letter={val}></Key>
    </span>
  ));
  const listBot = botRow.map((val) => (
    <span onClick={handleKey}>
      <Key key={val} letter={val}></Key>
    </span>
  ));

  return (
    <div>
      <PhraseBoard />
      <Row>{listTop}</Row>
      <Row>{listMid}</Row>
      <Row>
        <Key letter="Enter" onClick={handleEnter} />
        {listBot}
        <Key letter="Delete" onClick={handleDelete} />
      </Row>
    </div>
  );
}

export default Interface;
