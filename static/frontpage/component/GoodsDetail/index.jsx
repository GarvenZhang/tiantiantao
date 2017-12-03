import React, { Component } from 'react'

import './index.css'

class GoodsDetail extends Component {
  constructor (props) {
    super(props)
    
  }
  
  render () {
   
    return (
      <div className="goodsdetailwrap">
        <div className="figure">
          <img src="" alt="" className="bigimg" width='300' height='400'/>
          <ul className="smimg-list">
            <li className="smimg-item">
              <img src="" alt="" width='30' height='40'/>
            </li>
            <li className="smimg-item">
              <img src="" alt="" width='30' height='40'/>
            </li>
            <li className="smimg-item">
              <img src="" alt="" width='30' height='40'/>
            </li>
            <li className="smimg-item">
              <img src="" alt="" width='30' height='40'/>
            </li>
            <li className="smimg-item">
              <img src="" alt="" width='30' height='40'/>
            </li>
          </ul>
        </div>
        <div className="info">
          价格：<p className="info-price"></p>
          描述：<p className="info-desc"></p>
          <button className="add-btn">加入购物车</button>
        </div>
      </div>
    )
  }
}

export default GoodsDetail
