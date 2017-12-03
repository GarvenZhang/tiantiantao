import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header'
import Footer from '../Footer'
import Banner from '../Banner'
import GoodsDisplay from '../GoodsDisplay'

import './index.css'

class Index extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div className="wrapper">
        <Header/>
        <Banner/>
        <GoodsDisplay type='recommand'/>
        <GoodsDisplay type='special'/>
        <Footer/>
      </div>
    )
  }
}

export default Index
