# api_server
科中管理系统api接口

## 项目文件

```
api_server:.
│  api接口说明.md
│  app.js  //入口文件
│  config.js  //配置文件
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│
├─db
│      index.js  //连接数据库
│
├─db_sql
│      my_db_01.sql  //数据库数据
│
├─imgs
│      20ab6ebad52a8984bdba4c2410ea769e.jpg
│
├─router //配置路由
│      member.js       //成员模块
│      sign.js         //签到模块
│      systeminfo.js   //系统信息
│      systeminfo_token.js //系统信息
│      user.js         //注册登录
│      userinfo.js     //用户信息
|      Verification.js  //验证码
│
├─router_handler  //路由处理函数（同上）
│      member.js
│      sign.js
│      systeminfo.js
│      user.js
│      userinfo.js
|      Verification.js
│
└─schema  //请求参数校验
        user.js
```



## 下载

 git clone git://github.com/Barsit/api_server.git

## 运行

npm install

node app.js

