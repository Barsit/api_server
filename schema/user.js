// 导入joi模块，定义效验规则
const { ref } = require('joi')
const joi = require('joi')

// 用户名校验规则
const username = joi.string().alphanum().min(1).max(10).required()
// 密码检验规则
const password = joi.string().pattern(/^[\S]{6,12}$/).required()
// id效验规则
const id = joi.number().min(1).integer().required()
//  nickname效验规则
const nickname = joi.string()
// email效验规则
const email = joi.string().email()
// elab_group效验规则
const elab_group = joi.string()
// grade效验规则
const grade = joi.string()
// elab_position效验规则 
const elab_position = joi.string()
// excellence效验规则
const excellence = joi.string()
// phone 效验规则
const phone = joi.number().min(10000000000).max(19999999999).error(new Error('电话号码格式错误！'))
// 头像验证规则
const photo = joi.string()
// 专业验证规则
const major = joi.string()
// 权限操作规则：1 提权 0 降权
const roles = joi.number().min(0).max(1).integer().required()
// 系统信息项名称验证规则
const item_name = joi.string()
// 描述信息验证规则
const item_describe = joi.string()
// 标志图片验证规则
const logo = joi.string()
// 其他图片验证规则
const picture = joi.string()
// 其他信息验证规则
const other = joi.string()
// 签到时间 日期 必须
const signin_time = joi.date().required()
const signin_time2 = joi.date() //非必选
// 纬度 
// const longitude = joi.number().required()
const longitude = joi.number().min(38.885529).max(38.885717).required()
// 经度
// const latitude = joi.number().required()
const latitude = joi.number().min(121.527802).max(121.528521).required()
// 签退时间
const signout_time = joi.date().required()
const signout_time2 = joi.date() //非必选
// 时长查询
const time = joi.date().required()
// 获取全部记录或某个成员记录 0:全部
const user_id = joi.number().integer().min(0).required()
// 修改签到时长
const operate_total = joi.number().min(0).integer()


// 导出注册登录的表单验证规则对象
exports.reg_login_schema = {
    // 对req.body中的数据进行验证
    body: {
        username,
        password
    }
}
// 导出修改用户信息的表单验证规则对象
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email,
        elab_group,
        grade,
        elab_position,
        excellence,
        phone,
        photo,
        major
    }
}
// 导出新旧密码的验证规则：新旧密码不一致
exports.update_password_schema = {
    body: {
        oldpwd: password,
        newpwd: joi.not(joi.ref('oldpwd')).concat(password)
    }
}
// 导出头像验证规则
exports.update_avatar_schema = {
    body: {
        avatar: joi.string().required()

    }
}
// 导出用户权限验证规则
exports.update_role_schema = {
    body: {
        id,
        roles
    }
}
// 导出id验证规则
exports.id_params_schema = {
    params: {
        id,
    }
}
// 导出修改职位验证规则
exports.position_body_schema = {
    body: {
        id,
        elab_position,
        roles
    }
}
// 导出添加信息信息验证规则
exports.add_systeminfo_schema = {
    body: {
        item_name,
        item_describe,
        logo,
        picture,
        other
    }
}
// 导出修改系统信息验证规则
exports.update_systeminfo_schema = {
    body: {
        id,
        item_name,
        item_describe,
        logo,
        picture,
        other
    }
}
// 导出签到参数验证规则
exports.sign_in_schema = {
    body:{
        signin_time,
        longitude,
        latitude
    }
}
// 导出签退参数验证规则
exports.sign_out_schema = {
    body:{
        id,
        signout_time
    }
}
// 导出签到时长查询参数验证规则
exports.sign_time_schema = {
    body:{
        time
    }
}
// 导出签到信息验证规则
exports.sign_record_schema = {
    params:{
        user_id
    }
}
// 导出删除恢复记录验证规则
exports.sign_delete_schema = {
    params:{
        id
    }
}
// 导出修改记录验证规则
exports.sign_update_schema = {
    body:{
        id,
        signin_time2,
        signout_time2,
        operate_total
    }
}