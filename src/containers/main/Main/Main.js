import React, {Component} from 'react'
import './Main.scss'
import CarouselAdvert from '../CarouselAdvert/CarouselAdvert'
import CarouselMenuOfProducts from '../CarouselMenuOfProducts/CarouselMenuOfProducts'
import CarouselProducts from '../CarouselProducts/CarouselProducts'
import ColumnAdvert from '../ColumnAdvert/ColumnAdvert'
import CarouselProductsTwo from '../CarouselProductsTwo/CarouselProductsTwo'

class Main extends Component {

    state = {
        menuOfProd: {
            one: [
                'menu-new-year.png',
                'menu-present.png',
                'menu-shoes.png',
                'menu-house.png',
                'menu-health.png',
                'menu-for-men.png',
                'menu-for-children.png',
                'menu-electronics.png'
            ]
        },
        products: {
            one: {
                titleGroup: 'Детали мужского образа',
                categories: [
                    {
                        title: 'Головные уборы',
                        image: 'cap.png'
                    },
                    {
                        title: 'Наручные часы',
                        image: 'watches.png'
                    },
                    {
                        title: 'Карманные',
                        image: 'clocks.png'
                    },
                    {
                        title: 'Перчатки и варежки',
                        image: 'glove.png'
                    },
                    {
                        title: 'Сумки',
                        image: 'backpack.png'
                    }
                ]
            }
        },
        productsTwo: {
            one: {
                title: 'Мужская одежда и аксессуары',
                products: [
                    {
                        name: 'Cort Gold-Edge-NAT',
                        price: '105 560',
                        currency: '₽',
                        image: 'guitar.png',
                        href: '#',
                        variants: 'Ещё 13 вариантов'
                    }
                ]
            }
        }
    }

    render() {

        return (
            <div className='main'>
                <CarouselAdvert />

                <div className='main__content'>
                    <div className='main__content-wrapper'>
                        <div className='main__content-column-of-products'>
                            <CarouselMenuOfProducts data={this.state.menuOfProd.one} />
                            <CarouselProducts data={this.state.products.one} />
                            <CarouselProductsTwo data={this.state.productsTwo.one} />
                        </div>
                        <div className='main__content-column-of-advertising'>
                            <ColumnAdvert image='column-advert.png' href='#' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main