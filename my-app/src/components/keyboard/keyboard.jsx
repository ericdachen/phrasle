import React from 'react';
import styled, {css} from 'styled-components'
import Key from '../letterbox/key.jsx';
import './keyboard.css';

const Row = styled.div`
  text-align: center;
`


class KeyBoard extends React.Component {
    render() {
        return (
            <div className='keyboard'>
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
}

export default KeyBoard;