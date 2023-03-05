import React from 'react';

const JokeCard = ({ joke }) => {
  return (
    <div className='joke'>
        <h2>{joke.joke}</h2>
        <h2>{joke.delivery}</h2>
        <h2>{joke.setup}</h2>
    </div>
  )
}

export default JokeCard;
