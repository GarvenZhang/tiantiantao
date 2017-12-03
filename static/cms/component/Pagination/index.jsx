import React, { Component } from 'react'

import './index.css'

class Pagination extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="paginationwrapper">
        <a className="btn-index" href=''>首页</a>
        <a className="btn-prev" href=''>上一页</a>
        <ul className="pagesnum-list">
          <li className="pagesnum-item">
            <a href="" className='item-btn'>1</a>
          </li>
          <li className="pagesnum-item">
            <a href="" className='item-btn'>2</a>
          </li>
          <li className="pagesnum-item">
            <a href="" className='item-btn'>3</a>
          </li>
          <li className="pagesnum-item">
            <a href="" className='item-btn'>...</a>
          </li>
          <li className="pagesnum-item">
            <a href="" className='item-btn'>100</a>
          </li>
        </ul>
        <a href="" className="btn-next">下一页</a>
        <select className='btn-select'>
          <option value="1" selected>1</option>
          <option value="1" >2</option>
        </select>
      </div>
    )
  }
}

export default Pagination
