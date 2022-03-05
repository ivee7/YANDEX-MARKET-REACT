import React, {Component} from 'react'
import './UnauthFavourites.scss'
import UnauthCard from './UnauthCard/UnauthCard'
import FavGood from './FavGood/FavGood'
import {connect} from 'react-redux'
import favImgOne from '../../../static/images/unauthorized/favourites-one.png'
import favImgTwo from '../../../static/images/unauthorized/favourites-two.png'
import {toggleFav} from '../../../store/actions/favourites'
import {addToCart, delFromCart} from '../../../store/actions/cart'

class UnauthFavourites extends Component {

    state = {
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
                    { this.props.fav.length === 0
                    ? <UnauthCard
                            title={this.state.cardOne.title}
                            inscription={this.state.cardOne.inscript}
                            image={this.state.cardOne.img}
                        />
                    :
                        <section>
                            <div className='main-unauth-favourites__goods-wrapper'>
                                {this.props.fav.map((prod, index) => {
                                    return (
                                        <FavGood 
                                            key={index}
                                            fav={this.props.fav}
                                            cart={this.props.cart}
                                            product={prod}
                                            addToCart={this.props.addToCart}
                                            delFromCart={this.props.delFromCart}
                                            toggleFav={this.props.toggleFav}
                                        />
                                     )
                                })}
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

function mapStateToProps(state) {
    return {
        fav: state.fav.fav,
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleFav: item => dispatch(toggleFav(item)),
        addToCart: item => dispatch(addToCart(item)),
        delFromCart: id => dispatch(delFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthFavourites)