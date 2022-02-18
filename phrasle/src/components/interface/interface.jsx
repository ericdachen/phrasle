import PhraseBoard from "../word/phrase/phrase";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import Key from "../letterbox/key";
import getPhrase from '../../util/dictionaryWrapper';

const Row = styled.div`
  text-align: center;
`;

function Interface() {
    // state & other declarations***************************************
    const [guess, setGuess] = useState("");

    const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const botRow = ["Z", "X", "C", "V", "N", "M"];

    const phrase = getPhrase();
    // *****************************************************************

    // helper functions ************************************************
    function handleKey(e) {
        setGuess((guess) => guess.concat(e));
        console.log(guess);
    }

    function handleEnter(e) {}

    function handleDelete(e) {
        setGuess((guess) => guess.slice(0, -1));
        console.log(guess);
    }
    // *****************************************************************

    // jsx *************************************************************
    const listTop = topRow.map((val) => (
        <span key={val} onClick={() => handleKey(val)}>
        <Key letter={val}></Key>
        </span>
    ));
    const listMid = midRow.map((val) => (
        <span key={val} onClick={() => handleKey(val)}>
        <Key letter={val}></Key>
        </span>
    ));
    const listBot = botRow.map((val) => (
        <span key={val} onClick={() => handleKey(val)}>
        <Key letter={val}></Key>
        </span>
    ));

    return (
        <div>
        <PhraseBoard phrase={phrase}/>
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
// *****************************************************************
export default Interface;
