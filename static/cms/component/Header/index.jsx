import React, { Component } from 'react'

import './index.css'

class Header extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="header">
        <form className='header-form'>
          <input type="button" value='增加商品' className='btn-add'/>
          <div className="form-search">
            <input type="text" className="btn-search" placeholder='查找商品'/>
            <a className='icon-search' href="javascript: ;">🔍</a>
          </div>
        </form>
      </div>
    )
  }
}

export default Header
