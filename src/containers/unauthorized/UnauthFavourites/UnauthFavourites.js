import React, {Component} from 'react'
import './UnauthFavourites.scss'
import UnauthCard from './UnauthCard/UnauthCard'
import FavGood from './FavGood/FavGood'
import favImgOne from '../../../static/images/unauthorized/favourites-one.png'
import favImgTwo from '../../../static/images/unauthorized/favourites-two.png'

class UnauthFavourites extends Component {

    state = {
        quantityOfProducts: 1,
        cardOne: {
            title: 'Войдите в учётную запись',
            inscript: 'Так вы сможете видеть сохранённые товары на любых устройствах. Это удобно!',
            img: {backgroundImage: `url(${favImgOne})`}
        },
        cardTwo: {
            title: 'Вы сохранили товар',
            inscript: 'Войдите в свою учётную запись: так вы сможете видеть этот товар на всех устройствах и узнать о снижении цены.',
            img: {backgroundImage: `url(${favImgTwo})`}
        }
    }

    render() {

        return (
            <div className='main-unauth-favourites'>
                <h1 className='main-unauth-favourites__title'>Избранное</h1>
                <div>
                    { this.state.quantityOfProducts === 0
                    ? <UnauthCard
                            title={this.state.cardOne.title}
                            inscription={this.state.cardOne.inscript}
                            image={this.state.cardOne.img}
                        />
                    :
                        <section>
                            <div className='main-unauth-favourites__goods-wrapper'>
                                <FavGood />
                            </div>
                            <UnauthCard
                                title={this.state.cardTwo.title}
                                inscription={this.state.cardTwo.inscript}
                                image={this.state.cardTwo.img}
                            />
                        </section>
                    }
                </div>
            </div>
        )
    }
}

export default UnauthFavourites