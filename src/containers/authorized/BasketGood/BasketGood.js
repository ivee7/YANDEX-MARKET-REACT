import React, {Component} from 'react'
import './BasketGood.scss'
import HeartSvg from '../../../components/svg/HeartSvg'

class BasketGood extends Component {

    state = {
        isChecked: true,
        isFav: false
    }

    toggleCheckHandler = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    toggleFavHandler = () => {
        this.setState({
            isFav: !this.state.isFav
        })
    }

    render() {

        const clsCheck = ['basket-good__checkbox']
        const clsFav = ['basket-good__fav']

        if (this.state.isChecked) {
            clsCheck.push('basket-good__checkbox_checked')
        }

        if (this.state.isFav) {
            clsFav.push('basket-good__fav_active')
        }

        return (
            <div className='basket-good'>

                <div className='basket-good__checkbox-wrapper'>
                    <label htmlFor="">
                        <span className={clsCheck.join(' ')}>
                            <span className='basket-good__checkbox-background'>
                                <span onClick={this.toggleCheckHandler} className='basket-good__checkbox-checkmark'>
                                </span>
                            </span>
                        </span>
                    </label>
                </div>

                <div className='basket-good__image'>
                    <a href="">
                        <div className='basket-good__image-wrapper'>
                            <div className='basket-good__image-inner'>
                                <img
                                    className='basket-good__img'
                                    src={require('../../../static/images/main/guitar.png')}
                                    alt=''
                                />
                            </div>
                        </div>
                    </a>
                </div>

                <div className='basket-good__description'>
                    <div className='basket-good__description-wrapper'>
                        <span className='basket-good__description-text'>
                            <a className='basket-good__desc-link' href="">
                                Гитара новая стильная, молодёжная, 1шт, коричневая из дерева,
                                куртая и пантовая, top & cool
                            </a>
                        </span>

                        <span className='basket-good__info'>FOR EVERYONE</span>

                        <div className='basket-good__fav-or-del-wrapper'>
                            <div className='basket-good__fav-or-del'>
                                <div className='basket-good__fav-wrapper'>
                                    <button
                                        onClick={this.toggleFavHandler}
                                        className={clsFav.join(' ')}
                                        data-tooltip-like={this.state.isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
                                    >
                                        <HeartSvg />
                                        <span className='basket-good__fav-text'>Избранное</span>
                                    </button>
                                </div>
                                <div className='basket-good__del-wrapper'>
                                    <button className='basket-good__del'>
                                        <img
                                            className='basket-good__del-image'
                                            src={require('../../../static/images/navigation/header/cross.png')}
                                            alt=''
                                        />
                                        <span className='basket-good__del-text'>Удалить</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='basket-good__price-and-counter-wrapper'>
                    <div className='basket-good__price-wrapper'>
                        <div className='basket-good__price'>
                            <span className='basket-good__price-text'>
                                165
                                <span>₽</span>
                            </span>
                        </div>
                        <div className='basket-good__discount-wrapper'>
                            <span className='basket-good__discounter'>
                                178
                                <span>₽</span>
                            </span>
                        </div>
                    </div>

                    <div className='basket-good__counter-wrapper'>
                        <button className='basket-good__counter-button basket-good__counter-button_left'>

                        </button>
                        <div className='basket-good__counter-number'>
                            <div>1</div>
                        </div>
                        <button className='basket-good__counter-button basket-good__counter-button_right'>

                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketGood