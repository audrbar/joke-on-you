import React from 'react'

const JokeCard = ({ joke }) => {
  return (
    <div className='joke'>
        <div>
            <p>{joke.category}</p>
        </div>
        <div>
        </div>
        <div>
            <span>{joke.type}</span>
            <h3>{joke.joke}</h3>
        </div>
    </div>
  )
}

export default JokeCard
