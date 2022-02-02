import React from 'react'
import './CarouselMenuOfProductsItem.scss'

const CarouselMenuOfProductsItem = props => {

    return (
        <div className='carousel-menu-of-products-item'>
            <a className='carousel-menu-of-products-item__link' href=''>
                <img
                    className='carousel-menu-of-products-item__image'
                    src={require(`../../../static/images/main/${props.imageName}`)}
                    alt=''
                />
            </a>
        </div>
    )
}

export default CarouselMenuOfProductsItem