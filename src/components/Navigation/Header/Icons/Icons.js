import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Icons.scss'
import IconsCounter from './IconsCounter/IconsCounter'

const setActive = ({isActive}) => isActive ? 'icons__link_active' : 'icons__link'

const Icons = props => (
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
                    {/*<IconsCounter number={3} />*/}
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

export default Icons