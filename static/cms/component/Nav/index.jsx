import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

class Nav extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="nav">
        <h1 className="nav-tt">天天淘后台系统</h1>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/cms' className="item-link">商品管理</Link>
          </li>
          <li className="nav-item">
            <Link to='/cms/category' className="item-link">类别管理</Link>
          </li>
          <li className="nav-item">
            <Link to='/cms/orderform' className="item-link">订单管理</Link>
          </li>
          <li className="nav-item">
            <Link to='/cms/vip' className="item-link">会员管理</Link>
          </li>
          <li className="nav-item">
            <Link to='/cms/info' className="item-link">修改密码</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
