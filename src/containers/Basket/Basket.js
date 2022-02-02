import React, {Component} from 'react'
import './Basket.scss'
import UnauthBasket from '../unauthorized/UnauthBasket/UnauthBasket'
import AuthBasket from '../authorized/AuthBasket/AuthBasket'

class Basket extends Component {

    state = {
        emptyCart: false
    }

    render() {

        return (
            <div className="main-basket">
                <div className="main-basket__wrapper">
                    <div className="main-basket__outer">
                        <div className="main-basket__inner">
                            <div className="main-basket__internal">
                                {
                                    this.state.emptyCart
                                        ? <UnauthBasket />
                                        : <AuthBasket />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Basket