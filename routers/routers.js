module.exports = app => {
  if (!app) {
    return
  }

  // 数据库配置
  app.setDBOptions({
    host: 'localhost',
    port: 3306,
    database: 'tiantiantao',
    user: 'root',
    password: '970226'
  })
  app.createPool(app.dbOptions)
  app.getConnection()
    .then(connection => {
      app.connection = connection
    })

  // 用户模块路由
  const user = require('../model/user')
  user(app)

  // 类别模块路由
  const category = require('../model/category')
  category(app)

  // 商品模块路由
  const goods = require('../model/goods')
  goods(app)

  // 订单模块路由
  const orderForm = require('../model/order-form')
  orderForm(app)

  // 购物车模块路由
  const shoppingCart = require('../model/shopping-cart')
  shoppingCart(app)

}
