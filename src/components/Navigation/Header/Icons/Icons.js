import React from 'react'
import { Link } from 'react-router-dom'
import './Icons.scss'
import IconsCounter from './IconsCounter/IconsCounter'

const Icons = props => (
    <div className="icons">

        <div className="icons__item">
            <Link className='icons__link' to='/notfound'>
                <span className="icons__scores">
                    <span className="icons__scores-title">Плюс</span>
                </span>
                <span className="icons__item_hidden-span">Баллы</span>
            </Link>
        </div>

        <div className="icons__item">
            <Link className='icons__link' to='/unauth-orders' >
                <div className='icons__block'>
                    {/*<IconsCounter number={1} />*/}
                    <img
                        className="icons__img"
                        src={require('../../../../static/images/navigation/header/orders.png')}
                        alt="orders"
                    />
                </div>
                <span className="icons__item_hidden-span">Заказы</span>
            </Link>
        </div>

        <div className="icons__item">
            <Link className='icons__link' to='/unauth-favourites' >
                <div className='icons__block'>
                    {/*<IconsCounter number={2} />*/}
                    <img
                        className="icons__img"
                        src={require('../../../../static/images/navigation/header/heart.png')}
                        alt="favourites"
                    />
                </div>
                <span className="icons__item_hidden-span">Избранное</span>
            </Link>
        </div>

        <div className="icons__item icons__item_basket">
            <Link className='icons__link' to='/basket' >
                <div className='icons__block'>
                    {/*<IconsCounter number={3} />*/}
                    <img
                        className="icons__img"
                        src={require('../../../../static/images/navigation/header/cart.png')}
                        alt="cart"
                    />
                </div>
                <span className="icons__item_hidden-span">Корзина</span>
            </Link>
        </div>

        <div className="icons__button">
            <a href="#">
                <span>Войти</span>
            </a>
        </div>

    </div>
)

export default Icons