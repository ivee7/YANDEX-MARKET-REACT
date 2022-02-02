import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.scss'

const Logo = props => (
    <div className="logo">

        <a href="https://yandex.ru/" className='logo__yandex-link'></a>

        <Link to='/' className='logo__market-link'></Link>

    </div>
)

export default Logo