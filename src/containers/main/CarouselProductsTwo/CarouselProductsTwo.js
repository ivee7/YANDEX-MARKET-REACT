import React, {Component} from 'react'
import './CarouselProductsTwo.scss'
import CarouselProductsTwoItem from '../CarouselProductsTwoItem/CarouselProductsTwoItem'
import ToLeftButton from '../ToLeftButton/ToLeftButton'
import ToRightButton from '../ToRightButton/ToRightButton'

class CarouselProductsTwo extends Component {

    render() {

        return (
            <div className='carousel-products-two'>
                <div className='carousel-products-two__wrapper'>

                    <div className='carousel-products-two__title'>
                        <div className='carousel-products-two__title-wrapper'>
                            <div className='carousel-products-two__title-name'>
                                { this.props.data.title }
                            </div>
                            <a className='carousel-products-two__title-link' href="">смотреть всё</a>
                        </div>
                    </div>

                    <div className='carousel-products-two__goods'>
                        <div className='carousel-products-two__goods-outer'>
                            <div className='carousel-products-two__goods-inner'>
                                <div className='carousel-products-two__goods-wrapper'>

                                    { this.props.data.products.map((product, index) => {
                                        return (
                                            <CarouselProductsTwoItem
                                                key={index}
                                                product={product}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <ToLeftButton />

                        <ToRightButton />
                    </div>

                </div>
            </div>
        )
    }
}

export default CarouselProductsTwo