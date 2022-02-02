import React from 'react'
import './ButtonCatalogue.scss'

const ButtonCatalogue = props => {

    const cls = ['button-catalogue']

    if (props.isOpen) {
        cls.push('button-catalogue_clicked')
    }

    return (
        <button onClick={props.onToggle} className={cls.join(' ')}>

            <div className='button-catalogue__hamburger'>
                <div className='button-catalogue__crossbar'></div>
                <div className='button-catalogue__crossbar'></div>
                <div className='button-catalogue__crossbar'></div>
            </div>

            <span className='button-catalogue__title'>Каталог</span>

        </button>
    )
}

export default ButtonCatalogue