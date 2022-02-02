import React from 'react';
import styled, {css} from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 0px;
    border: 1.5px solid black;
    color: black;
    margin: 0.1em 0.1em;
    padding: 1em 0.75em;
    min-width: 2.7em;
    min-height: 3.5em;
    font-weight: bold;

    ${props =>
        props.hidden &&
        css`
    `};
`

class LetterBox extends React.Component {
    render () {
        return (
            <Button>{this.props.letter}</Button>
        );
    }
}

export default LetterBox;