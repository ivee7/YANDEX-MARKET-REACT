import React from 'react'
import './ButtonToCart.scss'

const ButtonToCart = props => (
    <button onClick={() => props.addToCart(props.product)} className='button-to-cart'>
        <span
            className='button-to-cart__title'>
            В корзину
        </span>
    </button>
)

export default ButtonToCart