import React, { Component } from 'react'

import './index.css'

class GoodsChoice extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <div className="goodschoice-wrap">
        <section className="section section--price">
          <form className='section-form'>
            <label>价格筛选</label>
            <div className="form-range">
              <input type="number" className="range-min" placeholder='价格下限'/>
              <span className='icon-rules'></span>
              <input type="number" className="range-max" placeholder='价格上限'/>
            </div>
            <input type="button" className="form-btn" value='筛选'/>
          </form>
        </section>
      </div>
    )
  }
}

export default GoodsChoice
