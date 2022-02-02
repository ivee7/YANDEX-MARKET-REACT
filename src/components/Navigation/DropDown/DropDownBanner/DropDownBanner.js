import React from 'react'
import './DropDownBanner.scss'

const DropDownBanner = props => (
    <div className='drop-down-banner'>
        <div className='drop-down-banner__wrapper'>

            { props.section.banner.map((image, index) => {
                return (
                    <div className='drop-down-banner__item' key={index}>
                        <a className='drop-down-banner__link' href="">
                            <img
                                className='drop-down-banner__image'
                                src={require(`../../../../static/images/navigation/dropDown/dropDownBanner/${image}`)}
                                alt='image'
                            />
                        </a>
                    </div>
                )
            }) }

        </div>
    </div>
)

export default DropDownBanner