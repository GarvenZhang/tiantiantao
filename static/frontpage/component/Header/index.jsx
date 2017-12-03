import React, { Component } from 'react'

import './index.css'

class Header extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="header">
        <div className="logowrapper">
          <h1 className="header-tt">
            <span className="hide">天天淘</span>
            <a href="/" className="tt-link"></a>
          </h1>
        </div>
        <div className="searchwrapper">
          <input type="text" className="search-inp" placeholder='商品名称'/>
          <input type="button" className="search-btn" value='搜索'/>
        </div>
        <div className="infowrapper">
          <a href="/Info" className="info-link">账户</a>
          <a href="/Shoppingcart" className="info-link">购物车</a>
        </div>

      </div>
    )
  }
}

export default Header
