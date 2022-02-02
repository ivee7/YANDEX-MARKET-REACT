import React, {Component} from 'react'
import './BasketCheque.scss'

class BasketCheque extends Component {

    render() {

        return (
            <section className='basket-cheque'>

                <button className='basket-cheque__button'>
                    <span className='basket-cheque__button-text'>Перейти к оформлению</span>
                </button>

                <div className='basket-cheque__divide'></div>

                <div className='basket-cheque__cheque-list'>

                    <div className='basket-cheque__sum-wrapper'>
                        <div className='basket-cheque__sum-inner'>
                            <div className='basket-cheque__sum-block'>
                                <span>Итого</span>
                                <span>
                                    <span className='basket-cheque__sum'>604</span>
                                    <span>&thinsp;₽</span>
                                </span>
                            </div>
                            <div className='basket-cheque__total-wrapper'>
                                <span>
                                    <span>Всего:&nbsp;2&nbsp;товара&nbsp;</span>
                                    <span className='basket-cheque__dot'></span>
                                    <span>&nbsp;0.8кг</span>
                                </span>
                                <div>604&nbsp;₽</div>
                            </div>
                        </div>
                    </div>

                    <div className='basket-cheque__promo-wrapper'>
                        <div className='basket-cheque__promo'>
                            <input className='basket-cheque__input' placeholder='Промокод' type="text"/>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default BasketCheque