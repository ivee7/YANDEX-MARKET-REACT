import React from 'react'
import './FooterThreeUpperRightColumn.scss'

const FooterThreeUpperRightColumn = props => (
    <div className='footer-three-upper-right-column'>

        <a className='footer-three-upper-right-column__advisor-link' href=''>
            <div></div>
            <p>
                Советник находит нужные вам товары
                <br/>
                по более выгодной цене.
                <span>Подробнее</span>
            </p>
        </a>

        <div className='footer-three-upper-right-column__offers-and-shops'>
            279&thinsp;307&thinsp;746&nbsp;предложений от&nbsp;
            <a href="">25&thinsp;630&nbsp;магазинов.</a>
            <br/>
            Обновлено 12.01.2022 в 9:00 по московскому времени.
        </div>

        <div className='footer-three-upper-right-column__icons-links'>
            <a className='footer-three-upper-right-column__icon-facebook' href='#'></a>
            <a className='footer-three-upper-right-column__icon-vk' href='#'></a>
            <a className='footer-three-upper-right-column__icon-inst' href='#'></a>
        </div>

    </div>
)

export default FooterThreeUpperRightColumn