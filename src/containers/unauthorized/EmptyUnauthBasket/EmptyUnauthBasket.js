import React, {Component} from 'react'
import './EmptyUnauthBasket.scss'

class EmptyUnauthBasket extends Component {

    render() {

        return (
            <React.Fragment>
                <div className='empty-unauth-basket'>
                    <div className='empty-unauth-basket__wrapper'>
                        <div className='empty-unauth-basket__inner'>

                            <div className='empty-unauth-basket__title'>
                                Войдите в аккаунт
                            </div>

                            <div className='empty-unauth-basket__text'>
                                И если вы уже добавляли товары в корзину - они появятся здесь.
                                <br/>
                                А новые не потеряются
                            </div>

                            <div className='empty-unauth-basket__links'>
                                <div className='empty-unauth-basket__block'>
                                    <a href=''>
                                        <button className='empty-unauth-basket__enter'>
                                            <span>Войти</span>
                                        </button>
                                    </a>
                                </div>

                                <div className='empty-unauth-basket__block'>
                                    <a href=''>
                                        <button className='empty-unauth-basket__stocks'>
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

export default EmptyUnauthBasket