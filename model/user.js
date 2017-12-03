const formValidate = require('../util/formvalidate')
const sessionModule = require('../util/session')

module.exports = app => {

  // 注册接口
  app.post('/v1/user', async ctx => {
    const postData = ctx.reqbody

    // 表单验证
    let validateRet = formValidate([
      {
        value: postData.username,
        type: ["notNull", "isLegal"],
        code: ["021", "022"]
      },
      {
        value: postData.password,
        type: ["notNull", "isLegal"],
        code: ["034", "031"]
      },
      {
        value: postData.mail,
        type: ["notNull", "isValidMail"],
        code: ["071", "07"]
      },
      {
        value: postData.sex,
        type: ["notNull"],
        code: ["04"]
      },
      {
        value: postData.phone,
        type: ["notNull", "isLegal", "isValidPhone"],
        code: ["05", "051", "052"]
      }
    ])
    if (validateRet !== true) {
      Object.assign(ctx.resbody, {
        status: "failed"
      }, validateRet)
      return
    }

    // 用户名重复验证
    let usernameValidate = await app.queryConnection('SELECT * FROM user WHERE username = ?', [postData.username])
    if (usernameValidate.length > 0) {
      ctx.resbody = {
        "status": "failed",
        "retCode": "021",
        "message": "用户名已被注册！"
      }
      return
    }

    // 入库
    let finalRet = await app.queryConnection('INSERT INTO user(username, password, phone, mail) VALUES(?, ?, ?, ?, ?)', [postData.username, postData.password, postData.phone, postData.mail, postData.sex])
    if (finalRet) {
      ctx.resbody = {
        "status": "success",
        "retCode": "00",
        "message": "注册成功！"
      }
    }
  })

  // 登陆接口
  app.post('/v1/user?login', async ctx => {
    const cookies = ctx.headers.cookie
    const postData = ctx.reqbody
    let res = ctx.res

    // 账户密码验证
    let usernameAndPwdValidate = await app.queryConnection('SELECT * FROM user WHERE username = ? AND password = ?', [postData.username, postData.password])
    if (usernameAndPwdValidate.length === 0) {
      ctx.resbody = {
        "status": "failed",
        "retCode": "011",
        "message": "账号或密码错误！"
      }
      return
    }

    ctx.resbody = {
      "status": "success",
      "retCode": "01",
      "message": "登陆成功！"
    }
    // session
    // sessionModule.init(cookies, res)
  })

  // 修改密码
  app.put('/v1/user', async ctx => {
    const postData = ctx.reqbody

    // 查询密码是否正确的同时更新密码
  })

  // 升级为会员
  app.post('/v1/user/vip', async ctx => {
    const postData = ctx.reqbody

    let ret = await app.queryConnection('UPDATE user SET vipStatus = ? WHERE id = ?', [1, postData.id])
    if (ret.affectedRows > 0) {
      ctx.resbody = {
        "status": "success",
        "retCode": "10",
        "message": "更新成功！"
      }
      ctx.res.statusCode = 202
    }
  })

  // 解冻／冻结会员
  app.put('/v1/user/:id/vip', async ctx => {
    const postData = ctx.reqbody
    const id = ctx.aUrlParam[0]

    let ret = await app.queryConnection('UPDATE user SET vipStatus = ? WHERE id = ?', [postData.status, id])
    if (ret.affectedRows > 0) {
      ctx.resbody = {
        "status": "success",
        "retCode": "10",
        "message": "更新成功！"
      }
      ctx.res.statusCode = 202
    }
  })

  // 查看会员
  app.get('/v1/user/:id/vip', async ctx => {
    const id = ctx.aUrlParam[0]

    let sql
    if (id === 'all') {
      sql = 'ELECT * FROM category'
    } else {
      sql = `SELECT * FROM category WHERE id = ${id}`
    }

    let ret = await app.queryConnection(sql)
    if (ret.length > 0) {
      ctx.resbody = {
        "status": "success",
        "data": ret
      }
    }
  })
}
