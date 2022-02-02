import React, {Component} from 'react'
import './CarouselAdvert.scss'

class CarouselAdvert extends Component {

    render() {

        return (
            <section className="carousel-advert">
                <ul className="carousel-advert__banner">
                    <li className="carousel-advert__item">
                        <a href="#">
                            <img src="" alt="картинка для рекламы" />
                        </a>
                    </li>
                </ul>

                <button className="carousel-advert__button carousel-advert__button_prev">&#5176;</button>
                <button className="carousel-advert__button carousel-advert__button_next">&#5171;</button>

                <aside className="carousel-advert__dots">
                    <a className="carousel-advert__dot" href="#"></a>
                    <a className="carousel-advert__dot" href="#"></a>
                    <a className="carousel-advert__dot" href="#"></a>
                    <a className="carousel-advert__dot" href="#"></a>
                    <a className="carousel-advert__dot" href="#"></a>
                </aside>
            </section>
        )
    }
}

export default CarouselAdvert