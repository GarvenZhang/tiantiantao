import React, { Component } from 'react'
import Nav from '../Nav'
import Header from '../Header'
import GoodList from '../GoodList'
import Popup from '../Popup'
import Pagination from '../Pagination'

import './index.css'

class GoodsPage extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="wrapper">
        <Nav/>
        <Header/>
        <GoodList/>
        <Popup/>
        <Pagination/>
      </div>
    )
  }
}

export default GoodsPage
