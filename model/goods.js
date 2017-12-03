const formValidate = require('../util/formvalidate')

module.exports = app => {
  // 添加新商品
  app.post('/v1/goods',  async ctx => {
    const postData = ctx.reqbody
    console.log(postData)

    // 表单验证
    let validateRet = formValidate([
      {
        value: postData.price,
        type: ['notNull', 'isNum'],
        code: ['021', '011']
      },
      {
        value: postData.date,
        type: ['notNull', 'isValidDate'],
        code: ['021', '011']
      }
    ])

    if (validateRet !== true) {
      Object.assign(ctx.resbody, {
        status: "failed"
      }, validateRet)
      ctx.res.statusCode = 400
      return
    }

    // 类别处理
    let categoryRet = await app.queryConnection('SELECT * FROM category WHERE category = ?', [postData.category])
    if (categoryRet.length === 0) {
      ctx.resbody = {
        "status": "failed",
        "retCode": "082",
        "message": "无此类别！"
      }
      ctx.res.statusCode = 400
      return
    } else {
      // 转化为数据库中的属性名
      postData.category_id = categoryRet[0].id
      delete postData.category
    }

    // 大图处理
    if (postData.bigImg) {
      let bigImgRet = await app.queryConnection('INSERT INTO imgs(src) VALUES(?)', [postData.bigImg])
      if (bigImgRet.affectedRows > 0) {
        postData.bigImg_id = bigImgRet.insertId
        delete postData.bigImg
      }
    }

    // 小图处理
    if (postData.smImg) {
      for (let item of postData.smImg) {
        let smImgRet = await app.queryConnection('INSERT INTO imgs(src) VALUES(?)', [item.src])
        if (smImgRet.affectedRows > 0) {
          postData.smImg_id = smImgRet.insertId
        }
      }
      delete postData.smImg
    }

    // 传了什么就query什么
    let userSql = []
    let valuesSql = []
    for (var attr in postData) {
      userSql.push(attr)
      valuesSql.push(`'${postData[attr]}'`)
    }
    // 入库
    let sql = `INSERT INTO goods(${userSql.join(',')}) VALUES(${valuesSql.join(', ')})`
    let finalRet = await app.queryConnection(sql)
    if (finalRet) {
      ctx.resbody = {
        "status": "success",
        "retCode": "08",
        "message": "添加成功！"
      }
      ctx.resbody.statusCode = 201
    }
  })

  // 删除商品
  app.delete('/v1/goods/:id',  async ctx => {
    const id = ctx.aUrlParam
    let sql = `DELETE FROM goods WHERE id = ${id}`
    let finalRet = await app.queryConnection(sql)
    if (finalRet.affectedRows === 1) {
      ctx.resbody = {
        "status": "success",
        "retCode": "09",
        "message": "删除成功！"
      }
      ctx.res.statusCode = 204
    } else if (finalRet.affectedRows === 0) {
      ctx.resbody = {
        "status": "failed",
        "retCode": "082",
        "message": "不存在！"
      }
      ctx.res.statusCode = 400
    }
  })

  // 查询商品
  app.get('/v1/goods/:id?curPage=:curPage&nextPage=:nextPage&perPage=:perPage', async ctx => {
    console.log(ctx.aUrlParam)
  })

  // 根据价格区间查询商品
  app.get('/v1/goods/:name?min=:min&max=:max&curPage=:curPage&nextPage=:nextPage&perPage=:perPage', async ctx => {

  })

  // 修改商品
  app.put('/v1/goods/:id', async ctx => {

  })
}
