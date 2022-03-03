// 引入express
const express = require('express')
// 引入处理函数模块
const userHandler = require('../router_handler/sign')
const router = express.Router()

// 公共接口
// 签到
router.post('/signin', userHandler.signIn)
// 签退
router.post('/signout', userHandler.signOut)
// 获取每周签到时长
router.post('/sign/time', userHandler.signTime)
// 根据id查询登录用户签到记录
router.get('/sign/record', userHandler.signRecord)

// 管理员接口
// 获取全部记录或某个成员记录
router.get('/sign/record/:user_id', userHandler.signUserRecord)
// 删除 恢复某条记录
router.get('/sign/delete/:id', userHandler.signDeleteRecord)





// 导出
module.exports = router