import React, {Component} from 'react'
import './BasketGood.scss'
import HeartSvg from '../../../components/svg/HeartSvg'
import CrossSvg from '../../../components/svg/CrossSvg'
import MinusSvg from '../../../components/svg/MinusSvg'
import PlusSvg from '../../../components/svg/PlusSvg'

class BasketGood extends Component {

    state = {
        isFav: false
    }

    toggleFavHandler = () => {
        this.setState({
            isFav: !this.state.isFav
        })
    }

    render() {

        const clsCheck = ['basket-good__checkbox']
        const clsFav = ['basket-good__fav']

        if (this.props.item.isChecked) {
            clsCheck.push('basket-good__checkbox_checked')
        }

        if (this.state.isFav) {
            clsFav.push('basket-good__fav_active')
        }

        return (
            <div className='basket-good'>

                <div className='basket-good__checkbox-wrapper'>
                    <label htmlFor="">
                        <span
                            onClick={() => this.props.toggleCheckSingle(this.props.item.id)} 
                            className={clsCheck.join(' ')}>
                            <span className='basket-good__checkbox-background'>
                                <span
                                    className='basket-good__checkbox-checkmark'
                                 >
                                </span>
                            </span>
                        </span>
                    </label>
                </div>

                <div className='basket-good__image'>
                    <a href={this.props.item.href}>
                        <div className='basket-good__image-wrapper'>
                            <div className='basket-good__image-inner'>
                                <img
                                    className='basket-good__img'
                                    src={require(`../../../static/images/main/${this.props.item.image}`)}
                                    alt=''
                                />
                            </div>
                        </div>
                    </a>
                </div>

                <div className='basket-good__description'>
                    <div className='basket-good__description-wrapper'>
                        <span className='basket-good__description-text'>
                            <a className='basket-good__desc-link' href="">
                                {this.props.item.name}
                            </a>
                        </span>

                        <span className='basket-good__info'>{this.props.item.vendor}</span>

                        <div className='basket-good__fav-or-del-wrapper'>
                            <div className='basket-good__fav-or-del'>
                                <div className='basket-good__fav-wrapper'>
                                    <button
                                        onClick={this.toggleFavHandler}
                                        className={clsFav.join(' ')}
                                        data-tooltip-like={this.state.isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
                                    >
                                        <HeartSvg />
                                        <span className='basket-good__fav-text'>Избранное</span>
                                    </button>
                                </div>
                                <div className='basket-good__del-wrapper'>
                                    <button
                                        className='basket-good__del'
                                        onClick={() => this.props.delProdTotally(this.props.item.id)}
                                    >
                                        <CrossSvg />
                                        <span className='basket-good__del-text'>Удалить</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='basket-good__price-and-counter-wrapper'>
                    <div className='basket-good__price-wrapper'>
                        <div className='basket-good__price'>
                            <span className='basket-good__price-text'>
                                {this.props.item.price}
                                <span>{this.props.item.currency}</span>
                            </span>
                        </div>
                        {this.props.item.prevPrice ?
                            <div className='basket-good__discount-wrapper'>
                                <span className='basket-good__discounter'>
                                    {this.props.item.prevPrice}
                                    <span>{this.props.item.currency}</span>
                                </span>
                            </div>
                            : null
                        }
                    </div>

                    <div className='basket-good__counter-wrapper'>
                        <button
                            disabled={this.props.item.cartQuantity === 1}
                            onClick={() => this.props.delFromCart(this.props.item.id)}
                            className='basket-good__counter-button basket-good__counter-button_left'>
                            <span className='basket-good__counter-button-span'>
                                <MinusSvg className='basket-good__counter-sign' />
                            </span>
                        </button>
                        <div className='basket-good__counter-number'>
                            <div>{this.props.item.cartQuantity}</div>
                        </div>
                        <button
                            onClick={() => this.props.addToCart(this.props.item)}
                            className='basket-good__counter-button basket-good__counter-button_right'>
                            <span className='basket-good__counter-button-span'>
                                <PlusSvg className='basket-good__counter-sign' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketGood