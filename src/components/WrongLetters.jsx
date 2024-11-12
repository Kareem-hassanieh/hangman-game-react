import React from 'react'

function WrongLetters({wrongLetters}) {
  return (
    <div>
    {wrongLetters.length > 0 && 
      <p>Wrong</p>
    }
    {wrongLetters
      .map((letter, i) => <span key={i}>{letter}</span>)
      .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
  </div>
  )
}

export default WrongLetters