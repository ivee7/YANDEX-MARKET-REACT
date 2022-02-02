import React, {Component} from 'react'
import './Footer.scss'
import FooterOne from './FooterOne/FooterOne'
import FooterTwo from './FooterTwo/FooterTwo'
import FooterThree from './FooterThree/FooterThree'

class Footer extends Component {

    render() {

        return (
            <footer className='footer'>
                <div className='footer__wrapper'>
                    <FooterOne />

                    <FooterTwo />

                    <FooterThree />
                </div>
            </footer>
        )
    }
}

export default Footer