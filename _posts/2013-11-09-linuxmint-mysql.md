---
layout:		post
title:  	"Linuxmint 安装与配置 MySQL"
category: 	linuxmint
tags:		[linuxmint, mysql]
---

安装 mysql 
> sudo apt-get install mysql-server

安装 mysql 工具
> sudo apt-get install mysql-workbench

编辑 my.cnf 文件
> sudo vim /etc/mysql/my.cnf

### 绑定IP

bind-address = 127.0.0.1

### 使用 UTF-8 字符集

	[client]
	default-character-set=utf8

	[mysqld]
	character_set_server = utf8
	lower_case_table_names=1 		#不区分大小写

### 设置密码
> mysql -u root

	mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('yourpassword');
	
### 添加用户

	mysql> GRANT ALL PRIVILEGES ON *.* TO 'alex'@'localhost' IDENTIFIED BY 'linuxmint' WITH GRANT OPTION;
	mysql> GRANT ALL PRIVILEGES ON *.* TO 'alex'@'%' IDENTIFIED BY 'linuxmint' WITH GRANT OPTION;

### 查看字符集设置
show variables like 'collation%';
SHOW VARIABLES LIKE 'character%';

### SQL改变字符集
alter database mydb character set utf-8;
create database mydb character set utf-8;

