import React, {Component} from 'react'
import './CarouselProducts.scss'
import CarouselProductsItem from '../CarouselProductsItem/CarouselProductsItem'

class CarouselProducts extends Component {

    render() {

        return (
            <div className='carousel-products'>
                <div className='carousel-products__wrapper'>

                    <div className='carousel-products__title'>
                        <div className='carousel-products__title-wrapper'>
                            <div className='carousel-products__title-name'>
                                { this.props.data.titleGroup }
                            </div>
                            <a className='carousel-products__title-link' href=''>смотреть всё</a>
                        </div>
                    </div>

                    <div className='carousel-products__goods'>
                        <div className='carousel-products__goods-wrapper'>

                            { this.props.data.categories.map((category, index) => {
                                return (
                                    <CarouselProductsItem
                                        key={index}
                                        title={category.title}
                                        image={category.image}
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

export default CarouselProducts