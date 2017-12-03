1.util/router.js  

L175  为什么字符串中要转义？ 

参数多怎么办？

replace()正则的使用

是否要每个接口都要验证用户？

react一定要每个组件都配置好，不要偷懒，比如说return里面没有东西，则会报错！！！ tiantiantao-01

webpack-dev-server自动更新，，搞了好久，是因为。。。p写成了P  tiantiantao-02/03

// GoodsDisplay/index.css 
.goodsdisplay-hd > .hd-tt {
  position: relative;  加了reletive会与::before的层级有关联变化
  display: inline-block;
  padding: 0 10px;
  background-color: #fff;
}

// GoodList/index.css 为什么p标签加了absolute之后变成了inline-block？
.goodslist-wrap .item-info {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}

图片在为src未确定的时候，宽高。。。 tiantiantao-04

有两个项目：frontpage 和 cms，做法是，开发环境中只能在webpack.config.js中配置一项，然后进行开发

<Route exact path='/' component={Goods}/>           一定要是 ／ 
      <Route path='/cms/category' component={Category}/>
      <Route path='/cms/orderform' component={Orderform}/>
      <Route path='/cms/vip' component={Vip}/>
      <Route path='/cms/info' component={Info}/>
      
若我要居中且最后一排从左到右排序如何做到？ tiantiantao-05      
      