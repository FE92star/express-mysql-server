let mysql = require('mysql')
let $conf = require('../../conf/db.js')
let $sql = require('../../sql/demo/demoSql2.js')

let pool = mysql.createPool(Object.assign({}, $conf.gjjMysql))

const articleFind = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        connection.query($sql.articleQuery, function(err, result) {
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
            connection.release() //断开连接
        })
    })
}

module.exports = articleFind