import React, {Component} from 'react'
import './CarouselMenuOfProducts.scss'
import CarouselMenuOfProductsItem from '../CarouselMenuOfProductsItem/CarouselMenuOfProductsItem'

class CarouselMenuOfProducts extends Component {

    render() {

        return (
            <div className='carousel-menu-of-products'>
                <div className='carousel-menu-of-products__wrapper'>
                    <div className='carousel-menu-of-products__outer'>
                        <div className='carousel-menu-of-products__inner'>

                            { this.props.data.map((image, index) => {
                                return (
                                    <CarouselMenuOfProductsItem
                                        key={index}
                                        imageName={image}
                                    />
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselMenuOfProducts
