import React, { useState } from "react";
import "./key.css";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid gray;
  color: gray;
  margin: 0.1em 0.1em;
  padding: 1em 0.75em;
  min-width: 2.7em;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.correct &&
    css`
      background: #7ee53a;
      border: 2px solid #7ee53a;
      color: white;
    `};

  ${(props) =>
    props.clicked &&
    css`
      background: gray;
      border: 2px solid gray;
      color: white;
    `};
`;

function Key(props) {
  const [clicked, setClicked] = useState(false);
  const [correct, setCorrect] = useState(props.phrase);

  //This logic needs to be fixed based on the game
  function handleClick(props) {
    if (props === true) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  function ButtonState(props) {
    if (clicked) {
      return (
        <Button onClick={handleClick} clicked>
          {props.letter}
        </Button>
      );
    } else {
      return <Button onClick={handleClick}>{props.letter}</Button>;
    }
  }

  return <ButtonState letter={props.letter} />;
}

export default Key;
