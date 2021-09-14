import React from 'react'
import { CIRCLE,CROSS } from './board'

export default function Result({winner,onReset}) {
    return (
        <div className='result'>
           {winner === CROSS || winner === CIRCLE ? `${winner} is the WINNER`: `${winner}` }
           <button className='btn btn-primary' onClick={onReset}>Reset</button>
        </div>
    )
}
