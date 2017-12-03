const http = require('http')
const router = require('./router')
const bodyParser = require('./bodyParser')
const mysqlModule = require('./mysqlModule')

function express () {
  return new express.fn.init()
}

express.fn = express.prototype = {
  constructor: express,
  init: function () {
    this.rootpath = ''
    this.dbOptions = {}
    this.pool = null
    this.connection = null
  },
  setRootPath: function (path) {
    this.rootpath = path
  },
  listen: function (port, callback) {
    const self = this

    const server = http.createServer((req, res) => {

      let isReqReg = /\/[^./]*?$/

      let ctx = bodyParser(req, res, self.rootpath)

      // 获得当前index.html路径
      let pathname = ctx.url.pathname

      // 排除/favicon.ico
      if (pathname == '/favicon.ico') {
        return

        // 首页html文件
      } else if (pathname == '/index' || pathname == '/') {
        router.goIndex(ctx)

      } else if (isReqReg.test(pathname)) {
        router.dealWithAPI(ctx)

        // 其它资源请求
      } else {
        router.dealWithStatic(ctx)
      }
    })
    server.listen(port, callback)
  },
  get: function (url, callback) {
    router.gets[url] = callback
  },
  post: function (url, callback) {
    router.posts[url] = callback
  },
  put: function (url, callback) {
    router.puts[url] = callback
  },
  delete: function (url, callback) {
    router.deletes[url] = callback
  }
}

express.fn.init.prototype = express.fn

// MySQL数据库处理模块
Object.assign(express.fn, mysqlModule)

module.exports = express
