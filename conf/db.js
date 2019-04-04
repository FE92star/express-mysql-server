/** 
 * 关于MySQL数据的基本配置信息
**/
// 本地mysql数据库
let localMysql = {
    host: 'localhost', //主机名
    user: 'root', //用户名
    password: '616572', //登录密码
    database: 'world', //连接数据库
    port: 3306 //端口号
}
// 理财测试服数据库
let gjjMysql = {
    host: 'rm-dev-uat-lan.mysql.rds.aliyuncs.com',
    user: 'p2p', 
    password: 'EB6BC333E9B9D57EAEA4DD00FFE83F036C5030AF55',
    database: 'p2puat',
    port: 3306
}
module.exports = {
    localMysql,
    gjjMysql
}