import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import LetterBox from '../wordbox/wordbox.jsx';

function PhraseBoard({ phrase, guess, guessNumber, resetGuess }) {
    // state & other declarations***************************************
    const phrase_chars = phrase.split('');
    const [guesses, setGuesses] = useState([]);
    // *****************************************************************

    // helper functions ************************************************
    useEffect(() => {
        setGuesses([...guesses, guess.split('')]);
        resetGuess();
    }, [guessNumber]);
    // *****************************************************************

    // jsx *************************************************************
    let Phrase = phrase_chars.map((letter, index) => {
        return(
            <LetterBox 
                letter={letter.toUpperCase()}
                empty={letter == ' '}
                key={index}
            />
        );
    });
    let emptyPhrase = phrase_chars.map((letter, index) => {
        return(
            <LetterBox 
                letter={' '}
                empty={letter == ' '}
                key={index}
            />
        );
    });

    return (
        <Guesses>
            <Row>
                {Phrase}
            </Row>
            <Row>
                {guesses[0] ? guesses[0].map((letter, index) => {
                    return(
                        <LetterBox
                            letter={letter}
                            key={letter == ' '}
                            key={index}
                        />
                    );
                }) : emptyPhrase}
            </Row>
            <Row>
                {guesses[1] ? guesses[1].map((letter, index) => {
                    return(
                        <LetterBox
                            letter={letter}
                            key={letter == ' '}
                            key={index}
                        />
                    );
                }) : emptyPhrase}
            </Row>
            <Row>
                {guesses[2] ? guesses[2].map((letter, index) => {
                    return(
                        <LetterBox
                            letter={letter}
                            key={letter == ' '}
                            key={index}
                        />
                    );
                }) : emptyPhrase}
            </Row>
            <Row>
                {guesses[3] ? guesses[3].map((letter, index) => {
                    return(
                        <LetterBox
                            letter={letter}
                            key={letter == ' '}
                            key={index}
                        />
                    );
                }) : emptyPhrase}
            </Row>
            <Row>
                {guesses[4] ? guesses[4].map((letter, index) => {
                    return(
                        <LetterBox
                            letter={letter}
                            key={letter == ' '}
                            key={index}
                        />
                    );
                }) : emptyPhrase}
            </Row>
            <Row>
                {guesses[5] ? guesses[5].map((letter, index) => {
                    return(
                        <LetterBox
                            letter={letter}
                            key={letter == ' '}
                            key={index}
                        />
                    );
                }) : emptyPhrase}
            </Row>
        </Guesses>
    );
    // *****************************************************************
}

// styled **************************************************************
const Guesses = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Row = styled.div`
    text-align: center;
`
// *********************************************************************

export default PhraseBoard;
