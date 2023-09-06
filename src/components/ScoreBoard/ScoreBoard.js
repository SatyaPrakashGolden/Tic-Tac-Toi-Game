import React from 'react'
import './ScoreBoard.css'
function ScoreBoard({xScore,yScore,tie}) {
  return (
    <div className='Scoreboard'>
        <span className='x-score'>P1::{xScore}</span>
            <span className='tie'>Draw::{tie}</span>
            <span className='o-score'>P2::{yScore}</span>
    </div>
  )
}

export default ScoreBoard