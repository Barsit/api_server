

# 说明

1.项目的请求根路径为 `http://127.0.0.1:3007`

2.部分功能可请求[http://www.liulongbin.top:3007](http://www.liulongbin.top:3007)测试

3.文档线上地址https://www.showdoc.com.cn/dutElab

4.以 `/api` 开头的请求路径，不需要访问权限

5.以 `/my` 开头的请求路径，需要在请求头中携带 `Authorization` 身份认证字段，才能正常访问成功

6.所有接口0为请求成功，1为请求失败

7.数组内的数据+表示缩进

# 注册登录

## 注册

**简要描述：**

- 用户注册接口

**请求URL：**

- `/api/reguser`

**请求方式：**

- POST

**请求体：**

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

**返回示例**

```
{
  "status": 0,
  "message": "注册成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 登录

**简要描述：**

- 用户登录接口

**请求URL：**

- `/api/login`

**请求方式：**

- POST

**请求体：**

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

**返回示例**

```
{
  "status": 0,
  "message": "登录成功！",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                                         |
| :------ | :----- | -------------------------------------------- |
| status  | int    | 请求是否成功，0：成功；1：失败               |
| message | string | 请求结果的描述消息                           |
| token   | string | 用于有权限接口的身份认证，已添加Bearer字符串 |

# 个人中心

## 获取用户的基本信息

**简要描述：**

- 获取用户的基本信息

**请求URL：**

- `/my/userinfo`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**参数：**

- 无

**返回示例**

```
{
  "status": 0,
  "message": "获取用户基本信息成功！",
  "data": {
    "id": 1,
    "username": "admin",
    "nickname": "管理员",
    "email": "admin@qq.com",
    "user_pic": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F19%2F04%2F22%2F4a5503de7f3b91810b0c8f5645fb24cc.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646984806&t=2e783e9fff05a819fff45321a1d6a3e8"
}
```

**返回参数说明**

| 参数名     | 类型   | 说明                              |
| :--------- | :----- | --------------------------------- |
| status     | int    | 请求是否成功，0：成功；1：失败    |
| message    | string | 请求结果的描述消息                |
| data       | object | 用户的基本信息                    |
| + id       | int    | 用户的 id                         |
| + username | string | 用户名                            |
| + nickname | string | 昵称                              |
| + email    | string | 邮箱                              |
| + user_pic | string | 头像                              |
| + roles    | int    | 用户权限  0：普通用户 ；1：管理员 |

## 更新用户的基本信息

**简要描述：**

- 更新用户的基本信息

**请求URL：**

- `/my/userinfo`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名        | 必选 | 类型   | 说明             |
| :------------ | :--- | :----- | ---------------- |
| id            | 是   | number | 用户id           |
| nickname      | 否   | string | 昵称             |
| email         | 否   | string | 邮箱             |
| elab_group    | 否   | string | 组别             |
| grade         | 否   | string | 年级             |
| elab_position | 否   | string | 职位             |
| excellence    | 否   | string | 特长             |
| phone         | 否   | int    | 电话，必须为11位 |
| photo         | 否   | string | 照片             |
| major         | 否   | string | 专业             |

**返回示例**

```
{
  "status": 0,
  "message": "修改用户信息成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 重置密码

**简要描述：**

- 重置密码

**请求URL：**

- `/my/updatepwd`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| oldPwd | 是   | string | 原密码 |
| newPwd | 是   | string | 新密码 |

**返回示例**

```
{
  "status": 0,
  "message": "更新密码成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 更换头像

**简要描述：**

- 更换头像

**请求URL：**

- `/my/update/avatar`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| avatar | 是   | string | 新头像 |

**返回示例**

```
{
  "status": 0,
  "message": "更新头像成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 更改权限

**简要描述：**

- 更改权限

**请求URL：**

- `/my/update/updaterole`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型                 |
| :----- | :--- | :------------------- |
| id     | 是   | int                  |
| roles  | 是   | int 1：提权；0：降权 |

**返回示例**

```
{
  "status": 0,
  "message": "更改权限成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 获取所有成员信息

**简要描述：**

- 获取所有成员

**请求URL：**

- `/my/allmem`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

无参数

**返回示例**

```
{
    "status": 0,
    "message": "获取所有成员信息成功",
    "data": [
        { 
            //id=1已被删除
            "id": 2,
            "nickname": "李四",
            "email": "12312@qq.com",
            "elab_group": "软件组",
            "grade": "大一",
            "elab_position": "组员",
            "excellence": "无",
            "phone": "xxxxxxxxxxx",
            "major": "人工智能"
        },
        {
            "id": 3,
            "nickname": "王七",
            "email": "12q3@qq.com",
            "elab_group": "电子组",
            "grade": "大二",
            "elab_position": "组长",
            "excellence": "无",
            "phone": "xxxxxxxxxxx",
            "major": "电子信息工程"
        },
        {
            "id": 4,
            "nickname": "张二",
            "email": "124213@qq.com",
            "elab_group": "软件组",
            "grade": "大四",
            "elab_position": "班长",
            "excellence": "无",
            "phone": "xxxxxxxxxxx",
            "major": "自动化"
        },
        {
            "id": 5,
            "nickname": "张八",
            "email": "12243@qq.com",
            "elab_group": "电子组",
            "grade": "大二",
            "elab_position": "组长",
            "excellence": "无",
            "phone": "xxxxxxxxxxx",
            "major": "电气及其自动化"
        },
        {
            "id": 6,
            "nickname": "王五",
            "email": "123@qq.com",
            "elab_group": "软件组",
            "grade": "大二",
            "elab_position": "小组长",
            "excellence": "全栈开发",
            "phone": "18685544321",
            "major": "生物医学工程"
        }
    ]
}
```

**返回参数说明**

| 参数名         | 类型   | 说明                           |
| :------------- | :----- | ------------------------------ |
| status         | int    | 请求是否成功，0：成功；1：失败 |
| message        | string | 请求结果的描述消息             |
| data           | array  | 成员信息                       |
| +id            | int    | 成员id                         |
| +nickname      | string | 成员姓名                       |
| +email         | string | 成员邮箱                       |
| +elab_group    | string | 成员组别                       |
| +grade         | string | 成员年级                       |
| +elab_position | string | 成员职位                       |
| +excellence    | string | 成员特长                       |
| +phone         | int    | 成员电话                       |
| +major         | string | 成员专业                       |

## 获取单个成员信息

**简要描述：**

- 获取单个成员信息

**请求URL：**

- `/my/onemem/:id`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型 | 备注     |
| :----- | :--- | :--- | -------- |
| id     | 是   | int  | 动态参数 |

**返回示例**

```
{
    "status": 0,
    "message": "获取成员信息成功",
    "data": {
        "id": 2,
        "nickname": "李四",
        "email": "12312@qq.com",
        "elab_group": "软件组",
        "grade": "大一",
        "elab_position": "组员",
        "excellence": "无",
        "phone": "xxxxxxxxxxx",
        "major": "人工智能"
    }
}
```

**返回参数说明**

| 参数名         | 类型   | 说明                           |
| :------------- | :----- | ------------------------------ |
| status         | int    | 请求是否成功，0：成功；1：失败 |
| message        | string | 请求结果的描述消息             |
| data           | array  | 成员信息                       |
| +id            | int    | 成员id                         |
| +nickname      | string | 成员姓名                       |
| +email         | string | 成员邮箱                       |
| +elab_group    | string | 成员组别                       |
| +grade         | string | 成员年级                       |
| +elab_position | string | 成员职位                       |
| +excellence    | string | 成员特长                       |
| +phone         | int    | 成员电话                       |
| +major         | string | 成员专业                       |

## 删除成员

**简要描述：**

- 删除成员

**请求URL：**

- `/my/deletemem/:id`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型 | 备注     |
| :----- | :--- | :--- | -------- |
| id     | 是   | int  | 动态参数 |

**返回示例**

```
{
    "status": 0,
    "message": "删除成员成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 更改职位

**简要描述：**

- 更改职位，并决定是否更改权限

**请求URL：**

- `/my/update/updaterole`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名  | 必选 | 类型                   |
| :------ | :--- | :--------------------- |
| id      | 是   | int                    |
| positon | 是   | string                 |
| roles   | 是   | int   1：提权；0：降权 |

**返回示例**

```
{
  "status": 0,
  "message": "更改职位成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 获取系统信息

**简要描述：**

- 获取系统信息

**请求URL：**

- `/api/systeminfo/:id`

**请求方式：**

- GET

**请求体：**

无参数

**返回示例**

```
{
    "status": 0,
    "message": "获取系统信息成功",
    "data": [
        {
            "id": 1,
            "item_name": "科中管理系统7",
            "item_describe": "描述信息",
            "logo": "https://imgtu.com/i/HdFHhV",
            "picture": "https://img2.baidu.com/it/u=3879656243,3775782318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            "other": "其他信息"
        },
        {
            "id": 2,
            "item_name": "电气创新实践基地",
            "item_describe": "电气创新实践基地，简称“科中”......",
            "logo": "https://imgtu.com/i/RXucpF\r\n",
            "picture": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg80.gkzhan.com%2F9%2F20201110%2F637405897356098970570.png&refer=http%3A%2F%2Fimg80.gkzhan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647174785&t=c1e41335c5116ed340a1873d835f1fb3",
            "other": "其他信息"
        },
        {
            "id": 3,
            "item_name": "电子组",
            "item_describe": null,
            "logo": null,
            "picture": null,
            "other": null
        },
        {
            "id": 4,
            "item_name": "软件组",
            "item_describe": null,
            "logo": null,
            "picture": null,
            "other": null
        }
    ]
}
```

**返回参数说明**

| 参数名     | 类型   | 说明                           |
| :--------- | :----- | ------------------------------ |
| status     | int    | 请求是否成功，0：成功；1：失败 |
| message    | string | 请求结果的描述消息             |
| data       | array  | 请求成功返回数据               |
| +id        | int    | 信息id                         |
| +item_name | string | 名称                           |
| +describe  | string | 描述                           |
| +logo      | string | 标志                           |
| +picture   | string | 图片                           |
| +other     | string | 其他                           |

## 添加系统信息项

**简要描述：**

- 添加系统信息项

**请求URL：**

- `/my/add/systeminfo`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名        | 必选 | 类型   | 说明     |
| :------------ | :--- | :----- | -------- |
| item_name     | 否   | string | 名称     |
| item_describe | 否   | string | 描述信息 |
| logo          | 否   | string | 标志图片 |
| picture       | 否   | string | 其他图片 |
| other         | 否   | string | 其他信息 |

**返回示例**

```
{
    "status": 0,
    "message": "修改系统信息成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 删除系统信息项

**简要描述：**

- 删除系统信息项

**请求URL：**

- `/my/delete/systeminfo/:id`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型   | 说明                 |
| :----- | :--- | :----- | -------------------- |
| id     | 是   | string | 删除内容id，动态参数 |

**返回示例**

```
{
    "status": 0,
    "message": "删除系统信息成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 修改系统信息

**简要描述：**

- 修改系统信息

**请求URL：**

- `/my/update/systeminfo`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名        | 必选 | 类型   | 说明     |
| :------------ | :--- | :----- | -------- |
| id            | 是   | int    | id       |
| item_name     | 否   | string | 名称     |
| item_describe | 否   | string | 描述信息 |
| logo          | 否   | string | 标志图片 |
| picture       | 否   | string | 其他图片 |
| other         | 否   | string | 其他信息 |

**返回示例**

```
{
    "status": 0,
    "message": "修改系统信息成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 签到

**简要描述：**

- 用户签到接口

**请求URL：**

- `/my/signin`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名      | 必选 | 类型   | 说明     |
| :---------- | :--- | :----- | -------- |
| signin_time | 是   | string | 签到时间 |
| longitude   | 是   | float  | 纬度     |
| latitude    | 是   | float  | 经度     |

**返回示例**

```
{
    "status": 0,
    "message": "签到成功",
    "signid": 20
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |
| signid  | int    | 签到成功id，用于签退           |

## 签退

**简要描述：**

- 用户签退接口

**请求URL：**

- `/my/signout`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名       | 必选 | 类型   | 说明           |
| :----------- | :--- | :----- | -------------- |
| id           | 是   | int    | 签到时返回的id |
| signout_time | 是   | string | 签退时间       |

**返回示例**

```
{
    "status": 0,
    "message": "签退成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 所有用户某周签到时长

**简要描述：**

- 所有用户某周签到时长接口

**请求URL：**

- `/my/sign/time`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型  | 说明                       |
| :----- | :--- | :---- | -------------------------- |
| time   | 是   | sting | 根据此参数返回当周签到时长 |

**返回示例**

```
{
    "status": 0,
    "message": "获取签到时长成功",
    "data": [
        {
            "user_id": 4,
            "nickname": "张二",
            "SUM(operate_total)": 270
        },
        {
            "user_id": 5,
            "nickname": "李四",
            "SUM(operate_total)": 540
        },
        {
            "user_id": 6,
            "nickname": "王五",
            "SUM(operate_total)": 540
        },
        {
            "user_id": 19,
            "nickname": "xxx",
            "SUM(operate_total)": 850
        }
    ]
}
```

**返回参数说明**

| 参数名              | 类型   | 说明                           |
| :------------------ | :----- | ------------------------------ |
| status              | int    | 请求是否成功，0：成功；1：失败 |
| message             | string | 请求结果的描述消息             |
| data                | arr    | 返回信息                       |
| +user_id            | int    | 用户id                         |
| +nickname           | string | 用户姓名                       |
| +SUM(operate_total) | int    | 某周签到时长                   |

## 查询登录用户签到记录

**简要描述：**

- 查询登录用户签到记录接口

**请求URL：**

- `/my/sign/record`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

无

**返回示例**

```
{
    "status": 0,
    "message": "获取签到记录成功",
    "data": [
        {
            "id": 21,
            "user_id": 19,
            "nickname": "xxx",
            "signin_time": "2022-02-28T22:24:25.000Z",
            "signout_time": "2022-02-28T22:24:25.000Z",
            "longitude": 35.8725,
            "latitude": 120.032,
            "operate_total": 0
        },
        {
            "id": 22,
            "user_id": 19,
            "nickname": "xxx",
            "signin_time": "2022-02-28T17:53:44.000Z",
            "signout_time": "2022-02-28T22:24:25.000Z",
            "longitude": 35.8725,
            "latitude": 120.032,
            "operate_total": 750
        },
        {
            "id": 25,
            "user_id": 19,
            "nickname": "xxx",
            "signin_time": "2022-03-01T01:53:00.000Z",
            "signout_time": "2022-03-01T01:53:00.000Z",
            "longitude": 35.8725,
            "latitude": 120.032,
            "operate_total": 0
        },
        {
            "id": 26,
            "user_id": 19,
            "nickname": "xxx",
            "signin_time": "2022-03-01T01:53:00.000Z",
            "signout_time": "2022-03-01T03:33:00.000Z",
            "longitude": 35.8725,
            "latitude": 120.032,
            "operate_total": 100
        }
    ]
}
```

**返回参数说明**

| 参数名          | 类型   | 说明                           |
| :-------------- | :----- | ------------------------------ |
| status          | int    | 请求是否成功，0：成功；1：失败 |
| message         | string | 请求结果的描述消息             |
| data            | arr    | 返回信息                       |
| + id            | int    | 签到成功id                     |
| + user_id       | int    | 用户id                         |
| + nickname      | string | 用户姓名                       |
| + signin_time   | string | 签到时间                       |
| + signout_time  | string | 签退时间                       |
| + longitude     | float  | 纬度                           |
| + latitude      | float  | 经度                           |
| + operate_total | float  | 单次签到时长                   |

## 获取全部记录或某个成员记录

**简要描述：**

- 获取全部记录或某个成员记录
- 需要管理员权限
- 获取全部记录时根据用户分组

**请求URL：**

- `/my/sign/record/:user_id`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名  | 必选 | 类型 | 说明                                                         |
| :------ | :--- | :--- | ------------------------------------------------------------ |
| user_id | 是   | int  | 用户id，不为0时获取指定用户的全部记录，为0时获取所有用户全部记录 |

**返回示例**

```
{
    "status": 0,
    "message": "获取用户的记录成功",
    "data": [
        {
            "id": 19,
            "user_id": 4,
            "nickname": "张二",
            "GROUP_CONCAT(signin_time)": "2022-03-01 09:53:44,2022-03-01 09:53:44",
            "GROUP_CONCAT(signout_time)": "2022-03-01 14:24:25,2022-03-01 14:24:25",
            "GROUP_CONCAT(longitude)": "35.8725,35.8725",
            "GROUP_CONCAT(latitude)": "120.032,120.032",
            "GROUP_CONCAT(operate_total)": "270,270"
        },
        {
            "id": 17,
            "user_id": 5,
            "nickname": "李四",
            "GROUP_CONCAT(signin_time)": "2022-03-01 09:53:44,2022-03-01 09:53:44",
            "GROUP_CONCAT(signout_time)": "2022-03-01 14:24:25,2022-03-01 14:24:25",
            "GROUP_CONCAT(longitude)": "35.8725,35.8725",
            "GROUP_CONCAT(latitude)": "120.032,120.032",
            "GROUP_CONCAT(operate_total)": "270,270"
        },
        {
            "id": 15,
            "user_id": 6,
            "nickname": "王五",
            "GROUP_CONCAT(signin_time)": "2022-03-01 09:53:44,2022-03-01 09:53:44,2022-03-01 06:24:25,2022-03-01 06:24:25",
            "GROUP_CONCAT(signout_time)": "2022-03-01 14:24:25,2022-03-01 14:24:25,2022-03-01 06:24:25,2022-03-01 06:24:25",
            "GROUP_CONCAT(longitude)": "35.8725,35.8725,35.8725,35.8725",
            "GROUP_CONCAT(latitude)": "120.032,120.032,120.032,120.032",
            "GROUP_CONCAT(operate_total)": "270,270,0,0"
        },
        {
            "id": 25,
            "user_id": 19,
            "nickname": "xxx",
            "GROUP_CONCAT(signin_time)": "2022-03-01 09:53:00,2022-03-01 01:53:44,2022-03-01 06:24:25,2022-03-01 09:53:00",
            "GROUP_CONCAT(signout_time)": "2022-03-01 09:53:00,2022-03-01 06:24:25,2022-03-01 06:24:25,2022-03-01 11:33:00",
            "GROUP_CONCAT(longitude)": "35.8725,35.8725,35.8725,35.8725",
            "GROUP_CONCAT(latitude)": "120.032,120.032,120.032,120.032",
            "GROUP_CONCAT(operate_total)": "0,750,0,100"
        }
    ]
}
```

**返回参数说明**

| 参数名                        | 类型   | 说明                           |
| :---------------------------- | :----- | ------------------------------ |
| status                        | int    | 请求是否成功，0：成功；1：失败 |
| message                       | string | 请求结果的描述消息             |
| data                          | arr    | 返回信息                       |
| + id                          | int    | 签到成功id                     |
| + user_id                     | int    | 用户id                         |
| + nickname                    | string | 用户姓名                       |
| + GROUP_CONCAT(signin_time)   | string | 签到时间                       |
| + GROUP_CONCAT(signout_time)  | string | 签退时间                       |
| + GROUP_CONCAT(longitude)     | string | 纬度                           |
| + GROUP_CONCAT(latitude)      | string | 经度                           |
| + GROUP_CONCAT(operate_total) | string | 单次时长                       |

## 删除 恢复记录

**简要描述：**

- 删除 恢复接口

- 需要管理员权限

  第一次请求删除 再次请求可恢复删除

**请求URL：**

- `/my/sign/delete/:id`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型 | 说明           |
| :----- | :--- | :--- | -------------- |
| id     | 是   | int  | 签到时返回的id |

**返回示例**

```
{
    "status": 0,
    "message": "操作用户的记录成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 获取已删除记录

**简要描述：**

- 获取已删除记录

- 需要管理员权限


**请求URL：**

- `/my/sign/delete/record/:user_id`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名  | 必选 | 类型                                                         | 说明 |
| :------ | :--- | :----------------------------------------------------------- | ---- |
| user_id | 是   | int用户id，不为0时获取指定用户的全部记录，为0时获取所有用户全部记录 |      |

**返回示例**

```
{
    "status": 0,
    "message": "获取用户的删除记录成功",
    "data": [
        {
            "id": 27,
            "user_id": 6,
            "nickname": "王五",
            "signin_time": "2022-02-28T22:24:00.000Z",
            "signout_time": "2022-03-01T20:24:00.000Z",
            "longitude": 38.8857,
            "latitude": 121.528,
            "operate_total": 1320
        }
    ]
}
```

**返回参数说明**

| 参数名                        | 类型   | 说明                           |
| :---------------------------- | :----- | ------------------------------ |
| status                        | int    | 请求是否成功，0：成功；1：失败 |
| message                       | string | 请求结果的描述消息             |
| data                          | arr    | 返回信息                       |
| + id                          | int    | 签到成功id                     |
| + user_id                     | int    | 用户id                         |
| + nickname                    | string | 用户姓名                       |
| + GROUP_CONCAT(signin_time)   | string | 签到时间                       |
| + GROUP_CONCAT(signout_time)  | string | 签退时间                       |
| + GROUP_CONCAT(longitude)     | string | 纬度                           |
| + GROUP_CONCAT(latitude)      | string | 经度                           |
| + GROUP_CONCAT(operate_total) | string | 单次时长                       |

## 修改签到记录

**简要描述：**

- 修改签到接口
- 需要管理员权限
- 已被删除的记录需要先恢复才可以修改

**请求URL：**

- `/my/sign/update`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名        | 必选 | 类型   | 说明                                 |
| :------------ | :--- | :----- | ------------------------------------ |
| id            | 是   | int    | 签到时返回的id                       |
| signin_time   | 否   | string | 签到时间，后三个参数必须提供其中一个 |
| signout_time  | 否   | string | 签退时间，后三个参数必须提供其中一个 |
| operate_total | 否   | string | 单次时长，后三个参数必须提供其中一个 |

**返回示例**

```
{
    "status": 0,
    "message": "修改用户的记录成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |