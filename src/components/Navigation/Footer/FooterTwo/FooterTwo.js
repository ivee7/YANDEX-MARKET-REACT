import React from 'react'
import './FooterTwo.scss'

const FooterTwo = props => (
    <div className='footer-two'>
        <div className='footer-two__outer'>

            <div className='footer-two__inner'>

                <div className='footer-two__inward'>

                    <form className='footer-two__form' action='#'>

                        <img
                            className='footer-two__form-img-one'
                            src={require('../../../../static/images/navigation/footer/post-mail.png')}
                            alt="почта"
                        />

                        <img
                            className='footer-two__form-img-two'
                            src={require('../../../../static/images/navigation/footer/sort-mail.png')}
                            alt="сортировка"
                        />

                        <div className='footer-two__form-subscription-title'>
                            Будьте в курсе скидок на электронику, товары для детей и для дома
                        </div>

                        <div className='footer-two__form-input'>
                            <input placeholder='Электронная почта' type='text' />
                        </div>

                        <button className='footer-two__form-button'>Подписаться</button>

                    </form>

                    <div className='footer-two__terms'>
                        Нажимая «Подписаться», я соглашаюсь получать
                        рекламные&nbsp;и&nbsp;иные&nbsp;маркетинговые&nbsp;сообщения
                        от&nbsp;OOO&nbsp;«ЯНДЕКС» на&nbsp;условиях&nbsp;
                        <a className='footer-two__terms-link' href='#'>Политики конфиденциальности</a>
                        &nbsp;и&nbsp;
                        <a className='footer-two__terms-link' href='#'>Пользовательского соглашения</a>.
                    </div>

                </div>

            </div>

        </div>
    </div>
)

export default FooterTwo