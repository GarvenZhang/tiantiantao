const mysql = require('mysql')

let mysqlModule = {
  setDBOptions: function (options) {
    this.dbOptions = options
  },
  createPool: function (options) {
    this.pool = mysql.createPool(options)
  },
  getConnection: function () {
    let pool = this.pool
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          resolve(connection)
        }
      })
    })
  },
  queryConnection: function (sql, parameters) {
    let connection = this.connection
    return new Promise((resolve, reject) => {
      connection.query(sql, parameters, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  releaseConnection: function () {
    this.pool.release()
  },
  destroyConnection: function () {
    this.pool.destroy()
  },
  endConnection: function () {
    this.pool.end()
  }
}

module.exports = mysqlModule
