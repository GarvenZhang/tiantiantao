import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Index from '../component/IndexPage'
import List from '../component/ListPage'
import Detail from '../component/DetailPage'
import Shoppingcart from '../component/ShoppingcartPage'
import Orderform from '../component/OrderformPage'
import Info from '../component/InfoPage'

const RouteMap = () => (
  <Router>
    <div>
      <Route exact path='/' component={Index}/>
      <Route path='/list' component={List}/>
      <Route path='/detail' component={Detail}/>
      <Route path='/shoppingcart' component={Shoppingcart}/>
      <Route path='/orderform' component={Orderform}/>
      <Route path='/info' component={Info}/>
    </div>
  </Router>
)

export default RouteMap
