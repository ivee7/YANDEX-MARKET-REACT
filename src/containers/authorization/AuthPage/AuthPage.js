import React, {Component} from 'react'
import './AuthPage.scss'
import AuthCard from '../AuthCard/AuthCard'

class AuthPage extends Component {

    render() {

        return (
            <div className="auth__page-wrapper auth-page">

                <a className="auth-page__link-back" href="#">
                    <span className="auth-page__link-back-text"></span>
                </a>

                <AuthCard />

                <div className="auth-page__promo-text">
                    Яндекс ID - ключ от всех сервисов
                    <a className="auth-page__promo-text-link" href="#">
                        Узнать больше
                    </a>
                </div>

            </div>
        )
    }
}

export default AuthPage