let mysql = require('mysql')
let $conf = require('../conf/db.js')
let $sql = require('../sql/demoSql.js')
// let jsonFn = require('../utils/json.js')
// 创建mysql连接池
let pool = mysql.createPool(Object.assign({}, $conf))
// 城市查询
const cityFind = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        connection.query($sql.cityQuery, function(err, result) {
            // jsonFn(res, result)
            if(err) {

            }else {
                let jsonData = {
                    resCode: 1,
                    resMsg: '操作成功',
                    resData: result
                }
                return res.json(jsonData)
            }
            // connection.release() //断开连接
        })
    })
}

module.exports = cityFind