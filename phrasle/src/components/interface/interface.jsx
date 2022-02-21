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
    const [phrase, setPhrase] = useState("");
    const [guessNumber, setGuessNumber] = useState(0);

    const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const botRow = ["Z", "X", "C", "V", "N", "M"];
    // *****************************************************************

    // helper functions ************************************************
    useEffect(() => {
        // this sets our phrase on load
        setPhrase(getPhrase());
    }, []);

    function handleKey(e) {
        setGuess((guess) => guess.concat(e));
        console.log(guess);
    }

    function handleEnter(e) {
        setGuessNumber(guessNumber + 1);
    }

    function handleDelete(e) {
        setGuess((guess) => guess.slice(0, -1));
        console.log(guess);
    }

    function resetGuess() {
        setGuess("");
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
        <Game>
            <PhraseBoard 
                phrase={phrase} 
                guess={guess} 
                guessNumber={guessNumber}
                resetGuess={resetGuess}
            />
            <CurrentGuess>{guess}</CurrentGuess>
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
        </Game>
    );
}
// *****************************************************************

const Game = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CurrentGuess = styled.div`
    border: 1px solid black;
    height: 1rem;
    width: 250px;
    padding: 15px;
    text-align: center;
`

export default Interface;
