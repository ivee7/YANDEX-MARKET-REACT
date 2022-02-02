import React from 'react'
import './FooterThree.scss'
import FooterThreeUpperRightColumn from './FooterThreeUpperRightColumn/FooterThreeUpperRightColumn'

const FooterThree = props => (
    <div className='footer-three'>

        <div className='footer-three__upper'>

            <div className='footer-three__upper-columns'>

                <div className="footer-three__upper-column">
                    <h5 className="footer-three__upper-column-title">Покупателям</h5>
                    <a className="footer-three__upper-column-link" href="">Как выбрать товар</a>
                    <a className="footer-three__upper-column-link" href="">Оплата и доставка</a>
                    <a className="footer-three__upper-column-link" href="">Обратная связь</a>
                    <a className="footer-three__upper-column-link" href="">О сервисе</a>
                    <a className="footer-three__upper-column-link" href="">Участие в исследованиях</a>
                    <a className="footer-three__upper-column-link" href="">Возвраты</a>
                </div>

                <div className="footer-three__upper-column">
                    <h5 className="footer-three__upper-column-title">Продавцам</h5>
                    <a className="footer-three__upper-column-link" href="">Личный кабинет продавца</a>
                    <a className="footer-three__upper-column-link" href="">Продавайте на Маркете</a>
                    <a className="footer-three__upper-column-link" href="">Документация для партнёров</a>
                    <a className="footer-three__upper-column-link" href="">Сайт для партнёров</a>
                </div>

                <div className="footer-three__upper-column">
                    <h5 className="footer-three__upper-column-title">Сотрудничество</h5>
                    <a className="footer-three__upper-column-link" href="">Новости компании</a>
                    <a className="footer-three__upper-column-link" href="">Партнёрская программа</a>
                    <a className="footer-three__upper-column-link" href="">Производителям</a>
                    <a className="footer-three__upper-column-link" href="">Пункт выдачи заказов</a>
                    <a className="footer-three__upper-column-link" href="">Маркет нанимает</a>
                </div>

            </div>

            <div className='footer-three__upper-right-column'>

                <FooterThreeUpperRightColumn />

            </div>

        </div>

        <div className='footer-three__lower'>

            <a className='footer-three__lower-link' href='#'>Мобильная версия</a>

            <a className='footer-three__lower-link' href=''>Статистика</a>

            <a className='footer-three__lower-link' href=''>Пользовательское соглашение</a>

            <div className='footer-three__lower-info'>
                ©&nbsp;2022&nbsp;&nbsp;OOO&nbsp;«<a href=''>ЯНДЕКС</a>»
            </div>
        </div>

    </div>
)

export default FooterThree