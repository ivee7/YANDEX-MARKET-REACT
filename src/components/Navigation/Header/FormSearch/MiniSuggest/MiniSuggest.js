import React from 'react'
import './MiniSuggest.scss'
import '../FormSearch.scss'
import perfume from '../../../../../static/images/navigation/header/perfume.jpg'
import asus from '../../../../../static/images/navigation/header/asus-vivo.jpeg'
import JSON_REC from '../../../../../static/json/reccomendations.json'

const liDivider = () => {
    return (
        <li className='mini-suggest__li-divider'></li>
    )
}

const liDividerCloser = () => {
    return (
        <li className='mini-suggest__li-divider mini-suggest__li-divider_closer'></li>
    )
}

const liItemCategory = (prop) => {
 return (
     <li className='mini-suggest__li-item'>
         <a className='mini-suggest__li-item-link' href="#">
             <div className='mini-suggest__li-item-image'
                  style={{backgroundImage: `url(${prop})`}}
             >
             </div>
             <div className='mini-suggest__li-item-block'>
                 <div className='mini-suggest__li-item-block-inner'>
                    <span className='mini-suggest__li-item-title mini-suggest__li-item-title_category'>
                        Духи
                    </span>
                     <span className='mini-suggest__li-item-info mini-suggest__li-item-info_category'>
                        Парфюмерия
                    </span>
                 </div>
             </div>
         </a>
     </li>
    )
}

function liItem(prop) {

    return (
        <li className='mini-suggest__li-item'>
            <a className='mini-suggest__li-item-link' href="#">
                <div className='mini-suggest__li-item-image'
                     style={{backgroundImage: `url(${prop})`}}
                >
                </div>
                <div className='mini-suggest__li-item-block'>
                    <div className='mini-suggest__li-item-block-inner'>
                        <span className='mini-suggest__li-item-title'>15.6" Ноутбук Asus VivoBook 15</span>
                        <span className='mini-suggest__li-item-info'>От 44 990 ₽</span>
                    </div>
                </div>
            </a>
        </li>
    )
}


const MiniSuggest = props => {

    const cls = ['form-search__mini-suggest', 'mini-suggest']

    if (props.isFocused && props.inputVal !== '') {
        cls.push('form-search__mini-suggest_typed-and-focused')
    }

    return (
        <div className={cls.join(' ')}>
            <ul className='mini-suggest__ul'>

                { JSON_REC[0].DA.filter(word => {
                    return word.toLowerCase().includes(props.inputVal.toLowerCase())
                }).map((item, index) => {
                    return (
                        <li
                            onClick={props.setValue}
                            className='mini-suggest__li'
                            key={index}
                        >
                            {item}
                        </li>
                    )
                })}

                { liDivider() }

                { liItemCategory(perfume) }

                { liDividerCloser() }

                { liItem(asus) }

            </ul>
        </div>
    )
}

export default MiniSuggest