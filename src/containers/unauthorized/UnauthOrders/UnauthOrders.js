import React, {Component} from 'react'
import './UnauthOrders.scss'
import { Link } from 'react-router-dom'

class UnauthOrders extends Component {

    render() {

        return (
            <div className='main-unauth-orders'>
                <div className='main-unauth-orders__wrapper'>
                    <div className='main-unauth-orders__external'>
                        <div className='main-unauth-orders__outer'>
                            <div className='main-unauth-orders__inner'>
                                <h1 className='main-unauth-orders__title'>Мои заказы</h1>
                                <div className='main-unauth-orders__link-wrapper'>
                                    Чтобы посмотреть историю своих заказов,
                                    <Link className='main-unauth-orders__link' to='/auth'>
                                        &nbsp;авторизируйтесь
                                    </Link>
                                </div>
                               <Link to='/'>
                                   <button className='main-unauth-orders__button'>
                                        <span className='main-unauth-orders__button-text'>
                                            Продолжить покупки
                                        </span>
                                   </button>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UnauthOrders