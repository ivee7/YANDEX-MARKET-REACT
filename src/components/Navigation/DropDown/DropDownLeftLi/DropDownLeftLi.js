import React from 'react'
import './DropDownLeftLi.scss'

const DropDownLeftLi = props => {

    const liCls = ['drop-down-left-li']

    if (props.point.id === props.currentGallery) {
        liCls.push('drop-down-left-li_hovered')
    }

    return (
        <li onMouseEnter={props.changeGallery} className={liCls.join(' ')} data-id={props.point.id}>
            <a data-id={props.point.id} className='drop-down-left-li__link' href={props.point.href}>
                <img
                    data-id={props.point.id}
                    className='drop-down-left-li__image'
                    src={require(`../../../../static/images/navigation/dropDown/${props.point.image}`)}
                    alt='image'
                />
                <span data-id={props.point.id} className='drop-down-left-li__title'>{props.point.title}</span>
            </a>
        </li>
    )
}

export default DropDownLeftLi
