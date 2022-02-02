import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Routes, Route} from 'react-router-dom'
import UnauthFavourites from './containers/unauthorized/UnauthFavourites/UnauthFavourites'
import UnauthOrders from './containers/unauthorized/UnauthOrders/UnauthOrders'
import Main from './containers/main/Main/Main'
import NotFound from './containers/NotFound/NotFound'
import Basket from './containers/Basket/Basket'

class App extends Component {
  render() {

    let routes = (
        <Routes>
            <Route path='/unauth-orders' element={<UnauthOrders />}/>
            <Route path='/unauth-favourites' element={<UnauthFavourites />}/>
            <Route path='/basket' element={<Basket />}/>
            <Route path='' element={<Main />}/>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

    return (
      <Layout>
        { routes }
      </Layout>
    )
  }
}

export default App
