import React, {Component} from 'react'
import './Header.scss'
import Logo from './Logo/Logo'
import ButtonCatalogue from './ButtonCatalogue/ButtonCatalogue'
import FormSearch from './FormSearch/FormSearch'
import Icons from './Icons/Icons'
import './FormSearch/MiniSuggest/MiniSuggestOverlay.scss'

class Header extends Component {

    state = {
        inputFocused: false
    }

    raiseOverlayHandler = () => {
        this.setState({
            inputFocused: true
        })
    }

    hideOverlayHandler = () => {
        this.setState({
            inputFocused: false
        })
    }

    render() {

        const cls = ['mini-suggest-overlay']

        if (this.state.inputFocused) {
            cls.push('mini-suggest-overlay_focused')
        }

        return (
            <header className='header'>
                <div className='header__wrapper'>

                    <div className='header__logo'>
                        <Logo />
                    </div>

                    <div className='header__basic'>
                        <div className='header__basic-catalogue'>
                            <ButtonCatalogue
                                isOpen={this.props.isOpen}
                                onToggle={this.props.onToggle}
                            />
                        </div>

                        <div className='header__basic-form'>
                            <FormSearch
                                isFocused={this.state.inputFocused}
                                onFocus={this.raiseOverlayHandler}
                            />
                            <div onClick={this.hideOverlayHandler} className={cls.join(' ')}></div>
                        </div>

                        <div className='header__basic-icons'>
                            <Icons />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header