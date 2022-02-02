import React, {Component} from 'react'
import './UnauthBasket.scss'

class UnauthBasket extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="unauthorized-basket">
                    <div className="unauthorized-basket__wrapper">
                        <div className="unauthorized-basket__inner">

                            <div className="unauthorized-basket__title">
                                Войдите в аккаунт
                            </div>

                            <div className="unauthorized-basket__text">
                                И если вы уже добавляли товары в корзину - они появятся здесь.
                                <br/>
                                А новые не потеряются
                            </div>

                            <div className="unauthorized-basket__links">
                                <div className="unauthorized-basket__block">
                                    <a href="">
                                        <button className="unauthorized-basket__enter">
                                            <span>Войти</span>
                                        </button>
                                    </a>
                                </div>

                                <div className="unauthorized-basket__block">
                                    <a href="">
                                        <button className="unauthorized-basket__stocks">
                                            <span>Скидки и акции</span>
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div>

                </div>
            </React.Fragment>
        )
    }
}

export default UnauthBasket