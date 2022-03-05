import React, {Component} from 'react'
import './FavGood.scss'
import HeartSvg from '../../../../components/svg/HeartSvg'
import ToCompareSvg from '../../../../components/svg/ToCompareSvg'
import {debounce} from '../../../../utils/debounce'
import {declOfNum} from '../../../../utils/declension'
import ButtonToCart from '../../../main/CarouselProductsTwoItem/ButtonToCart/ButtonToCart'
import CounterToCart from '../../../main/CarouselProductsTwoItem/CounterToCart/CounterToCart'

class FavGood extends Component {
    state = {
        addedToCompare: false,
        showLeftImg: true,
        coordinates: {
            imageWrapperCenterX: null,
            imageWrapperX: null
        }
    }

    cartQuantityHandler = () => {
        const isInCart = this.props.cart.find(prod => prod.id === this.props.product.id)
        if (isInCart) {
            return isInCart.cartQuantity
        } else {
            return false
        }
    }

    imageWrapper = React.createRef();

    componentDidMount() {
        const imageWrapperCenterX = Math.round(this.imageWrapper.current.getBoundingClientRect().width / 2);
        const imageWrapperX = this.imageWrapper.current.getBoundingClientRect().x;
        this.setState({
            coordinates: {
                imageWrapperCenterX: imageWrapperCenterX,
                imageWrapperX: imageWrapperX
            }
        })
    }

    toggleCompareHandler = () => {
        this.setState({
            addedToCompare: !this.state.addedToCompare
        })
    }

    getCoords = (cursorX) => {
        const relativeX = cursorX - this.state.coordinates.imageWrapperX;
        if (relativeX > this.state.coordinates.imageWrapperCenterX && this.state.showLeftImg) {
            this.setState({
                showLeftImg: false
            })
        } else if (relativeX < this.state.coordinates.imageWrapperCenterX && !this.state.showLeftImg) {
            this.setState({
                showLeftImg: true
            })
        }
    }

    optimizedGetCoords = debounce(this.getCoords, 15).bind(this)

    setLeftImage = () =>{
        this.setState({
            showLeftImg: true
        })
    }

    render() {

        let isFav = this.props.fav.find(prod => prod.id === this.props.product.id)

        const favActive = isFav ? 'fav-good__heart-button_active' : ''
        const clsFav = `fav-good__heart-button ${favActive}`

        let img = this.props.product.image

        if (!this.state.showLeftImg) {
            img = this.props.product.imageTwo
        }

        return (
            <article onMouseLeave={!this.state.showLeftImg ? this.setLeftImage : null}  className='fav-good'>

                <div className='fav-good__heart'>
                    <button
                        onClick={() => this.props.toggleFav(this.props.product)}
                        className={clsFav}
                        data-tooltip-like={isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
                    >
                        <span className='fav-good__heart-span'>
                            <HeartSvg />
                        </span>
                    </button>
                    <div
                        onClick={this.toggleCompareHandler}
                        className={`fav-good__to-compare-wrapper ${this.state.addedToCompare ? 'fav-good__to-compare-wrapper_active' : ''}`}
                    >
                        <ToCompareSvg className='fav-good__to-compare' />
                    </div>
                </div>

                <div
                    ref={this.imageWrapper}
                    onMouseMove={(e) => this.optimizedGetCoords(e.clientX)}
                    className='fav-good__images-toggle'
                >
                    <a className='fav-good__images-toggle-link' href=''>
                        <img
                            className='fav-good__images-toggle-image'
                            src={require(`../../../../static/images/products/${this.props.product.id}/${img}`)}
                            alt='image'
                        />
                        <ul className='fav-good__images-toggle-ul'>
                            <li className={`fav-good__images-toggle-li ${this.state.showLeftImg ? 'fav-good__images-toggle-li_left-active' : ''}`}>
                                <button className='fav-good__images-toggle-button'>
                                </button>
                            </li>
                            <li className={`fav-good__images-toggle-li ${!this.state.showLeftImg ? 'fav-good__images-toggle-li_right-active' : ''}`}>
                                <button className='fav-good__images-toggle-button'>
                                </button>
                            </li>
                        </ul>
                    </a>
                </div>

                <div className='fav-good__price-wrapper'>
                    <a href='#' className='fav-good__price'>
                        <span>{this.props.product.price}&nbsp;{this.props.product.currency}</span>
                    </a>
                </div>

                <div>
                    <h3 className='fav-good__name'>
                        <a href="#" className='fav-good__name-link'>
                            <span>{this.props.product.name}</span>
                        </a>
                    </h3>

                    <a href="" className='fav-good__rating-link'>
                        <div className='fav-good__rating-container'>
                            <div className='fav-good__rating'>
                                <span>{this.props.product.rating}</span>
                            </div>
                            <span className='fav-good__rating-feedbacks'>
                                {this.props.product.reviews}&nbsp;{declOfNum(this.props.product.reviews, ['отзыв', 'отзыва', 'отзывов'])}
                            </span>
                        </div>
                    </a>
                </div>

                <div className='fav-good__button-and-delivery'>
                    <div className='fav-good__delivery'>Доставка Яндекса, завтра</div>
                    <div className='fav-good__button-wrapper'>
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

            </article>
        )
    }
}

export default FavGood