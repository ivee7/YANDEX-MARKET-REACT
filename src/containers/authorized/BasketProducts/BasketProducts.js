import React, {Component} from 'react'
import './BasketProducts.scss'
import BasketGood from '../BasketGood/BasketGood'

class BasketGoods extends Component {

    render() {
        return (
            <div className='basket-goods'>
                <section className='basket-goods__section'>
                    <header className='basket-goods__header'>
                        <h2 className='basket-goods__title'>Доставка Яндекса и продавцов</h2>
                    </header>
                    <div className='basket-goods__products-wrapper'>
                        <BasketGood />
                    </div>
                </section>
            </div>
        )
    }
}

export default BasketGoods