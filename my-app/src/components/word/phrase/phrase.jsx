import React from 'react';
import ReactDOM from 'react-dom';
import './key.css';
import styled, {css} from 'styled-components'
import LetterBox from '../wordbox/wordbox';

class PhraseBoard extends React.Component {
    render() {
        return (
            <>
            <LetterBox letter="Q"/>
            </>
        );
    }
}

export default PhraseBoard;