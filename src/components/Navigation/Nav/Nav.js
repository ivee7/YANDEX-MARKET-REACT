import React, {Component} from 'react'
import './Nav.scss'
import NavLinkSample from './NavLinkSample/NavLinkSample'
import NavLinkLocation from './NavLinkLocation/NavLinkLocation'
import NavLinkNewYear from './NavLinkNewYear/NavLinkNewYear'

class Nav extends Component {

    render() {

        return (
            <div className='nav'>
                <div className='nav__wrapper'>
                    <div className='nav__wrapper-inner'>

                        <div className='nav__one'>

                            <NavLinkLocation />

                            <NavLinkNewYear />

                            <NavLinkSample href='#' title='Экспресс' />

                            <NavLinkSample href='#' title='Одежда' />

                            <NavLinkSample href='#' title='Дом' />

                            <NavLinkSample href='#' title='Электроника' />

                            <NavLinkSample href='#' title='Бытовая техника' />

                            <NavLinkSample href='#' title='Детям' />

                            <NavLinkSample href='#' title='Спорт' />

                            <NavLinkSample href='#' title='Продукты' />

                            <NavLinkSample href='#' title='Дача' />

                            <NavLinkSample href='#' title='Ювелирные изделия' />

                        </div>

                        <div className='nav__two'>
                            <div className='nav__two-wrapper'>

                                <NavLinkSample href='#' title='Трансляции' />

                                <NavLinkSample href='#' title='Продавайте на Маркете' />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Nav