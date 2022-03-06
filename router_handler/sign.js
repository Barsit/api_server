// 签到处理函数模块
// 导入数据库模块
const db = require('../db/index')
// 导入dayjs模块
var dayjs = require('dayjs')
var isoWeek = require('dayjs/plugin/isoWeek')
dayjs.extend(isoWeek)



// 签到处理函数
exports.signIn = (req, res) => {
    // 查询是否有未签退记录
    const sql1 = 'select * from ev_times where user_id=? and signout_mark=0'
    db.query(sql1, [req.user.id], (err, results) => {
        // sql1失败
        if (err) return res.cc(err)
        // 签到时间在22点以后5点之间
        const date1 = dayjs(req.body.signin_time)
        if (date1.$H > 22 || date1.$H < 5) return res.cc('签到失败，不在签到时间段')
        // 有未签退，不予签到
        if (results.length !== 0) return res.cc('签到失败,已签到，请先签退')
        // 允许签到
        const sql2 = `insert into ev_times set ?`
        // 签到时间格式转换
        req.body.signin_time = date1.format('YYYY-MM-DD HH:mm')
        // 添加登录用户的id
        req.body.user_id = req.user.id
        // 添加登录用户名字
        req.body.nickname = req.user.nickname
        // 添加iso年度周
        req.body.iso_week = dayjs(req.body.signin_time).isoWeek()
        db.query(sql2, [req.body], (err, results) => {
            // sql2失败
            if (err) return res.cc(err)
            // sql2成功，影响结果不为1
            if (results.affectedRows !== 1) return res.cc('签到失败4')
            // 签到成功
            res.send({
                status: 0,
                message: '签到成功',
                signid: results.insertId
            })
        })
    })
}

// 签退处理函数
exports.signOut = (req, res) => {
    // 根据id查看是否签退过
    const sql1 = `select signout_mark,signin_time from ev_times where id=?`
    db.query(sql1, [req.body.id], (err, results) => {
        // sql1失败
        if (err) return res.cc(err)
        // sql1成功，查询结果不为1
        if (results.length !== 1) return res.cc('签退失败2')
        // 已签退,不予操作
        if (results[0].signout_mark === 1) return res.cc('签退失败，已签退。')
        // 签退
        const date1 = dayjs(req.body.signout_time) //签退时间
        // 签退时间格式转换
        req.body.signout_time = dayjs(req.body.signout_time).format('YYYY-MM-DD HH:mm')
        operate_total = date1.diff(results[0].signin_time, 'minute')        //签退时间与签到时间时间差
        // 签退时间大于22点小于凌晨5点，单次签到超过300分钟，动态删除该条记录
        if (date1.$H > 22 || date1.$H < 5 || operate_total > 300) {
            //动态删除该条记录sql
            const sql3 = 'update ev_times set signout_mark=1,operate_total=?,signout_time=?,valid_mark=1 where id=?'
            db.query(sql3, [operate_total, req.body.signout_time, req.body.id], (err, results) => {
                // sql2失败
                if (err) return res.cc(err)
                // sql2成功，影响结果不为1
                if (results.affectedRows !== 1) return res.cc('签退失败5')
                // 签退成功
                res.cc('签退失败，超过签退时间段或单次签到超过5小时。本次签到无效，请重新签到！')
            })
        }
        else {
            const sql2 = `update ev_times set signout_mark=1,operate_total=?,signout_time=? where id=?`
            db.query(sql2, [operate_total, req.body.signout_time, req.body.id], (err, results) => {
                // sql2失败
                if (err) return res.cc(err)
                // sql2成功，影响结果不为1
                if (results.affectedRows !== 1) return res.cc('签退失败')
                // 签退成功
                res.cc('签退成功', 0)
            })
        }

    })
}

// 根据获取时间获取签到时长
exports.signTime = (req, res) => {
    //   将时间参数转换为周数
    time = dayjs(req.body.time).isoWeek()
    //  根据周数查询
    const sql = `select user_id,nickname,SUM(operate_total) from ev_times where iso_week=? and valid_mark = 0 GROUP BY user_id `
    db.query(sql, [time], (err, results) => {
        // sql失败
        if (err) return res.cc(err)
        // sql成功
        res.send({
            status: 0,
            message: "获取签到时长成功",
            data: results
        })
    })
}

// 查询当前登录用户的签到记录
exports.signRecord = (req, res) => {
    // 查询当前登录用户的签到记录
    const sql = `select id,user_id,nickname,signin_time,signout_time,longitude,latitude,operate_total from ev_times where user_id=? and valid_mark = 0`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc(err)
        // sql成功
        res.send({
            status: 0,
            message: "获取签到记录成功",
            data: results
        })
    })
}

