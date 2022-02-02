import React from 'react'
import './DropDownOverlay.scss'

const DropDownOverlay = props => {

    const cls = ['drop-down-overlay']

    if (props.isOpen) {
        cls.push('drop-down-overlay_emerged')
    }

    return (
        <div onClick={props.onClose} className={cls.join(' ')}>

        </div>
    )
}

export default DropDownOverlay