import React, { Component } from 'react'

import './index.css'

class Banner extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className='bannerwrapper'>
        <ul className='banner-list'>
          <li className='banner-item'>鞋子</li>
          <li className='banner-item'>衣服</li>
          <li className='banner-item'>体育用品</li>
          <li className='banner-item'>成人用品</li>
        </ul>
        <ul className="banner-list">
          <li className='banner-item'>宠物</li>
          <li className='banner-item'>护肤品</li>
          <li className='banner-item'>二手车</li>
          <li className='banner-item'>更多</li>
        </ul>
      </div>
    )
  }
}

export default Banner
