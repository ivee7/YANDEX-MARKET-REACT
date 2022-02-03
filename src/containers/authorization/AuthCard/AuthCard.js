import React, {Component} from 'react'
import './AuthCard.scss'
import AuthForm from '../AuthForm/AuthForm'

class AuthCard extends Component {

    render() {

        return (
            <div className="auth-card">

                <div className="auth-card__header">
                    <a className="auth-card__header-logo" href="#"></a>
                </div>

                <div className="auth-card__main">
                    <h1 className="auth-card__title">
                        <span>
                            Войдите с Яндекс ID, чтобы ваши товары и настройки сохранялись
                            на всех устройствах, с которых вы заходите на Маркет.
                        </span>
                    </h1>

                    <AuthForm />

                </div>

            </div>
        )
    }
}

export default AuthCard

