import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

class GoodsList extends Component {
  constructor (props) {
    super(props)

  }

  render () {


    return (
      <div className="goodslist-wrap">
        <section className="section">
          <ul className="section-list">
            <li className="section-item">
              <Link className='item-link' to={'/detail'}>
                <img src="" alt=""/>
                <p className="item-info">
                  <span className="item-name">nike</span>
                  <span className="item-price">900¥</span>
                </p>
              </Link>
            </li>
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
        </section>
        <section className="section">
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
            <li className="section-item">
              <img src="" alt=""/>
              <p className="item-info">
                <span className="item-name">nike</span>
                <span className="item-price">900¥</span>
              </p>
            </li>
          </ul>
        </section>
        <section className="section">
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
            <li className="section-item">
              <img src="" alt=""/>
              <p className="item-info">
                <span className="item-name">nike</span>
                <span className="item-price">900¥</span>
              </p>
            </li>
          </ul>
        </section>
        <section className="section">
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
            <li className="section-item">
              <img src="" alt=""/>
              <p className="item-info">
                <span className="item-name">nike</span>
                <span className="item-price">900¥</span>
              </p>
            </li>
          </ul>
        </section>
        <section className="section">
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
            <li className="section-item">
              <img src="" alt=""/>
              <p className="item-info">
                <span className="item-name">nike</span>
                <span className="item-price">900¥</span>
              </p>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default GoodsList
