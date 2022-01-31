import React from 'react';
import ReactDOM from 'react-dom';
import './key.css';

class Key extends React.Component {
    render () {
        return (
            <div className="keyBox">
                <h2>{this.props.letter}</h2>
            </div>
        )
    }
}

export default Key;