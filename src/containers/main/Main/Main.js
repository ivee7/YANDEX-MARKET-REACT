import React, {Component} from 'react'
import './Main.scss'
import CarouselAdvert from '../CarouselAdvert/CarouselAdvert'
import CarouselMenuOfProducts from '../CarouselMenuOfProducts/CarouselMenuOfProducts'
import CarouselProducts from '../CarouselProducts/CarouselProducts'
import ColumnAdvert from '../ColumnAdvert/ColumnAdvert'
import CarouselProductsTwo from '../CarouselProductsTwo/CarouselProductsTwo'
import JSON_PROD from '../../../static/json/products.json'

class Main extends Component {

    render() {

        return (
            <div className='main'>
                <CarouselAdvert />

                <div className='main__content'>
                    <div className='main__content-wrapper'>
                        <div className='main__content-column-of-products'>
                            { JSON_PROD.map((item, index) => {
                                    if (item.type === 'menuOfProdOne') {
                                        return (
                                            <CarouselMenuOfProducts key={index} data={item.content} />
                                        )
                                    } else if (item.type === 'menuOfProdTwo') {
                                        return (
                                            <CarouselProducts key={index} data={item.content} />
                                        )
                                    } else if (item.type === 'menuOfProdThree') {
                                        return (
                                            <CarouselProductsTwo key={index} data={item.content} />
                                        )
                                    }
                                })
                            }
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