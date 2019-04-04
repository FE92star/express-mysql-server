/** 将对应的返回数据封装成JSON格式返回给前端
 * @param {Object}-res 
 * @param {Object}-ret
 * @return {JSON}
 **/

const jsonFn = (res, ret) => {
    if(typeof ret === undefined) {
        res.json({
            code: '0',
            msg: '操作失败'
        })
    }else {
        res.json(ret)
    }
}
module.exports = jsonFn