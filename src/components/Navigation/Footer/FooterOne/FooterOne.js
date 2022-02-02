import React from 'react'
import './FooterOne.scss'

const FooterOne = props => (
    <div className='footer-one'>

        <div className='footer-one__wrapper'>

            <div className='footer-one__left'>

                <h3 className='footer-one__left-h3'>
                    Заказывайте в новом приложении
                    <br />
                        Маркета и получайте бонусы
                </h3>

                <div className='footer-one__left-stores'>
                    <a className='footer-one__left-stores-link footer-one__left-stores-link_app-store'
                       href=''><span></span></a>
                    <a className='footer-one__left-stores-link footer-one__left-stores-link_google-play'
                       href=""><span></span></a>
                    <a className='footer-one__left-stores-link footer-one__left-stores-link_app-gallery'
                       href=''><span></span></a>
                </div>

            </div>

            <div className='footer-one__middle'>
                <img
                    className='footer-one__middle-img'
                    src={require('../../../../static/images/navigation/footer/qr-code-to-download.png')}
                    alt='qr код для скачивания приложения'
                />
            </div>

            <div className='footer-one__right'>
                Наведите камеру
                <br/>
                на QR-код, чтобы
                <br/>
                скачать
            </div>

        </div>

    </div>
)

export default FooterOne