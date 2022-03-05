import React, {Component} from 'react'
import './CarouselProductsTwoItem.scss'
import './data-tooltip-like.scss'
import ButtonToCart from './ButtonToCart/ButtonToCart'
import CounterToCart from './CounterToCart/CounterToCart'
import HeartSvg from "../../../components/svg/HeartSvg";
import {connect} from 'react-redux'
import { addToCart, delFromCart } from '../../../store/actions/cart'
import { toggleFav } from '../../../store/actions/favourites'

class CarouselProductsTwoItem extends Component {
    
    cartQuantityHandler = () => {
        const isInCart = this.props.cart.find(prod => prod.id === this.props.product.id)
        if (isInCart) {
            return isInCart.cartQuantity
        } else {
            return false
        }
    }

    render() {

        const clsFav = ['carousel-products-two-item__like-button']

        if (this.props.fav.find(prod => prod.id === this.props.product.id)) {
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
                                                src={require(`../../../static/images/products/${this.props.product.id}/${this.props.product.image}`)}
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
                            <button
                                onClick={() => this.props.toggleFav(this.props.product)} 
                                className={clsFav.join(' ')}
                            >
                                <HeartSvg />
                            </button>
                        </div>

                        <div className='carousel-products-two-item__button-wrapper'>

                            {this.cartQuantityHandler() ?
                                <CounterToCart
                                    cartQuantity={this.cartQuantityHandler()}
                                    product={this.props.product} 
                                    addToCart={this.props.addToCart}
                                    delFromCart={this.props.delFromCart}
                                />  
                                :
                                <ButtonToCart
                                    product={this.props.product}
                                    addToCart={this.props.addToCart} 
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
        cart: state.cart.cart,
        fav: state.fav.fav
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item)),
        delFromCart: id => dispatch(delFromCart(id)),
        toggleFav: item => dispatch(toggleFav(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselProductsTwoItem)