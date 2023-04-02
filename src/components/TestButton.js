import React from 'react';
import './TestButton.css'

const TestButton = ({onClick, textButton}) => {
    return (
        <div>
            <button onClick={onClick}>{textButton}</button>
        </div>
    )

}

export default TestButton;