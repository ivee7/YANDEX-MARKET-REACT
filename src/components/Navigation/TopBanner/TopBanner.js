import React, {Component} from 'react'
import './TopBanner.scss'

class TopBanner extends Component {

    render() {

        return (
            <div className='banner'>
                <a className='banner__link' href='#'>
                    <img
                        className='banner__img'
                        src={require('../../../static/images/navigation/topBanner/girlyandy.png')}
                        alt='здесь должна быть картинка'
                    />
                </a>
            </div>
        )
    }
}

export default TopBanner