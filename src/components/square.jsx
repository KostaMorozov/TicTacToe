import React from 'react'
import Circle from './circle'
import Cross from './cross'
import { CROSS,CIRCLE } from './board'

export default function Square({position,value,onChoice}) {
    return (
        <div className='square' onClick={()=>onChoice(position)}>
            {value === CROSS && <Cross/>}
            {value === CIRCLE && <Circle/>}
        </div>
    )
}
