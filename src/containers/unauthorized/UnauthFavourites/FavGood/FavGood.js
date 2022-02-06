import React, {Component} from 'react'
import './FavGood.scss'
import HeartSvg from '../../../../components/svg/HeartSvg'
import ToCompareSvg from '../../../../components/svg/ToCompareSvg'
import {debounce} from '../../../../utils/debounce'

class FavGood extends Component {
    imageWrapper = React.createRef();

    componentDidMount() {
        const imageWrapperCenterX = Math.round(this.imageWrapper.current.getBoundingClientRect().width / 2);
        const imageWrapperX = this.imageWrapper.current.getBoundingClientRect().x;
        this.setState({
            coordinates: {
                imageWrapperCenterX: imageWrapperCenterX,
                imageWrapperX: imageWrapperX
            }
        })
    }

    state = {
        isFav: true,
        addedToCompare: true,
        showLeftImg: true,
        coordinates: {
            imageWrapperCenterX: null,
            imageWrapperX: null
        }
    }

    toggleFavHandler = () => {
        this.setState({
            isFav: !this.state.isFav
        })
    }

    toggleCompareHandler = () => {
        this.setState({
            addedToCompare: !this.state.addedToCompare
        })
    }

    getCoords = (cursorX) => {
        const relativeX = cursorX - this.state.coordinates.imageWrapperX;
        if (relativeX > this.state.coordinates.imageWrapperCenterX && this.state.showLeftImg) {
            this.setState({
                showLeftImg: false
            })
        } else if (relativeX < this.state.coordinates.imageWrapperCenterX && !this.state.showLeftImg) {
            this.setState({
                showLeftImg: true
            })
        }
    }

    optimizedGetCoords = debounce(this.getCoords, 15).bind(this)

    setLeftImage = () =>{
        this.setState({
            showLeftImg: true
        })
    }

    render() {

        const favActive = this.state.isFav ? 'fav-good__heart-button_active' : ''
        const clsFav = `fav-good__heart-button ${favActive}`

        let img = 'guitar-fav-one.png'

        if (!this.state.showLeftImg) {
            img = 'guitar-fav-two.png'
        }

        return (
            <article onMouseLeave={!this.state.showLeftImg ? this.setLeftImage : null}  className='fav-good'>

                <div className='fav-good__heart'>
                    <button
                        onClick={this.toggleFavHandler}
                        className={clsFav}
                        data-tooltip-like={this.state.isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
                    >
                        <span className='fav-good__heart-span'>
                            <HeartSvg />
                        </span>
                    </button>
                    <div
                        onClick={this.toggleCompareHandler}
                        className={`fav-good__to-compare-wrapper ${this.state.addedToCompare ? 'fav-good__to-compare-wrapper_active' : ''}`}
                    >
                        <ToCompareSvg className='fav-good__to-compare' />
                    </div>
                </div>

                <div
                    ref={this.imageWrapper}
                    onMouseMove={(e) => this.optimizedGetCoords(e.clientX)}
                    className='fav-good__images-toggle'
                >
                    <a className='fav-good__images-toggle-link' href=''>
                        <img
                            className='fav-good__images-toggle-image'
                            src={require(`../../../../static/images/unauthorized/${img}`)}
                            alt='image'
                        />
                        <ul className='fav-good__images-toggle-ul'>
                            <li className={`fav-good__images-toggle-li ${this.state.showLeftImg ? 'fav-good__images-toggle-li_left-active' : ''}`}>
                                <button className='fav-good__images-toggle-button'>
                                </button>
                            </li>
                            <li className={`fav-good__images-toggle-li ${!this.state.showLeftImg ? 'fav-good__images-toggle-li_right-active' : ''}`}>
                                <button className='fav-good__images-toggle-button'>
                                </button>
                            </li>
                        </ul>
                    </a>
                </div>

                <div className='fav-good__price-wrapper'>
                    <a href='#' className='fav-good__price'>
                        <span>12 990&nbsp;₽</span>
                    </a>
                </div>

                <div>
                    <h3 className='fav-good__name'>
                        <a href="#" className='fav-good__name-link'>
                            <span>Вестерн-гитара YAMAHA F310 Tabacco Brown Sunburst</span>
                        </a>
                    </h3>

                    <a href="" className='fav-good__rating-link'>
                        <div className='fav-good__rating-container'>
                            <div className='fav-good__rating'>
                                <span>4.5</span>
                            </div>
                            <span className='fav-good__rating-feedbacks'>20 отзывов</span>
                        </div>
                    </a>

                </div>

                <div className='fav-good__button-and-delivery'>
                    <div className='fav-good__delivery'>Доставка Яндекса, завтра</div>
                    <div className='fav-good__button-wrapper'>
                        <button className='fav-good__button'>
                            <span className='fav-good__button-text'>В корзину</span>
                        </button>
                    </div>
                </div>

            </article>
        )
    }
}

export default FavGood