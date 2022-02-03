import React, {Component} from 'react'
import './Auth.scss'
import AuthFooter from '../AuthFooter/AuthFooter'
import AuthPage from '../AuthPage/AuthPage'

class Auth extends Component {

    render() {

        return (
            <div className='auth'>
                <div className='auth__wrapper'>

                    <div className="auth__background">
                    </div>

                    <div className="auth__page-container">
                        <AuthPage />
                    </div>

                    <div className="auth__footer-wrapper">
                        <AuthFooter />
                    </div>

                </div>
            </div>
        )
    }
}

export default Auth