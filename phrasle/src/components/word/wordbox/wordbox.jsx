import React from 'react';
import styled, {css} from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 0px;
    border: 1.5px solid black;
    color: black;
    margin: 0.1em -0.025em;
    padding: 1em 0.75em;
    min-width: 2.7em;
    min-height: 3.5em;
    font-weight: bold;

    ${props =>
        props.empty &&
        css`
        border: 0px solid white;
        visibility: hidden;
    `};
`

function LetterBox(props) {
        const empty = (props.empty===true);

        if (empty) {
            return <Button empty>{props.letter}</Button>;
        }
        else {
            return <Button>{props.letter}</Button>;
        }
}

export default LetterBox;