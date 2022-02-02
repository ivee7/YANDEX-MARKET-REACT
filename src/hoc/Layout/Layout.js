import React, {Component} from 'react'
import './Layout.scss'
import TopBanner from '../../components/Navigation/TopBanner/TopBanner'
import Header from '../../components/Navigation/Header/Header'
import Nav from '../../components/Navigation/Nav/Nav'
import Footer from '../../components/Navigation/Footer/Footer'
import DropDown from '../../components/Navigation/DropDown/DropDown'

class Layout extends Component {

    state = {
        openedDropDown: false
    }

    toggleDropDown = () => {
        this.setState({
            openedDropDown: !this.state.openedDropDown
        })
    }

    closeDropDown = () => {
        this.setState({
            openedDropDown: false
        })
    }

    render() {
        return (
            <div className='layout'>
                <TopBanner />

                <Header
                    isOpen={this.state.openedDropDown}
                    onToggle={this.toggleDropDown}
                />

                <DropDown
                    isOpen={this.state.openedDropDown}
                    onClose={this.closeDropDown}
                />

                <Nav />

                <main>
                    { this.props.children }
                </main>

                <Footer />
            </div>
        )
    }
}

export default Layout