// 获取某个用户的记录
exports.signUserRecord = (req, res) => {
    // 权限验证
    const sql = `select roles from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc(err)
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('获取用户的记录失败2')
        // 操作者权限不足
        if (results[0].roles !== 1) return res.cc('操作者权限不足，获取用户的记录失败3')
        // 权限允许
        // 判断查询需求为单个还是全部
        let sql2
        // 全部记录
        if (req.params.user_id == 0) sql2 = `select id,user_id,nickname,GROUP_CONCAT(signin_time),GROUP_CONCAT(signout_time),GROUP_CONCAT(longitude),GROUP_CONCAT(latitude),GROUP_CONCAT(operate_total) from ev_times group by user_id and valid_mark = 0`
        // 单个成员记录
        else sql2 = `select id,user_id,nickname,signin_time,signout_time,longitude,latitude,operate_total from ev_times where user_id=? and valid_mark = 0`
        db.query(sql2, [req.params.user_id], (err, results) => {
            // sql失败
            if (err) return res.cc(err)
            if (results.length === 0) return res.cc("没有该用户的记录")
            // sql成功，查询结果不为1
            res.send({
                status: 0,
                message: "获取用户的记录成功",
                data: results
            })
        })

    })
}

// 删除记录
exports.signDeleteRecord = (req, res) => {
    // 权限验证
    const sql = `select roles from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc(err)
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('操作用户的记录失败2')
        // 操作者权限不足
        if (results[0].roles !== 1) return res.cc('操作者权限不足，操作用户的记录失败3')
        // 权限允许
        // 删除 恢复记录
        const sql2 = `select valid_mark from ev_times where id=? `
        db.query(sql2, [req.params.id], (err, results) => {
            // sql失败
            if (err) return res.cc(err)
            // sql成功，查询结果不为1
            if (results.length !== 1) return res.cc('操作用户的记录失败4')
            const valid_mark = !results[0].valid_mark
            const sql3 = `update ev_times set valid_mark=? where id=? `
            db.query(sql3, [valid_mark, req.params.id], (err, results) => {
                // sql失败
                if (err) return res.cc(err)
                // sql成功，查询结果不为1
                if (results.affectedRows !== 1) return res.cc('操作用户的记录失败5')
                res.cc('操作用户的记录成功', 0)
            })
        })
    })
}
// 获取某个用户被删除的记录
exports.signDeleteRecord = (req, res) => {
    // 权限验证
    const sql = `select roles from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc(err)
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('获取用户的删除记录失败2')
        // 操作者权限不足
        if (results[0].roles !== 1) return res.cc('操作者权限不足，获取用户的记录失败3')
        // 权限允许
        // 判断查询需求为单个还是全部
        let sql2
        // 全部记录
        if (req.params.user_id == 0) sql2 = `select id,user_id,nickname,GROUP_CONCAT(signin_time),GROUP_CONCAT(signout_time),GROUP_CONCAT(longitude),GROUP_CONCAT(latitude),GROUP_CONCAT(operate_total) from ev_times group by user_id and valid_mark = 1`
        // 单个成员记录
        else sql2 = `select id,user_id,nickname,signin_time,signout_time,longitude,latitude,operate_total from ev_times where user_id=? and valid_mark = 1`
        db.query(sql2, [req.params.user_id], (err, results) => {
            // sql失败
            if (err) return res.cc(err)
            if (results.length === 0) return res.cc("没有该用户的删除记录")
            // sql成功，查询结果不为1
            res.send({
                status: 0,
                message: "获取用户的删除记录成功",
                data: results
            })
        })
    })
}
// 根据id修改记录
exports.signUpdateRecord = (req, res) => {
    // 权限验证
    const sql = `select roles from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc(err)
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('修改用户的记录失败')
        // 操作者权限不足
        if (results[0].roles !== 1) return res.cc('操作者权限不足，修改用户的记录失败')
        // 查看记录是否被删除 被删除的无法修改 需要先恢复
        const sql2 = `select valid_mark,signin_time,signout_time from ev_times where id =?`
        db.query(sql2, [req.body.id], (err, results) => {
            // sql失败
            if (err) return res.cc(err)
            // sql成功，查询结果不为1
            if (results.length !== 1) return res.cc('修改用户的记录失败')
            // 已被删除，修改需要先恢复
            if (results[0].valid_mark === 1) return res.cc('本条签到记录无效，需要修改请先恢复记录！')
            // 接收格式化后的签到时间和签退时间以及参数存在标记
            var signin_time, signout_time
            // 是否更改签到时间
            if (!req.body.signin_time) {
                signin_time = dayjs(results[0].signin_time)
                req.body.signin_time = results[0].signin_time
            }
            else {
                // 更改签到时间格式
                signin_time = dayjs(req.body.signin_time)
                req.body.signin_time = signin_time.format('YYYY-MM-DD HH:mm')
            }
            // 是否更改签退时间
            if (!req.body.signout_time) {
                signout_time = dayjs(results[0].signout_time)
                req.body.signout_time = results[0].signout_time

            }
            else {
                // 更改签退时间格式
                signout_time = dayjs(req.body.signout_time)
                req.body.signout_time = signout_time.format('YYYY-MM-DD HH:mm')
            }
            // 修改iso周数
            req.body.iso_week = dayjs(req.body.signout_time).isoWeek()
            // 参数中没有签到时间，修改计时
            if (!req.body.operate_total) req.body.operate_total = signin_time.diff(signin_time, 'minute')
            // 修改数据库
            const sql3 = `update ev_times set ? where id = ?`
            db.query(sql3, [req.body, req.body.id], (err, results) => {
                // sql失败
                if (err) return res.cc(err)
                // sql成功，查询结果不为1
                if (results.affectedRows !== 1) return res.cc('修改用户的记录失败')
                res.cc('修改用户的记录成功', 0)
            })
        })
    })
}