import React from 'react'
import './Score.css'

const Score = () => {
  return (
    <div className='score-box'>
        <div className='score-name'>
            <p>Name</p>
            <p>Time</p>
        </div>

        <div className='score'></div>
    </div>
  )
}

export default Score