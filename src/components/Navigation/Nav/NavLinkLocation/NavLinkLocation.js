import React from 'react'
import './NavLinkLocation.scss'

const NavLinkLocation = props => (
    <div className='nav-link-location'>
        <div className='nav-link-location__wrapper'>

            <button className='nav-link-location__button'>

                <div className='nav-link-location__img-wrapper'>

                    <img className='nav-link-location__img'
                         src={require('../../../../static/images/navigation/nav/location.png')}
                         alt='location'
                    />

                </div>

                <div className='nav-link-location__title'>Москва</div>

            </button>

        </div>
    </div>
)

export default NavLinkLocation