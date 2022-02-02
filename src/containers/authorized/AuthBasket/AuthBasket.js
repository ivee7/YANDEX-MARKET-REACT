import React, {Component} from 'react'
import './AuthBasket.scss'
import BasketGoods from '../BasketProducts/BasketProducts'
import BasketCheque from '../BasketCheque/BasketCheque'

class AuthBasket extends Component {

    state = {
        allIsChecked: true
    }

    checkAllHandler = () => {
        this.setState({
            allIsChecked: !this.state.allIsChecked
        })
    }

    render() {

        const cls = ['auth-basket__header-select-checkbox']

        if (this.state.allIsChecked) {
            cls.push('auth-basket__header-select-checkbox_selected')
        }

        return (
            <div className='auth-basket'>

                <div className='auth-basket__header-wrapper'>
                    <div className='auth-basket__header-inner'>
                        <div className='auth-basket__header'>
                            <h2 className='auth-basket__header-text'>Корзина</h2>
                            <div className='auth-basket__header-nav'>
                                <label onClick={this.checkAllHandler} className='auth-basket__header-label'>
                                    <span className='auth-basket__header-label-wrapper'>
                                        <span className={cls.join(' ')}>
                                            <span className='auth-basket__header-select'></span>
                                        </span>
                                        <span className='auth-basket__header-select-all-text'>Выбрать всё</span>
                                    </span>
                                </label>
                                <button className='auth-basket__header-button'>
                                    <img
                                        className='auth-basket__header-icon'
                                        src={require('../../../static/images/basket/delete-products.png')}
                                        alt="image"
                                    />
                                    <span className='auth-basket__header-delete'>Удалить выбранное (2)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='auth-basket__products-wrapper'>
                    <div className='auth-basket__goods'>
                        <BasketGoods />
                    </div>

                    <div className='auth-basket__products-separator'>
                    </div>

                    <div className='auth-basket__products-cheque-wrapper'>
                        <BasketCheque />
                    </div>
                </div>

                <div className='auth-basket__inform-wrapper'>
                    <div className='auth-basket__inform-inner'>
                        <div className='auth-basket__inform-internal'>
                            <div className='auth-basket__inform-block'>
                                <span className='auth-basket__inform-comment'>
                                    Если что-то пойдёт не так и вы не получите товар - мы вернём деньги за него.
                                    <br/>
                                    Пожалуйста, обратите внимание - это правило не распространяется на лекарства,
                                    ювелирные изделия, алкоголь и коды активации.
                                </span>
                                <a className='auth-basket__inform-details' href=""> Подробнее</a>
                                <br/>
                                <span className='auth-basket__inform-view'>Внешний вид товаров и/или упаковки может быть изменён изготовителем
                                и отличаться от изображений на Яндекс.Маркете</span>
                                <br/>
                                <a className='auth-basket__inform-support' href="">
                                    <span>Служба поддержки</span>
                                    <span className='auth-basket__inform-phone'>&nbsp;<span>8 000 000-00-00</span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AuthBasket