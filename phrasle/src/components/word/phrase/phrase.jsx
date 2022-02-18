import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components'
import LetterBox from '../wordbox/wordbox.jsx';

function PhraseBoard({ phrase }) {
    // state & other declarations***************************************
    const phrase_chars = phrase.split('');
    // *****************************************************************

    // helper functions ************************************************
    // *****************************************************************


    // jsx *************************************************************
    let Phrase = phrase_chars.map((letter) => {
        return(
            <LetterBox 
                letter={letter.toUpperCase()}
                empty={letter == ' '}
            />
        );
    });

    return (
        <Row>
          {Phrase}
        </Row>
    );
    // *****************************************************************
}

// styled **************************************************************
const Row = styled.div`
    text-align: center;
`
// *********************************************************************

export default PhraseBoard;
