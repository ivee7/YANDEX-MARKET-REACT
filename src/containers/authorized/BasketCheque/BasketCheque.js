import React, {Component} from 'react'
import {declOfNum} from '../../../utils/declension'
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
                                    <span className='basket-cheque__sum'>{this.props.sum}</span>
                                    <span>&thinsp;{this.props.currency}</span>
                                </span>
                            </div>
                            <div className='basket-cheque__total-wrapper'>
                                <span>
                                    <span>
                                        Всего:&nbsp;{this.props.quantity}&nbsp;{declOfNum(this.props.quantity, ['товар', 'товара', 'товаров'])}&nbsp;
                                    </span>
                                    <span className='basket-cheque__dot'></span>
                                    <span>&nbsp;{this.props.weight}кг</span>
                                </span>
                                <div>{this.props.sum}&nbsp;{this.props.currency}</div>
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