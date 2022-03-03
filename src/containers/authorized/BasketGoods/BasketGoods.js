import React, {Component} from 'react'
import './BasketGoods.scss'
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
                        {this.props.cart.map((item, index) => {
                            return (
                                <BasketGood 
                                    item={item} 
                                    key={index}
                                    addToCart={this.props.addToCart}
                                    toggleCheckSingle={this.props.toggleCheckSingle}
                                    delFromCart={this.props.delFromCart}
                                    delProdTotally={this.props.delProdTotally}
                                    addFavProd={this.props.addFavProd}
                                    delFavProd={this.props.delFavProd}
                                 />
                            )
                        })}
                    </div>
                </section>
            </div>
        )
    }
}

export default BasketGoods