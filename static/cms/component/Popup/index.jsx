import React, { Component } from 'react'

import './index.css'

class Popup extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="popup-wrap hide">
        <form className='popup-form goods-edit'>
          <p className='goods-tt'>商品编辑</p>
          <p>名称：<input type="text" className="goods-name"/></p>
          <p>描述：<input type="text" className="goods-desc"/></p>
          <p>价钱：<input type="text" className="goods-price"/></p>
          <p className="goods-bigimg">大图：<div className="bigimg-upload-area">点击此处上传</div></p>
          <p className="goods-smimg">大图：<div className="smimg-upload-area">点击此处上传</div></p>
          <input className='goods-btn btn-close' type="button" value='关闭'/>
          <input className='goods-btn btn-sure' type="button" value='确定'/>
        </form>
      </div>
    )
  }
}

export default Popup
