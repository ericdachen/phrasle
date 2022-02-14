import PhraseBoard from "../word/phrase/phrase";
import styled, {css} from 'styled-components'
import React, {useState} from 'react';
import Key from "../letterbox/key";

const Row = styled.div`
  text-align: center;
`


function Interface() {
    return (
        <div>
            <PhraseBoard/>
            <Row>
                <Key letter="Q"/>
                <Key letter="W"/>
                <Key letter="E"/>
                <Key letter="R"/>
                <Key letter="T"/>
                <Key letter="Y"/>
                <Key letter="U"/>
                <Key letter="I"/>
                <Key letter="O"/>
                <Key letter="P"/>
            </Row>
            <Row>
                <Key letter="A"/>
                <Key letter="S"/>
                <Key letter="D"/>
                <Key letter="F"/>
                <Key letter="G"/>
                <Key letter="H"/>
                <Key letter="J"/>
                <Key letter="K"/>
                <Key letter="L"/>
            </Row>
            <Row>
                <Key letter="Enter"/>
                <Key letter="Z"/>
                <Key letter="X"/>
                <Key letter="C"/>
                <Key letter="V"/>
                <Key letter="B"/>
                <Key letter="N"/>
                <Key letter="M"/>
                <Key letter="Delete"/>
            </Row>
        </div>

    )
}

export default Interface;
