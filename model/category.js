module.exports = app => {

  // 添加商品种类
  app.post('/v1/category', async ctx => {
    const postData = ctx.reqbody
    
    // 查重
    let queryRet = await app.queryConnection('SELECT * FROM category WHERE category = ?', [postData.category])
    if (queryRet.length > 0) {
      ctx.resbody = {
        "status": "failed",
        "retCode": "081",
        "message": "已存在！"
      }
      return
    }
    
    // 入库
    let finalRet = await app.queryConnection('INSERT INTO category(category) VALUES(?)', [postData.category])
    if (finalRet) {
      ctx.resbody = {
        "status": "success",
        "retCode": "08",
        "message": "添加成功！",
        "id": finalRet.insertId
      }
    }
  })

  // 删除商品种类
  app.delete('/v1/category/:id', async ctx => {
    const id = ctx.aUrlParam[0]
    // 查看是否存在
    let queryRet = await app.queryConnection('SELECT * FROM category WHERE id = ?', [id])
    if (queryRet.length === 0) {
      ctx.resbody = {
        "status": "failed",
        "retCode": "082",
        "message": "不存在！"
      }
      ctx.res.statusCode = 416
      return
    }

    // 删除成功
    let finalRet = await app.queryConnection('DELETE FROM category WHERE id = ?', [id])
    if (finalRet) {
      ctx.res.statusCode = 204
    }
  })

  // 更新商品种类
  app.put('/v1/category/:id', async ctx => {
    const id = ctx.aUrlParam[0]
    const postData = ctx.reqbody

    // 查看是否存在
    let queryRet = await app.queryConnection('SELECT * FROM category WHERE id = ?', [id])
    if (queryRet.length === 0) {
      ctx.resbody = {
        "status": "failed",
        "retCode": "082",
        "message": "不存在！"
      }
      ctx.res.statusCode = 416
      return
    }

    // 更新
    let finalRet = await app.queryConnection('UPDATE category SET category = ? WHERE id = ?', [postData.category, id])
    if (finalRet.affectedRows > 0) {
      ctx.resbody = {
        "status": "success",
        "retCode": "10",
        "message": "更新成功！"
      }
    }
  })

  // 查询商品种类
  app.get('/v1/category/:id', async ctx => {
    const id = ctx.aUrlParam[0]
    let sql
    if (id === 'all') {
      sql = 'SELECT * FROM category'
    } else {
      sql = `SELECT * FROM category WHERE id = ${id}`
    }
    // 查看是否存在
    let queryRet = await app.queryConnection(sql)
    if (queryRet.length === 0) {
      ctx.resbody = {
        "status": "failed",
        "retCode": "082",
        "message": "不存在！"
      }
      ctx.res.statusCode = 416
    } else {
      ctx.resbody = {
        "status": "success",
        "data": queryRet
      }
    }
  })
}
