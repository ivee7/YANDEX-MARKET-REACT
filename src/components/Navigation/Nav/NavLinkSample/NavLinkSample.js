import React from 'react'
import './NavLinkSample.scss'

const NavLinkSample = props => (
    <div className='nav-link'>
        <a href={props.href}><span>{props.title}</span></a>
    </div>
)

export default NavLinkSample