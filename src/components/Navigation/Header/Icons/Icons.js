import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Icons.scss'
import IconsCounter from './IconsCounter/IconsCounter'
import {connect} from 'react-redux'

class Icons extends Component {

    render() {
        const setActive = ({isActive}) => isActive ? 'icons__link_active' : 'icons__link'

        let totalQuantity = this.props.cart.reduce((sum, prod) => sum + prod.cartQuantity, 0)

        return (
            <div className='icons'>

                <div className='icons__item'>
                    <Link className='icons__link' to='/notfound'>
                        <span className='icons__scores'>
                            <span className='icons__scores-title'>Плюс</span>
                        </span>
                        <span className='icons__item_hidden-span'>Баллы</span>
                    </Link>
                </div>

                <div className='icons__item'>
                    <NavLink className={setActive} to='/orders' >
                        <div className='icons__block'>
                            {/*<IconsCounter number={1} />*/}
                            <img
                                className='icons__img'
                                src={require('../../../../static/images/navigation/header/orders.png')}
                                alt='orders'
                            />
                        </div>
                        <span className='icons__item_hidden-span'>Заказы</span>
                    </NavLink>
                </div>

                <div className='icons__item'>
                    <NavLink className={setActive} to='/favourites' >
                        <div className='icons__block'>
                            {/*<IconsCounter number={2} />*/}
                            <img
                                className='icons__img'
                                src={require('../../../../static/images/navigation/header/heart.png')}
                                alt='favourites'
                            />
                        </div>
                        <span className='icons__item_hidden-span'>Избранное</span>
                    </NavLink>
                </div>

                <div className='icons__item icons__item_basket'>
                    <NavLink className={setActive} to='/basket' >
                        <div className='icons__block'>
                            {this.props.cart.length === 0 ? null :
                                <IconsCounter 
                                    number={totalQuantity}
                                />
                            }
                            <img
                                className='icons__img'
                                src={require('../../../../static/images/navigation/header/cart.png')}
                                alt="cart"
                            />
                        </div>
                        <span className='icons__item_hidden-span'>Корзина</span>
                    </NavLink>
                </div>

                <div className='icons__button'>
                    <Link to='/auth' >
                        <span>Войти</span>
                    </Link>
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

export default connect(mapStateToProps)(Icons)