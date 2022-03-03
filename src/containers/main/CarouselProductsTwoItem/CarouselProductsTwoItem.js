import React, {Component} from 'react'
import './CarouselProductsTwoItem.scss'
import './data-tooltip-like.scss'
import ButtonToCart from './ButtonToCart/ButtonToCart'
import CounterToCart from './CounterToCart/CounterToCart'
import HeartSvg from "../../../components/svg/HeartSvg";
import {connect} from 'react-redux'
import { addToCart, delAllFromCart, delFromCart } from '../../../store/actions/cart'
import { addFavProd, delFavProd } from '../../../store/actions/favourites'

class CarouselProductsTwoItem extends Component {

    state = {
        isFav: false,
        cartQuantity: 0,
    }

    toggleFavHandler = () => {
        this.setState({
            isFav: !this.state.isFav
        })
    }

    addToCartHandler = (item) => {
        this.props.addToCart(item)
        this.setState({
            cartQuantity: this.state.cartQuantity += 1
        })
    }

    delFromCartHandler = (id) => {
        this.props.delFromCart(id)
        this.setState({
            cartQuantity: this.state.cartQuantity -= 1
        })
    }

    render() {

        const clsFav = ['carousel-products-two-item__like-button']

        if (this.state.isFav) {
            clsFav.push('carousel-products-two-item__like-button_active')
        }

        return (
            <div className='carousel-products-two-item'>
                <div className='carousel-products-two-item__outer'>
                    <div className='carousel-products-two-item__inner'>

                        <a href={this.props.product.href} className='carousel-products-two-item__link'>

                            <div className='carousel-products-two-item__photo-wrapper'>
                                <div className='carousel-products-two-item__photo-outer'>
                                    <div className='carousel-products-two-item__photo-inner'>
                                        <div className='carousel-products-two-item__photo-internal'>
                                            <img
                                                className='carousel-products-two-item__photo'
                                                src={require(`../../../static/images/main/${this.props.product.image}`)}
                                                alt='guitar'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='carousel-products-two-item__description'>

                                <div className='carousel-products-two-item__description-price-wrapper'>
                                    <span
                                        className='carousel-products-two-item__description-price'>
                                        {this.props.product.price}
                                        <small>{this.props.product.currency}</small>
                                    </span>
                                </div>

                                <div className='carousel-products-two-item__description-stars-wrapper'>
                                    <div className='carousel-products-two-item__description-stars'>

                                        <span className='carousel-products-two-item__description-star'>
                                        </span>

                                        <span className='carousel-products-two-item__description-star'>
                                        </span>

                                        <span className='carousel-products-two-item__description-star'>
                                        </span>

                                        <span className='carousel-products-two-item__description-star'>
                                        </span>

                                        <span className='carousel-products-two-item__description-star'>
                                        </span>

                                    </div>
                                </div>

                                <div className='carousel-products-two-item__description-name-of-product'>
                                    <span>{this.props.product.name}</span>
                                </div>

                                <div className='carousel-products-two-item__description-variants'>
                                    <span>{this.props.product.variants}</span>
                                </div>

                                <div className='carousel-products-two-item__percentage'>
                                    <span className='carousel-products-two-item__percentage-text'>
                                        100% рекомендуют
                                    </span>
                                </div>

                                <div className='carousel-products-two-item__express-delivery'>
                                    <div className='carousel-products-two-item__express-delivery-block'>
                                        <div>
                                            <span className='carousel-products-two-item__express-delivery-text'>
                                                Express–доставка, сегодня
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </a>

                        <div className='carousel-products-two-item__like-wrapper'>
                            <button onClick={this.toggleFavHandler} className={clsFav.join(' ')}>
                                <HeartSvg />
                            </button>
                        </div>

                        <div className='carousel-products-two-item__button-wrapper'>

                            {this.state.cartQuantity >= 1 ?  
                                <CounterToCart
                                    cartQuantity={this.state.cartQuantity}
                                    product={this.props.product} 
                                    addToCart={this.addToCartHandler}
                                    delFromCart={this.delFromCartHandler}
                                />
                                : <ButtonToCart
                                    product={this.props.product}
                                    addToCart={this.addToCartHandler} 
                                />
                            }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item)),
        delFromCart: id => dispatch(delFromCart(id)),
        addFavProd: item => dispatch(addFavProd(item)),
        delFavProd: id => dispatch(delFavProd(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselProductsTwoItem)