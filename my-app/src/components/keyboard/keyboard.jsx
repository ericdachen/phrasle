import React from 'react';
import ReactDOM from 'react-dom';
import Key from '../letterbox/key.jsx';
import './keyboard.css';

class KeyBoard extends React.Component {
    render() {
        return (
            <div className='keyboard'>
                <Key letter='Q'/>
                <Key letter ='W'/>
                <Key letter = 'E'/>
            </div>

        )
    }
}

export default KeyBoard;