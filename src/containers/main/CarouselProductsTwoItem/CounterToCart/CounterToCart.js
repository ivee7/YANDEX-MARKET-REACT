import React from 'react'
import './CounterToCart.scss'

const CounterToCart = props => (
    <div className='counter-to-cart'>
        <div className='counter-to-cart__block'>
            <span className='counter-to-cart__block-span'>–</span>
        </div>
        <span>
            <span>1</span>
        </span>
        <div className='counter-to-cart__block'>
            <span className='counter-to-cart__block-span'>+</span>
        </div>
    </div>
)

export default CounterToCart