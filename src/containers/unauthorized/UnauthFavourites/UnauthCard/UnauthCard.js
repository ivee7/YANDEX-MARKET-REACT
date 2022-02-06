import React from 'react'
import './UnauthCard.scss'
import { Link } from 'react-router-dom'

const UnauthCard = props => (
    <div className='unauth-card'>
        <span style={props.image} className="unauth-card__image">
        </span>
        <h2 className="unauth-card__title">{props.title}</h2>
        <div className="unauth-card__inscription">
            {props.inscription}
        </div>
        <div className="unauth-card__link-wrapper">
            <Link className="unauth-card__link" to='/auth'>
                <span className="unauth-card__link-text">Войти</span>
            </Link>
        </div>
    </div>
)

export default UnauthCard