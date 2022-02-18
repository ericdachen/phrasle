import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components'
import LetterBox from '../wordbox/wordbox.jsx';

function PhraseBoard({ phrase, guess }) {
    // state & other declarations***************************************
    const phrase_chars = phrase.split('');
    // *****************************************************************

    // helper functions ************************************************
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
    let GuessOne = phrase_chars.map((letter, index) => {
        return(
            <LetterBox 
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
                {GuessOne}
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
