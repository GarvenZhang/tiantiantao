module.exports = app => {
  // 添加商品入购物车
  app.post('/v1/shoppingcart', async ctx => {
    const postData = ctx.reqbody
    let goodsSet = `[{goods_id: ${postData.goods_id}, goods_count: 1]`

    let ret = await app.queryConnection('INSERT INTO shoppingcart(goods_set) VALUES(?)', [goodsSet])
    if (ret.affectedRows > 0) {
      ctx.resbody = {
        status: 'success',
        id: ret.insertId,
        "retCode": "08",
        "message": "添加成功！"
      }
      ctx.res.statusCode = 201
    }
  })

  // 从购物车中删除商品
  app.delete('/v1/shoppingcart/:id', async ctx => {
    const id = ctx.aUrlParam[0]

    let ret = await app.queryConnection('DELETE FROM shoppingcart WHERE id = ?', [id])
    if (ret.affectedRows > 0) {
      ctx.res.statusCode = 204
    } else if (ret.affectedRows === 0) {
      ctx.resbody = {
        status: 'failed',
        "retCode": "082",
        "message": "不存在！"
      }
    }
  })

  // 修改购物车中的商品
  app.put('/v1/shoppingcart/:id', async ctx => {
    const id = ctx.aUrlParam[0]
    const goodsSet = ctx.reqbody.data

    let ret = await app.queryConnection('UPDATE shoppingcart SET ? WHERE id = ?', [goodsSet, id])
    if (ret.affectedRows > 0) {
      ctx.resbody = {
        "status": "success",
        "retCode": "10",
        "message": "更新成功！"
      }
    } else if (ret.affectedRows === 0) {
      ctx.resbody = {
        status: 'failed',
        "retCode": "082",
        "message": "不存在！"
      }
      ctx.res.statusCode = 400
    }
  })

  // 查询购物车
  app.get('/v1/shoppingcart/:id', async ctx => {
    const id = ctx.aUrlParam[0]

    // 先取出goods_set字符串并转化为数组
    let ret = await app.queryConnection('SELECT * FROM shoppingcart WHERE id = ?', [id])
    let goodsSet
    let dataRet = []
    if (ret.length > 0) {
      goodsSet = JSON.parse(ret.goods_set)

      // 将name, price, bigImg从goods表中取出来
      for (let goodsItem of goodsSet) {
        let goods = await app.queryConnection('SELECT name, price, bigImg FROM goods WHERE id = ?', [goodsItem.goods_id])
        dataRet.push(Object.assign({}, {count: goodsItem.goods_count}, goods[0]))
      }

      // 返回响应对象
      ctx.resbody = {
        length: goodsSet.length,
        data: dataRet
      }
    } else if (ret.length === 0) {
      ctx.resbody = {
        status: 'failed',
        "retCode": "082",
        "message": "不存在！"
      }
      ctx.res.statusCode = 400
    }
  })
}
