const url = require('url')

const bodyParser = function (req, res, dirname) {
  let ctx = {}
  ctx.method = req.method
  ctx.headers = req.headers
  ctx.url = url.parse(req.url)
  ctx.reqbody = {}
  ctx.resbody = {}
  ctx.realpath = `${dirname}${ctx.url.pathname}`
  ctx.res = res
  ctx.req = req
  return ctx
}

module.exports = bodyParser
