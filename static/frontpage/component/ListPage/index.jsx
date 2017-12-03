import React, { Component } from 'react'
import Header from '../Header'
import GoodsChoice from '../GoodsChoice'
import GoodsList from '../GoodsList'
import Pagination from '../Pagination'
import Footer from '../Footer'

import './index.css'

class List extends Component {
  constructor (props) {
    super(props)
    
  }
  
  render () {
   
    return (
      <div className="wrapper">
        <Header/>
        <GoodsChoice/>
        <GoodsList/>
        <Pagination/>
        <Footer/>
      </div>
    )
  }
}

export default List
