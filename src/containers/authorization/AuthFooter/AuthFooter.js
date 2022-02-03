import React from 'react'
import './AuthFooter.scss'

const AuthFooter = () => (
    <footer className="auth-footer">

        <div className="auth-footer__incognito-recommendation">
            <span className="auth-footer__item">
                <a className="auth-footer__link" href="#">
                    Используйте режим инкогнито на чужом компьютере
                </a>
            </span>
        </div>

        <div className="auth-footer__description">
            <span className="auth-footer__item auth-footer__item-ru-eng">
                Ru
            </span>

            <span className="auth-footer__item">
                <a className="auth-footer__link" href="#">Справка и поддержка</a>
            </span>

            <span className="auth-footer__item">
                <span className="auth-footer__years">© 2001-2022, </span>
                <a className="auth-footer__link" href="#">Яндекс</a>
            </span>
        </div>

    </footer>
)

export default AuthFooter
