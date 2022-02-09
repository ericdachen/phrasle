import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components'
import LetterBox from '../wordbox/wordbox.jsx';

const Row = styled.div`
  text-align: center;
`

function PhraseBoard() {
        return (
            //TODO .map this using stuff from dictionary
            <Row>
            <LetterBox letter="G"/>
            <LetterBox letter="O"/>
            <LetterBox letter="" empty="true"/>
            <LetterBox letter="B"/>
            <LetterBox letter="I"/>
            <LetterBox letter="G"/>
            <LetterBox letter="" empty="true"/>
            <LetterBox letter="O"/>
            <LetterBox letter="R"/>
            <LetterBox letter="" empty="true"/>
            <LetterBox letter="G"/>
            <LetterBox letter="O"/>
            <LetterBox letter="" empty="true"/>
            <LetterBox letter="H"/>
            <LetterBox letter="O"/>
            <LetterBox letter="M"/>
            <LetterBox letter="E"/>
            </Row>
        );
}

export default PhraseBoard;
