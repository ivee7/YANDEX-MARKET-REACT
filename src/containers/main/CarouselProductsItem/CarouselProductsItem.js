import React, {Component} from 'react'
import './CarouselProductsItem.scss'

class CarouselProductsItem extends Component {

    render() {

        return (
            <div className='carousel-products-item'>
                <div className='carousel-products-item__outer'>
                    <div className='carousel-products-item__inner'>
                        <a className='carousel-products-item__link' href=''>
                            <div className='carousel-products-item__lining'>
                                <img
                                    className='carousel-products-item__image'
                                    src={require(`../../../static/images/main/${this.props.image}`)}
                                    alt=''
                                />
                                <div className='carousel-products-item__title'>
                                    <span className='carousel-products-item__title-name'>
                                        { this.props.title }
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselProductsItem