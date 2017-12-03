import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class GoodsDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: props.type
    }
  }
  
  render () {
    const {type} = this.state
    const sectionClass = `section section--${type}`
    const ttText = type === 'recommand' ? '推荐商品' : '特价商品'
    const moreText = `点击查看更多${type === 'recommand' ? '推荐' : '特价'}商品 >>`
    return (
      <div className="goodsdisplaywrapper">
        <section className={sectionClass}>
          <div className='section-hd'>
            <h2 className='section-tt'>{ttText}</h2>
          </div>
          <div className="section-body">
            <ul className="section-list">
              <li className="section-item">
                <img src="" alt=""/>
                <p className="item-info">
                  <span className="item-name">nike</span>
                  <span className="item-price">900¥</span>
                </p>
              </li>
              <li className="section-item">
                <img src="" alt=""/>
                <p className="item-info">
                  <span className="item-name">nike</span>
                  <span className="item-price">900¥</span>
                </p>
              </li>
            </ul>
            <ul className="section-list">
              <li className="section-item">
                <img src="" alt=""/>
                <p className="item-info">
                  <span className="item-name">nike</span>
                  <span className="item-price">900¥</span>
                </p>
              </li>
              <li className="section-item">
                <img src="" alt=""/>
                <p className="item-info">
                  <span className="item-name">nike</span>
                  <span className="item-price">900¥</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="section-ft">
            <Link to='/list' className='ft-text'>{moreText}</Link>
          </div>
        </section>
      </div>
    )
  }
}

export default GoodsDisplay
