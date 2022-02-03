import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import UnauthOrders from './containers/unauthorized/UnauthOrders/UnauthOrders'
import UnauthFavourites from './containers/unauthorized/UnauthFavourites/UnauthFavourites'
import Basket from './containers/Basket/Basket'
import Main from './containers/main/Main/Main'
import NotFound from './containers/NotFound/NotFound'
import Layout from './hoc/Layout/Layout'
import Auth from './containers/authorization/Auth/Auth'

class App extends Component {

    render() {

        let routes = (
            <Routes>
                <Route path='/auth' element={<Auth />} />
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path='orders' element={<UnauthOrders />}/>
                    <Route path='favourites' element={<UnauthFavourites />}/>
                    <Route path='basket' element={<Basket />}/>
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        )

        return (
            <>
                { routes }
            </>
        )
    }
}

export default App
