import React from 'react';
import './Character.css';

const Character = ({character}) => {
    return (
        <div>
            <h2>You are: <br></br> <span className='characterName'>{character.name}</span></h2>
            <img alt='robot' src={`${character.image}`}></img>
        </div>
    )

}

export default Character;