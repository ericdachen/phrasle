import React from 'react';
import './key.css';
import styled, {css} from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid gray;
  color: gray;
  margin: 0.1em 0.1em;
  padding: 1em 0.75em;
  min-width: 2.7em;
  font-weight: bold;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

function Key(props) {
        return (
            <Button>{props.letter}</Button>
        );  
  }

export default Key;