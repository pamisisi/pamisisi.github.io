---
layout:		post
title:  	"Linuxmint 安装与配置 apache2"
category: 	linuxmint
tags:		[linuxmint, apache]
---

### 安装apache2
> sudo apt-get install apache2

sudo sh -c 'echo "ServerName alex.gov" >> /etc/apache2/conf.d/name'

测试 `http://localhost/`  

### userdir 模块配置
> sudo a2enmod userdir  
> sudo /etc/init.d/apache2 restart  

#### userdir.conf 配置
> sudo vim /etc/apache2/mods-enabled/userdir.conf

	UserDir Documents/webSite
	UserDir disabled *
	UserDir enabled alex
	
	<Directory /home/*/Documents/webSite>

#### 访问页面403
用户主目录最少要可执行权限
> sudo chmod 711 /home/alex

webSite最少要755行权限
> chmod 755 webSite