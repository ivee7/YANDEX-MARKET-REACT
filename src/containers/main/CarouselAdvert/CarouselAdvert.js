import React, {Component} from 'react'
import './CarouselAdvert.scss'
import {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'

class CarouselAdvert extends Component {

    state = {
        images: ['slide-one.png', 'slide-two.png', 'slide-three.png', 'slide-four.png', 'slide-five.png', 'slide-six.png']
    }

    render() {

        return (
            <section className='carousel-advert'>
                <Swiper
                    speed={400}
                    loop={true}
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    navigation
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                    autoplay={{delay: 6000, disableOnInteraction: false}}
                >
                    {this.state.images.map((image, index) => {
                        return <SwiperSlide key={index}>
                                    <div className='carousel-advert__item'>
                                        <a href='#'>
                                            <img 
                                                className='carousel-advert__image'
                                                src={require(`../../../static/images/main/carousel-advert/${image}`)} 
                                                alt='advert-img' 
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                    })}
                </Swiper>
            </section>
        )
    }
}

export default CarouselAdvert