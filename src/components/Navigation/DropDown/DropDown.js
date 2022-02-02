import React, {Component} from 'react'
import './DropDown.scss'
import DropDownOverlay from './DropDownOverlay/DropDownOverlay'
import DropDownTopicsGallery from './DropDownTopicsGallery/DropDownTopicsGallery'
import DropDownShowcase from './DropDownShowcase/DropDownShowcase'
import DropDownBanner from './DropDownBanner/DropDownBanner'
import galleries from '../../../static/json/drop-down.json'
import DropDownLeftLi from './DropDownLeftLi/DropDownLeftLi'
import { debounce } from '../../../utils/debounce'

class DropDown extends Component {

    state = {
        currentGallery: 0,
        sideList: [
            {
                title: 'Одежда и обувь',
                image: 'checkroom_black_24dp.png',
                href: '#',
                id: 0
            },
            {
                title: 'Спорт и отдых',
                image: 'surfing_black_24dp.png',
                href: '#',
                id: 1
            },
            {
                title: 'Детские товары',
                image: 'child_friendly_black_24dp.png',
                href: '#',
                id: 2
            },
            {
                title: 'Электроника',
                image: 'phone_android_black_24dp.png',
                href: '#',
                id: 3
            },
            {
                title: 'Компьютеры',
                image: 'computer_black_24dp.png',
                href: '#',
                id: 4
            },
            {
                title: 'Бытовая техника',
                image: 'laundry_service_black_24dp.png',
                href: '#',
                id: 5
            },
            {
                title: 'Дом',
                image: 'house_black_24dp.png',
                href: '#',
                id: 6
            },
            {
                title: 'Строительство и ремонт',
                image: 'roller.png',
                href: '#',
                id: 7
            },
            {
                title: 'Продукты питания',
                image: 'pizza.png',
                href: '#',
                id: 8
            },
            {
                title: 'Красота и гигиена',
                image: 'scissors.png',
                href: '#',
                id: 9
            },
            {
                title: 'Аптека',
                image: 'hospital.png',
                href: '#',
                id: 10
            },
            {
                title: 'Зоотовары',
                image: 'pets.png',
                href: '#',
                id: 11
            },
            {
                title: 'Бытовая химия',
                image: 'flask.png',
                href: '#',
                id: 12
            },
            {
                title: 'Авто',
                image: 'car.png',
                href: '#',
                id: 13
            },
            {
                title: 'Хобби и творчество',
                image: 'bulb.png',
                href: '#',
                id: 14
            },
            {
                title: 'Книги',
                image: 'newspaper.png',
                href: '#',
                id: 15
            },
            {
                title: 'Для школы и офиса',
                image: 'pencil.png',
                href: '#',
                id: 16
            },
            {
                title: 'Цветы',
                image: 'leaf.png',
                href: '#',
                id: 17
            },
            {
                title: 'Ювелирные украшения',
                image: 'diamond.png',
                href: '#',
                id: 18
            },
            {
                title: 'Товары для взрослых',
                image: 'gender-male.png',
                href: '#',
                id: 19
            },
            {
                title: 'Цифровые товары',
                image: 'memory.png',
                href: '#',
                id: 20
            },
            {
                title: 'Мебель',
                image: 'bed.png',
                href: '#',
                id: 21
            },
            {
                title: 'Дача и сад',
                image: 'garden.png',
                href: '#',
                id: 22
            },
            {
                title: 'Оборудование',
                image: 'equipment.png',
                href: '#',
                id: 23
            },
            {
                title: 'Скидки и акции',
                image: 'discounts.png',
                href: '#',
                id: 24
            }
        ],
        sections: galleries
    }

    changeGalleryHandler(event) {
        this.setState({
            currentGallery: +event.target.dataset.id
        })
    }

    optimizedChangeGalleryHandler = debounce(this.changeGalleryHandler, 50).bind(this)

    render() {

        const cls = ['drop-down']

        if (this.props.isOpen) {
            cls.push('drop-down_emerged')
        }

        return (
            <React.Fragment>
                <div style={{top: '132px'}} className={cls.join(' ')}>
                    <div className='drop-down__wrapper'>
                        <div className='drop-down__left'>
                            <ul className='drop-down__left-ul'>
                                { this.state.sideList.map((point, index) => {

                                    return (
                                        <DropDownLeftLi
                                            changeGallery={this.optimizedChangeGalleryHandler}
                                            currentGallery={this.state.currentGallery}
                                            point={point}
                                            key={index}
                                        />
                                    )
                                }) }
                            </ul>
                        </div>

                        <div className='drop-down__right'>
                            <div className='drop-down__right-wrapper'>
                                <div className='drop-down__right-grid'>

                                    <DropDownTopicsGallery section={this.state.sections[this.state.currentGallery]} />

                                    <DropDownShowcase section={this.state.sections[this.state.currentGallery]} />

                                    <DropDownBanner section={this.state.sections[this.state.currentGallery]} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <DropDownOverlay
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                />

            </React.Fragment>
        )
    }
}

export default DropDown