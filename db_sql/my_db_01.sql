/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 8.0.22 : Database - my_db_01
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`my_db_01` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `my_db_01`;

/*Table structure for table `ev_system` */

DROP TABLE IF EXISTS `ev_system`;

CREATE TABLE `ev_system` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `item_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '名称',
  `item_describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '描述',
  `logo` text CHARACTER SET utf8 COMMENT '标志',
  `picture` text CHARACTER SET utf8 COMMENT '图片',
  `other` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '其他内容',
  `delete_mark` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `item_name` (`item_name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `ev_system` */

insert  into `ev_system`(`id`,`item_name`,`item_describe`,`logo`,`picture`,`other`,`delete_mark`) values 
(1,'科中管理系统7','描述信息','https://imgtu.com/i/HdFHhV','https://img2.baidu.com/it/u=3879656243,3775782318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667','其他信息',0),
(2,'电气创新实践基地','电气创新实践基地，简称“科中”......','https://imgtu.com/i/RXucpF\r\n','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg80.gkzhan.com%2F9%2F20201110%2F637405897356098970570.png&refer=http%3A%2F%2Fimg80.gkzhan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647174785&t=c1e41335c5116ed340a1873d835f1fb3','其他信息',0),
(3,'电子组',NULL,NULL,NULL,NULL,0),
(4,'软件组',NULL,NULL,NULL,NULL,0),
(5,'管理系统2',NULL,NULL,NULL,NULL,1),
(6,'科中管理系统4',NULL,NULL,NULL,NULL,1),
(7,'科中管理系统5','描述信息','https://imgtu.com/i/HdFHhV','https://img2.baidu.com/it/u=3879656243,3775782318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667','其他信息',1),
(10,'科中管理系统6',NULL,'https://imgtu.com/i/HdFHhV','https://img2.baidu.com/it/u=3879656243,3775782318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667','其他信息',1),
(12,'科中管理系统8','描述信息','https://imgtu.com/i/HdFHhV','https://img2.baidu.com/it/u=3879656243,3775782318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667','其他信息',1),
(13,'科中管理系统9','描述信息','https://imgtu.com/i/HdFHhV','https://img2.baidu.com/it/u=3879656243,3775782318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667','其他信息',1);

/*Table structure for table `ev_times` */

DROP TABLE IF EXISTS `ev_times`;

CREATE TABLE `ev_times` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '数据id',
  `user_id` int unsigned NOT NULL COMMENT '用户id',
  `signin_time` datetime DEFAULT NULL COMMENT '签到时间',
  `signout_time` datetime DEFAULT NULL COMMENT '签退时间',
  `longitude` float DEFAULT NULL COMMENT '经度',
  `latitude` float DEFAULT NULL COMMENT '纬度',
  `iso_week` int DEFAULT NULL COMMENT 'iso周数',
  `operate_total` int DEFAULT '0' COMMENT '分段计时',
  `valid_mark` int DEFAULT '0' COMMENT '0为有效 1为无效',
  `signout_mark` int DEFAULT '0' COMMENT '签退标记 0：签到 1:签退',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `ev_times` */

insert  into `ev_times`(`id`,`user_id`,`signin_time`,`signout_time`,`longitude`,`latitude`,`iso_week`,`operate_total`,`valid_mark`,`signout_mark`) values 
(15,6,'2022-03-01 09:53:44','2022-03-01 14:24:25',35.8725,120.032,9,270,0,1),
(16,6,'2022-03-01 09:53:44','2022-03-01 14:24:25',35.8725,120.032,9,270,0,1),
(17,5,'2022-03-01 09:53:44','2022-03-01 14:24:25',35.8725,120.032,9,270,0,1),
(18,5,'2022-03-01 09:53:44','2022-03-01 14:24:25',35.8725,120.032,9,270,0,1),
(19,4,'2022-03-01 09:53:44','2022-03-01 14:24:25',35.8725,120.032,9,270,0,1),
(20,4,'2022-03-01 09:53:44','2022-03-01 14:24:25',35.8725,120.032,8,270,0,1),
(21,6,'2022-03-01 06:24:25','2022-03-01 06:24:25',35.8725,120.032,9,0,0,1),
(22,6,'2022-03-01 09:53:00',NULL,35.8725,120.032,9,0,0,0);

/*Table structure for table `ev_users` */

DROP TABLE IF EXISTS `ev_users`;

CREATE TABLE `ev_users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '昵称',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '邮箱',
  `user_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '头像',
  `roles` int DEFAULT '0' COMMENT '权限 0：提权 1：降权',
  `delete_mark` int DEFAULT '0' COMMENT '删除标记',
  `elab_group` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '组别',
  `grade` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '年级',
  `elab_position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '职位',
  `excellence` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '特长',
  `major` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '专业',
  `photo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '照片',
  `phone` bigint DEFAULT NULL COMMENT '电话',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `ev_users` */

insert  into `ev_users`(`id`,`username`,`password`,`nickname`,`email`,`user_pic`,`roles`,`delete_mark`,`elab_group`,`grade`,`elab_position`,`excellence`,`major`,`photo`,`phone`) values 
(1,'张三','666666','张三','2242@qq.com','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic%2F9b%2F44%2F1c%2F9b441c7299e1294079dd569ae03989f8_1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647158957&t=57b91c4eaae2db8dc3842774d514c377',1,1,'ele','大二','小组长','全能','计算机科学与技术','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F8ad4b31c8701a18bc424e000942f07082938feb6.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647163708&t=277dfbdb26353a9b48b2e693d11e9eec',12311111111),
(2,'lisi','$2a$10$5HNNsk.onF3TvLAJSPHYJOVfhk79C9.l.d.qix8mT.szAnuMU3nMC','李四','12312@qq.com','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fa7%2F57%2F85%2Fa757850a29db44013a12ae694c12490f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647158957&t=5152177ac7ea543d9390ea032e62aa7e',0,1,'soft','大一','组员','无','人工智能','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.meituan.net%2Fwedding%2F6b94924d661c185960bd04c420161f4d262193.jpg%2540740w_2048h_0e_1l%257Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20&refer=http%3A%2F%2Fp0.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647163708&t=b52e2d980c0c5a0002a03f9436922cb1',0),
(3,'sdf','$2a$10$IrbRm4mZYHR9boB5yP8oG.I4qs1T1nMCUbjo6E6sH0tq4NzJ7zuRO','ffdd','12q3@qq.com','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic_source%2Ff8%2F3a%2F37%2Ff83a371f767b48b2f7e19ef7ac6b4ad9_8.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647158957&t=8219022cdeb502c99c54dbf193e389bb',0,0,'ele','大二','组长','无','电子信息工程','https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/5bafa40f4bfbfbed5633f75b7af0f736afc31fa8.jpg',0),
(4,'21edsd','$2a$10$akzUJtJFFLPo9hQZJEUSA.3pW0uFjezw8dOqhnq1k5UMyra0Tz6F2','张二','124213@qq.com','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F42%2Fb3%2F07%2F42b30724fa786ad61edcf8d18765acbb.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647158957&t=51a8d1ec8d0339b1e1b14b1451dd0a86',0,0,'soft','大四','班长','无','自动化','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fbe0dd2d6750dc9b0e9312bcfe030daade2d266b52602-4fcysB_fw236&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647163708&t=86ac8cb21b2c3f946f125f6addbb35f0',0),
(5,'21edsfsd','$2a$10$Q8qYUpGoBv109BlAEvhUxOR06HUoWyDxdUjIaB/TC8e9W7LBBc9lO','张八','12243@qq.com','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc0%2F8e%2F28%2Fc08e28eb52da5a2b5b451ad6272a8197.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647158957&t=d44229349f702154ff6b2e8946c47770',1,0,'ele','大二','组长','无','电气及其自动化','https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c9fcc3cec3fdfc03c352aebcd73f8794a4c2268f.jpg',0),
(6,'wangwu','$2a$10$tSDviosRonivrhH4fd3i4e3ZjTrEi3TH9b2c82Ophuze5Z7rblfLG','王五','123@qq.com','http://127.0.0.1:3007/static/0547f3b7ad65874dd1910bf26e1a71b8.jpg',1,0,'soft','大二','小组长','全栈开发','生物医学工程','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.meituan.net%2Fwedding%2F0cb368bec6def7d4b253f9e7a1514538251800.jpg%2540740w_2048h_0e_1l%257Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20&refer=http%3A%2F%2Fp0.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647163708&t=491a70619b673397093cbe31dc8c5305',18685544455),
(7,'zhangsan','$2a$10$/duWmEsy3YdZ8LOEYXESheC2VqFR9WuuDQrPf7E1I3VLoXJlc9Dwa',NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
