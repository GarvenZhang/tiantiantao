const express = require('./util/express')
const app = express()
const routers = require('./routers/routers')

app.setRootPath(__dirname)

routers(app)

app.listen(3000, () =>  console.log('3000端口建立链接！'))

module.exports = app
