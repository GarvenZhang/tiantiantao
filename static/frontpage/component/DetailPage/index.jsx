import React, { Component } from 'react'
import Header from '../Header'
import GoodsDetail from '../GoodsDetail'
import Footer from '../Footer'

import './index.css'

class Detail extends Component {
  constructor (props) {
    super(props)
    
  }
  
  render () {
   
    return (
      <div className="detailwrapper">
        <Header/>
        <GoodsDetail/>
        <Footer/>
      </div>
    )
  }
}

export default Detail
