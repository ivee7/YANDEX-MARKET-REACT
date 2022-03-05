import React, {Component} from 'react'
import './FilledBasket.scss'
import BasketGoods from '../BasketGoods/BasketGoods'
import BasketCheque from '../BasketCheque/BasketCheque'
import {connect} from 'react-redux'
import {    addToCart,
            toggleCheckSingle,
            toggleCheckAll, 
            delAllChecked, 
            delFromCart,
            delProdTotally
        } from '../../../store/actions/cart'
import { toggleFav } from '../../../store/actions/favourites'

class FilledBasket extends Component {

    render() {

        const cls = ['filled-basket__header-select-checkbox']

        if (this.props.cart.every(prod => prod.isChecked)) {
            cls.push('filled-basket__header-select-checkbox_selected')
        }

        return (
            <div className='filled-basket'>

                <div className='filled-basket__header-wrapper'>
                    <div className='filled-basket__header-inner'>
                        <div className='filled-basket__header'>
                            <h2 className='filled-basket__header-text'>Корзина</h2>
                            <div className='filled-basket__header-nav'>
                                <label 
                                    onClick={() => this.props.toggleCheckAll()} 
                                    className='filled-basket__header-label'
                                >
                                    <span className='filled-basket__header-label-wrapper'>
                                        <span className={cls.join(' ')}>
                                            <span className='filled-basket__header-select'></span>
                                        </span>
                                        <span className='filled-basket__header-select-all-text'>Выбрать всё</span>
                                    </span>
                                </label>
                                {this.props.cart.filter(prod => prod.isChecked).length === 0 ? null :
                                    <button 
                                        className='filled-basket__header-button'
                                        onClick={() => this.props.delAllChecked()}
                                    >
                                        <img
                                            className='filled-basket__header-icon'
                                            src={require('../../../static/images/basket/delete-products.png')}
                                            alt='image'
                                        />
                                        <span className='filled-basket__header-delete'>
                                            Удалить выбранное ({this.props.cart.filter(prod => prod.isChecked).length})
                                        </span>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='filled-basket__products-wrapper'>
                    <div className='filled-basket__goods'>
                        <BasketGoods 
                            cart={this.props.cart}
                            fav={this.props.fav}
                            addToCart={this.props.addToCart}
                            toggleCheckSingle={this.props.toggleCheckSingle}
                            delFromCart={this.props.delFromCart}
                            delProdTotally={this.props.delProdTotally}
                            toggleFav={this.props.toggleFav}
                        />
                    </div>

                    <div className='filled-basket__products-separator'>
                    </div>

                    <div className='filled-basket__products-cheque-wrapper'>
                        <BasketCheque 
                            sum={this.props.sum}
                            currency={this.props.currency}
                            quantity={this.props.quantity}
                            weight={this.props.weight}
                        />
                    </div>
                </div>

                <div className='filled-basket__inform-wrapper'>
                    <div className='filled-basket__inform-inner'>
                        <div className='filled-basket__inform-internal'>
                            <div className='filled-basket__inform-block'>
                                <span className='filled-basket__inform-comment'>
                                    Если что-то пойдёт не так и вы не получите товар - мы вернём деньги за него.
                                    <br/>
                                    Пожалуйста, обратите внимание - это правило не распространяется на лекарства,
                                    ювелирные изделия, алкоголь и коды активации.
                                </span>
                                <a className='filled-basket__inform-details' href=""> Подробнее</a>
                                <br/>
                                <span className='filled-basket__inform-view'>Внешний вид товаров и/или упаковки может быть изменён изготовителем
                                и отличаться от изображений на Яндекс.Маркете</span>
                                <br/>
                                <a className='filled-basket__inform-support' href=''>
                                    <span>Служба поддержки</span>
                                    <span className='filled-basket__inform-phone'>&nbsp;<span>8 000 000-00-00</span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        currency: state.cart.currency,
        sum: state.cart.sum,
        quantity: state.cart.quantity,
        weight: state.cart.weight,
        fav: state.fav.fav
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item)),
        toggleCheckSingle: id => dispatch(toggleCheckSingle(id)),
        toggleCheckAll: () => dispatch(toggleCheckAll()),
        delFromCart: id => dispatch(delFromCart(id)),
        delProdTotally: id => dispatch(delProdTotally(id)),
        delAllChecked: () => dispatch(delAllChecked()),
        toggleFav: item => dispatch(toggleFav(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilledBasket)