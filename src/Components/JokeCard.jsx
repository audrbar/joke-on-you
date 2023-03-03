import React from 'react';

const JokeCard = ({ joke }) => {
  return (
    <div className='joke'>
        <div>{joke.category}</div>
        <div>{joke.joke}</div>
    </div>
  )
}

export default JokeCard;
