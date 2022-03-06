// 引入express
const express = require('express')
// 引入处理函数模块
const userHandler = require('../router_handler/sign')
const router = express.Router()
// 导入表单验证的中间件
const expressJoi = require('@escook/express-joi')
// 导入定义的验证规则
const {sign_in_schema,sign_out_schema,sign_time_schema,sign_record_schema,sign_delete_schema,sign_update_schema} = require('../schema/user')

// 公共接口
// 签到
router.post('/signin', expressJoi(sign_in_schema),userHandler.signIn)
// 签退
router.post('/signout', expressJoi(sign_out_schema), userHandler.signOut)
// 获取每周签到时长
router.post('/sign/time', expressJoi(sign_time_schema), userHandler.signTime)
// 根据id查询登录用户签到记录
router.get('/sign/record', userHandler.signRecord)

// 管理员接口
// 获取全部记录或某个成员记录
router.get('/sign/record/:user_id', expressJoi(sign_record_schema), userHandler.signUserRecord)
// 获取全部记录或某个成员记录
router.get('/sign/delete/record/:user_id', expressJoi(sign_record_schema), userHandler.signDeleteRecord)
// 删除 恢复某条记录
router.get('/sign/delete/:id', expressJoi(sign_delete_schema), userHandler.signDeleteRecord)
// 修改某条记录
router.post('/sign/update',expressJoi(sign_update_schema),userHandler.signUpdateRecord)





// 导出
module.exports = router