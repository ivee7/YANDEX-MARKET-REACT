import React from 'react'
import './NotFound.scss'

const NotFound = () => (
    <div className='main-not-found'>
        <div className='main-not-found__wrapper'>
            <img
                className='main-not-found__img'
                src={require('../../static/images/notfound/not-found.png')}
                alt='Ошибка'
            />
            <header className='main-not-found__header'>Тут ничего нет</header>
            <section className='main-not-found__section'>
                <div>Попробуйте вернуться назад или поищите что-нибудь другое.</div>
                <div>Код ошибки: 404</div>
            </section>
            <div className='main-not-found__link'>
                <div className='main-not-found__link-wrapper'>
                    <a className='main-not-found__link-to-the-main-page' href=''>
                        <span className='main-not-found__link-span'>На главную</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default NotFound