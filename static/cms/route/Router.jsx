import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Goods from '../component/GoodsPage'
import Category from '../component/CategoryPage'
import Orderform from '../component/OrderformPage'
import Vip from '../component/VipPage'
import Info from '../component/InfoPage'

const RouteMap = () => (
  <Router>
    <div>
      <Route exact path='/' component={Goods}/>
      <Route path='/cms/category' component={Category}/>
      <Route path='/cms/orderform' component={Orderform}/>
      <Route path='/cms/vip' component={Vip}/>
      <Route path='/cms/info' component={Info}/>
    </div>
  </Router>
)

export default RouteMap
