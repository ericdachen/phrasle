import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components'
import LetterBox from '../wordbox/wordbox.jsx';

const Row = styled.div`
  text-align: center;
`

class PhraseBoard extends React.Component {
    render() {
        return (
            //TODO .map this using stuff from dictionary
            <Row>
            <LetterBox letter="G"/>
            <LetterBox letter="O"/>
            <LetterBox letter=""/>
            <LetterBox letter="B"/>
            <LetterBox letter="I"/>
            <LetterBox letter="G"/>
            <LetterBox letter=""/>
            <LetterBox letter="O"/>
            <LetterBox letter="R"/>
            <LetterBox letter=""/>
            <LetterBox letter="G"/>
            <LetterBox letter="O"/>
            <LetterBox letter=""/>
            <LetterBox letter="H"/>
            <LetterBox letter="O"/>
            <LetterBox letter="M"/>
            <LetterBox letter="E"/>
            </Row>
        );
    }
}

export default PhraseBoard;
