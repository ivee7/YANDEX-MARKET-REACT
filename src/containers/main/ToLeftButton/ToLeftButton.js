import React from 'react'
import './ToLeftButton.scss'

const ToLeftButton = () => (
    <div className='to-left-button'>
        <button className='to-left-button__button'>
            <div className='to-left-button__wrapper'>
                <img
                    className='to-left-button__image'
                    src={require('../../../static/images/main/arrow_back_black_18dp.png')}
                    alt=''
                />
            </div>
        </button>
    </div>
)

export default ToLeftButton