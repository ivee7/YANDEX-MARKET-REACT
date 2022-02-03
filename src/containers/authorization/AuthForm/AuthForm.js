import React, {Component} from 'react'
import './AuthForm.scss'

class AuthForm extends Component {

    render() {

        return (
            <form className="auth-form" action="">

                <div className="auth-form__user">
                    <a className="auth-form__user-link" href="#">
                        <span className="auth-form__user-avatar"></span>
                        <span className="auth-form__user-info">
                            <span className="auth-form__user-name">ivees7</span>
                            <span className="auth-form__user-mail">sample@yandex.ru</span>
                        </span>
                    </a>
                </div>

                <div className="auth-form__password">
                    <div className="auth-form__password-label-field">
                        <label className="auth-form__password-label" htmlFor="auth-form__password-input">
                            Введите пароль
                        </label>
                    </div>

                    <div className="auth-form__password-input-wrapper">
                        <input placeholder="********"
                               id="auth-form__password-input"
                               className="auth-form__password-input"
                               type="password"
                        />
                        <button className="auth-form__password-view"></button>
                    </div>

                    <div className="auth-form__password-border"></div>

                    <div className="auth-form__password-help">
                        <a className="auth-form__password-help-link" href="#">Не помню пароль</a>
                    </div>
                </div>

                <div className="auth-form__submit-area">
                    <button className="auth-form__submit-button">
                        <span className="auth-form__submit-text">Войти</span>
                    </button>
                </div>

                <div className="auth-form__qr-area">
                    <button className="auth-form__qr-button">
                        <span className="auth-form__qr-text">
                        <span className="auth-form__qr-icon"></span>Войти по QR-коду</span>
                    </button>
                </div>
            </form>
        )
    }
}

export default AuthForm