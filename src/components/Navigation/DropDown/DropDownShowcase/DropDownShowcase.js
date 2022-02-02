import React from 'react'
import './DropDownShowcase.scss'

const DropDownShowcase = props => (
    <div className='drop-down-showcase'>
        <div className='drop-down-showcase__wrapper'>

            { props.section.showcase.map((image, index) => {
                return (
                    <div className='drop-down-showcase__item' key={index}>
                        <a className='drop-down-showcase__link' href="#">
                            <img
                                className='drop-down-showcase__image'
                                src={require(`../../../../static/images/navigation/dropDown/dropDownShowcase/${image}`)}
                                alt=""
                            />
                        </a>
                    </div>
                )
            }) }

        </div>
    </div>
)

export default DropDownShowcase