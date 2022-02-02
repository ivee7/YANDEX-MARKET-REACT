import React from 'react'
import './ToRightButton.scss'

const ToRightButton = () => (
    <div className='to-right-button'>
        <button className='to-right-button__button'>
            <div className='to-right-button__wrapper'>
                <img
                    className='to-right-button__image'
                    src={require('../../../static/images/main/arrow_forward_black_18dp.png')}
                    alt=''
                />
            </div>
        </button>
    </div>
)

export default ToRightButton