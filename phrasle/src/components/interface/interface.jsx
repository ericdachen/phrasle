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
    alert("Wassup");
  }

  function handleEnter(e) {
    console.log("Wassup");
  }

  function handleDelete(e) {}

  const listTop = topRow.map((val) => (
    <Key key={val} letter={val} onClick={handleKey}></Key>
  ));
  const listMid = midRow.map((val) => (
    <Key key={val} letter={val} onClick={handleKey}></Key>
  ));
  const listBot = botRow.map((val) => (
    <Key key={val} letter={val} onClick={handleKey}></Key>
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
