import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import styled, {css} from 'styled-components'
import LetterBox from '../wordbox/wordbox.jsx';

function PhraseBoard({ phrase, guess, guessNumber }) {
    // state & other declarations***************************************
    const phrase_chars = phrase.split('');
    const [guessChars, setGuessChars] = useState([]);
    const [guessOne, setGuessOne] = useState([]);
    // *****************************************************************

    // helper functions ************************************************
    useEffect(() => {
        setGuessChars(guess.split(''));
    }, [guess]);

    useEffect(() => {
        console.log(guessChars);
        setGuessOne(guessChars);
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
    // let currentGuess = guessChars.map((letter, index) => {
    //     return(
    //         <LetterBox 
    //             empty={letter == ' '}
    //             key={index}
    //         />
    //     );
    // });
    // let Guess = phrase_chars.map((letter, index) => {
    //     return(
    //         <LetterBox 
    //             empty={letter == ' '}
    //             key={index}
    //         />
    //     );
    // });

    return (
        <Guesses>
            <Row>
                {Phrase}
            </Row>
            <Row>
                {
                guessOne.length ? 
                    guessOne.map((letter, index) => {
                        return(
                            <LetterBox
                                letter={letter}
                                empty={letter == ' '}
                                key={index}
                            />
                        );
                    }) :
                    Phrase
                }
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
