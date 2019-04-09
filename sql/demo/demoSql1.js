/**
* mysql查询语句demo
* 数据库中存在4条数据
**/
// SELECT * FROM city WHERE CountryCode='AFG'
// 对应的连表查询
let citys = {
    cityQuery: `select a.country_id, a.country_name, b.city_name from countries a JOIN cities b ON a.country_name = b.city_country;`
}
module.exports = citys