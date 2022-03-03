import React from 'react'
import './CounterToCart.scss'

const CounterToCart = props => (
    <div className='counter-to-cart'>
        <div 
            className='counter-to-cart__block'
            onClick={() => props.delFromCart(props.product.id)}
        >
            <span className='counter-to-cart__block-span'>–</span>
        </div>
        <span>
            <span>{props.cartQuantity}</span>
        </span>
        <div 
            className='counter-to-cart__block'
            onClick={() => props.addToCart(props.product)}
        >
            <span className='counter-to-cart__block-span'>+</span>
        </div>
    </div>
)

export default CounterToCart