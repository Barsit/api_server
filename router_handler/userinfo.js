// 导入数据库操作模块
const db = require('../db/index')
// 导入bcrypt,密码加密
const bcrypt = require('bcryptjs')
// 导入path模块，处理文件路径
const path = require('path')
// 文件处理模块
const fs = require('fs')

// 获取用户信息的函数
exports.getUserInfo = (req, res) => {
    // 根据用户id进行查询
    const sql = `select id, username, nickname, email,roles, user_pic from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql语句失败
        if (err) return res.cc(err)
        // sql成功，但查询结果不为1
        if (results.length !== 1) return res.cc('获取用户信息失败！')
        // 将用户信息响应给客户端
        res.send({
            status: 0,
            message: '获取用户信息成功！',
            data: results[0]
        })
    })
}

// 修改用户的基本信息
exports.updateUserInfo = (req, res) => {
    // 修改用户信息的sql语句
    const sql = `update ev_users set ? where id=?`

    db.query(sql, [req.body, req.body.id], (err, results) => {
        // sql执行失败
        if (err) return res.cc(err)
        // sql成功，但影响结果不为1
        if (results.affectedRows !== 1) return res.cc('修改用户信息失败')
        // 修改用户信息成功
        res.cc('修改用户信息成功', 0)
    }
    )
}

// 修改密码的函数
exports.updatePassword = (req, res) => {
    // 修改密码的sql语句
    const sql = `select * from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc('修改密码失败')
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('修改密码失败')

        // 判断提交的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldpwd, results[0].password)
        if (!compareResult) return res.cc('原密码错误')
        // 新密码加密
        const newpwd = bcrypt.hashSync(req.body.newpwd, 10)
        // 新密码存入数据库
        const sql = `update ev_users set password=? where id=?`
        db.query(sql, [newpwd, req.user.id], (err, results) => {
            // sql失败
            if (err) return res.cc('修改密码失败')
            // sql成功,影响结果不为1
            if (results.affectedRows !== 1) return res.cc('修改密码失败')
            // 更改密码成功
            res.cc('修改密码成功', 0)
        })
    })
}

// 修改头像的处理函数
exports.updateAvatar = (req, res) => {
    //获取后缀名
    console.log(req.file)
    const extname = path.extname(req.file.originalname)
    // 文件类型判断
    if (req.file.size > 0 && req.file.size <= 2097152 && (extname === '.jpg' || extname === '.png' || extname === '.bmp' || extname === '.gif' || extname === '.jpeg')) {
        //获取上传成功之后的文件路径
        const filepath = req.file.path
        //上传之后文件的名称
        const filename = req.file.filename + extname
        const newfilename = path.join(path.dirname(filepath), filename)
        const imgUrl = "http://120.25.202.230:3007/static/" + filename
        //重命名，借用fs的rename重命名的方法，第一参数是源文件地址路径，第二个参数是将源文件改名后的地址(和参数一地址相同，只不过名字变了而已，两个参数都是地址)
        fs.rename(filepath, newfilename, err => {
            if (err) return res.send(err)
            else {
                // 更新用户头像url的sql
                const sql = `update ev_users set user_pic=? where id=?`
                db.query(sql, [imgUrl, req.user.id], (err, results) => {
                    // sql失败
                    if (err) return res.cc(err)
                    // sql成功,影响结果不为1
                    if (results.affectedRows !== 1) return res.cc('修改头像失败')
                    res.send({
                        status: 0,
                        message: "修改头像成功",
                        imgUrl
                    })
                })
            }
        })
    }
    else return res.cc('修改头像失败，图片类型不符合要求')
}


// 修改权限的处理函数
exports.updateRole = (req, res) => {
    // 验证操作者权限
    const sql = `select roles from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc('修改权限失败')
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('修改权限失败')
        // 操作者权限不足
        if (results[0].roles !== 1) return res.cc('操作者权限不足，修改失败')
        // 操作者修改自己权限
        if (req.body.id === req.user.id) return res.cc('操作者不能修改自己的权限，修改失败')
        // 修改用户权限sql
        // 0为降权限 1为升权限
        const sql1 = `update ev_users set roles=${req.body.roles} where id=?`
        db.query(sql1, [req.body.id], (err, results) => {
            // sql失败
            if (err) return res.cc('修改权限失败')
            // sql成功，影响结果不为1
            if (results.affectedRows !== 1) return res.cc('修改权限失败')
            res.cc('修改权限成功', 0)
        })
    })
}