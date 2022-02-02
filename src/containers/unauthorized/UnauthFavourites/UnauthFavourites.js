import React, {Component} from 'react'
import './UnauthFavourites.scss'

class UnauthFavourites extends Component {

    render() {

        return (
            <div className="main-unauth-favourites">
                <h1 className="main-unauth-favourites__title">Избранное</h1>
                <div className="main-unauth-favourites__container">
                    <span className="main-unauth-favourites__image"></span>
                    <h2 className="main-unauth-favourites__title-two">Войдите в учётную запись</h2>
                    <div className="main-unauth-favourites__inscription">
                        Так вы сможете видеть сохранённые товары на любых устройствах. Это удобно!
                    </div>
                    <div className="main-unauth-favourites__link-wrapper">
                        <a className="main-unauth-favourites__link" href="">
                            <span className="main-unauth-favourites__link-text">Войти</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default UnauthFavourites