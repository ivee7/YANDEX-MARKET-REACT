import React, {Component} from 'react'
import './Basket.scss'
import EmptyUnauthBasket from '../unauthorized/EmptyUnauthBasket/EmptyUnauthBasket'
import FilledBasket from '../authorized/FilledBasket/FilledBasket'
import {connect} from 'react-redux'

class Basket extends Component {

    render() {

        return (
            <div className="main-basket">
                <div className="main-basket__wrapper">
                    <div className="main-basket__outer">
                        <div className="main-basket__inner">
                            <div className="main-basket__internal">
                                {
                                    this.props.cartLength === 0
                                        ? <EmptyUnauthBasket />
                                        : <FilledBasket />
                                }
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
        cartLength: state.cart.cart.length
    }
}

export default connect(mapStateToProps)(Basket)