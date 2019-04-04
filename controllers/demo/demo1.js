let mysql = require('mysql')
let $conf = require('../../conf/db.js')
let $sql = require('../../sql/demo/demoSql1.js')
// let jsonFn = require('../utils/json.js')
// 创建mysql连接池
let pool = mysql.createPool(Object.assign({}, $conf.localMysql))
// 城市查询
const cityFind = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        connection.query($sql.cityQuery, function(err, result) {
            // 失败处理
            if(err) {
                let errData = {
                    resCode: 0,
                    resMsg: '操作失败'
                }
                return res.json(errData)
            }else {
                let jsonData = {
                    resCode: 1,
                    resMsg: '操作成功',
                    resData: result
                }
                return res.json(jsonData)
            }
        })
        connection.release(function(err) {
            if(err) return
            console.log('connection end');
        })
    })
}

module.exports = cityFind